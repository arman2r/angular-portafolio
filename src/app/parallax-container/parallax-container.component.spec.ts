import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxContainerComponent } from './parallax-container.component';

describe('ParallaxContainerComponent', () => {
  let component: ParallaxContainerComponent;
  let fixture: ComponentFixture<ParallaxContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallaxContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
