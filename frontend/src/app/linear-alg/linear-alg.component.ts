import {
  Component,
  ViewChildren,
  ElementRef,
  QueryList,
  OnInit,
  ViewChild
} from "@angular/core";
import { FormArray, FormGroup, FormControl,Validators } from "@angular/forms";
import { ArrowDivDirective } from "./arrow-div.directive";
import { KeyBoardService } from "./keyboard.service";
import { MatTable } from "@angular/material/table";

export const data = [["uno", "one", "odin"], ["dos", "two", "dva"], ["tres", "three", "tri"]];

@Component({
  selector: "app-linear-alg",
  styleUrls: ["./linear-alg.component.scss"],
  templateUrl: "./linear-alg.component.html"
})
export class LinearAlgComponent implements OnInit {
  @ViewChild(MatTable, { static: true }) table: MatTable<any>; //used when add a row, see comment in function add()
  displayedHeads: string[];
  displayedColumns: string[];
  myformArray: FormArray;

  columns: number;

  @ViewChildren(ArrowDivDirective) inputs: QueryList<ArrowDivDirective>;

  constructor(private keyboardService: KeyBoardService) {}
  ngOnInit() {
    this.displayedHeads = data[0].map((x, index) => "col" + index);
    this.displayedColumns = this.displayedHeads.concat("delete");
    this.myformArray = new FormArray(
      data.map(row => new FormArray(row.map(x => new FormControl(x,Validators.required))))
    );

    this.columns = data[0].length;
    this.keyboardService.keyBoard.subscribe(res => {
      this.move(res);
    });
  }

  delete(index: number) {
    this.myformArray.removeAt(index);
    this.table.renderRows();
  }
  add() {
    const empty = [];
    for (let i = 0; i < this.columns; i++) empty.push(true);

    this.myformArray.push(new FormArray(empty.map(x => new FormControl("",Validators.required))));
    this.table.renderRows();
  }
  move(object: { element: ElementRef<any>; action: any; }) {
    const inputToArray = this.inputs.toArray();
    const rows = this.myformArray.length;
    const cols = this.displayedColumns.length;
    let index = inputToArray.findIndex(x => x.element === object.element);
    switch (object.action) {
      case "UP":
        index--;
        break;
      case "DOWN":
        index++;
        break;
      case "LEFT":
        if (index - rows >= 0) index -= rows;
        else {
          let rowActual = index % rows;
          if (rowActual > 0) index = rowActual - 1 + (cols - 1) * rows;
        }
        break;
      case "RIGTH":
        console.log(index + rows, inputToArray.length);
        if (index + rows < inputToArray.length) index += rows;
        else {
          let rowActual = index % rows;
          if (rowActual < rows - 1) index = rowActual + 1;
        }
        break;
    }
    if (index >= 0 && index < this.inputs.length) {
      inputToArray[index].element.nativeElement.focus();
    }
  }
}
