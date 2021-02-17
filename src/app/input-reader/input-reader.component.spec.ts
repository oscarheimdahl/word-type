import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputReaderComponent } from './input-reader.component';

describe('InputReaderComponent', () => {
  let component: InputReaderComponent;
  let fixture: ComponentFixture<InputReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputReaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
