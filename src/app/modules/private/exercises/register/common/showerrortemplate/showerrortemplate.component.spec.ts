import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowerrortemplateComponent } from './showerrortemplate.component';

describe('ShowerrortemplateComponent', () => {
  let component: ShowerrortemplateComponent;
  let fixture: ComponentFixture<ShowerrortemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowerrortemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowerrortemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
