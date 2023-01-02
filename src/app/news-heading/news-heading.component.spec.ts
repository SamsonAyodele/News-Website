import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsHeadingComponent } from './news-heading.component';

describe('NewsHeadingComponent', () => {
  let component: NewsHeadingComponent;
  let fixture: ComponentFixture<NewsHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
