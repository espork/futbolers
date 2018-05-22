import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayedComponent } from './played.component';

describe('PlayedComponent', () => {
  let component: PlayedComponent;
  let fixture: ComponentFixture<PlayedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
