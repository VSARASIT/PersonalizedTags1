import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSixToEightComponent } from './page-six-to-eight.component';

describe('PageSixToEightComponent', () => {
  let component: PageSixToEightComponent;
  let fixture: ComponentFixture<PageSixToEightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageSixToEightComponent]
    });
    fixture = TestBed.createComponent(PageSixToEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
