import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeblogComponent } from './codeblog.component';

describe('CodeblogComponent', () => {
  let component: CodeblogComponent;
  let fixture: ComponentFixture<CodeblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeblogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
