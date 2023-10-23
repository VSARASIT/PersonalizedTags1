import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTwentySevenComponent } from './page-twenty-seven.component';

describe('PageTwentySevenComponent', () => {
  let component: PageTwentySevenComponent;
  let fixture: ComponentFixture<PageTwentySevenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageTwentySevenComponent]
    });
    fixture = TestBed.createComponent(PageTwentySevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
