import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsdocumentationComponent } from './jsdocumentation.component';

describe('JsdocumentationComponent', () => {
  let component: JsdocumentationComponent;
  let fixture: ComponentFixture<JsdocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsdocumentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsdocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
