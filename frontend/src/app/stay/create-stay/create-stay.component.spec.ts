import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStayComponent } from './create-stay.component';

describe('CreateStayComponent', () => {
  let component: CreateStayComponent;
  let fixture: ComponentFixture<CreateStayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
