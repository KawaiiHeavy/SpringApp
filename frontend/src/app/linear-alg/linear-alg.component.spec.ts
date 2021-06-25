import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearAlgComponent } from './linear-alg.component';

describe('LinearAlgComponent', () => {
  let component: LinearAlgComponent;
  let fixture: ComponentFixture<LinearAlgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinearAlgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearAlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
