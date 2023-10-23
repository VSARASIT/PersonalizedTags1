import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTwentySixComponent } from './page-twenty-six.component';

describe('PageTwentySixComponent', () => {
  let component: PageTwentySixComponent;
  let fixture: ComponentFixture<PageTwentySixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageTwentySixComponent]
    });
    fixture = TestBed.createComponent(PageTwentySixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
