import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocations } from '../housing-locations';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocations: HousingLocations | undefined;


  constructor(){
    const housingLocationsId = Number(this.route.snapshot.params['id']);
    this.housingLocations = this.housingService.getHousingLocaitonById(housingLocationsId)
  }

}
