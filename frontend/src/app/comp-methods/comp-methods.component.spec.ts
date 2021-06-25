import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompMethodsComponent } from './comp-methods.component';

describe('CompMethodsComponent', () => {
  let component: CompMethodsComponent;
  let fixture: ComponentFixture<CompMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompMethodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
