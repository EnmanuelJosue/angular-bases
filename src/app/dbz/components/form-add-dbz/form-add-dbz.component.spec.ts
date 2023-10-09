import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddDbzComponent } from './form-add-dbz.component';

describe('FormAddDbzComponent', () => {
  let component: FormAddDbzComponent;
  let fixture: ComponentFixture<FormAddDbzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddDbzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddDbzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
