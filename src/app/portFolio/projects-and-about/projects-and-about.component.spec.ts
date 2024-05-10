import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsAndAboutComponent } from './projects-and-about.component';

describe('ProjectsAndAboutComponent', () => {
  let component: ProjectsAndAboutComponent;
  let fixture: ComponentFixture<ProjectsAndAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsAndAboutComponent]
    });
    fixture = TestBed.createComponent(ProjectsAndAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
