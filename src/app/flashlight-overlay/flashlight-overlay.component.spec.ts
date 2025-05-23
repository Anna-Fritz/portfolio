import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashlightOverlayComponent } from './flashlight-overlay.component';

describe('FlashlightOverlayComponent', () => {
  let component: FlashlightOverlayComponent;
  let fixture: ComponentFixture<FlashlightOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashlightOverlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlashlightOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
