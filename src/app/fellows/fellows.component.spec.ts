import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FellowsComponent } from './fellows.component';

describe('FellowsComponent', () => {
  let component: FellowsComponent;
  let fixture: ComponentFixture<FellowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FellowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FellowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
