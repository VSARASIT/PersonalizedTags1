import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEighteenComponent } from './page-eighteen.component';

describe('PageEighteenComponent', () => {
  let component: PageEighteenComponent;
  let fixture: ComponentFixture<PageEighteenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageEighteenComponent]
    });
    fixture = TestBed.createComponent(PageEighteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
