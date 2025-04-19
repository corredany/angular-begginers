import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingLocationsComponent } from './housing-locations.component';

describe('HousingLocationsComponent', () => {
  let component: HousingLocationsComponent;
  let fixture: ComponentFixture<HousingLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingLocationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousingLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
