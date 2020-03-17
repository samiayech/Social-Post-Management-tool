import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapmaignComponent } from './capmaign.component';

describe('CapmaignComponent', () => {
  let component: CapmaignComponent;
  let fixture: ComponentFixture<CapmaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapmaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapmaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
