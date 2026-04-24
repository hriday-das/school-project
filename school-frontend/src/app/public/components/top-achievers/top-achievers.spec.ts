import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAchievers } from './top-achievers';

describe('TopAchievers', () => {
  let component: TopAchievers;
  let fixture: ComponentFixture<TopAchievers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopAchievers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopAchievers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
