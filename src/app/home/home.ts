import { Component, inject } from "@angular/core";
import { HousingLocation } from "../housing-location/housing-location";
import { HousingLocationInfo } from "../housing-location";
import { HousingService } from "../housing.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-home",
  imports: [HousingLocation, FormsModule],
  template: `
    <section>
      <form (ngSubmit)="filterResults(filter.value)">
        <input type="text" placeholder="Filter by city" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      @for(HousingLocation of filteredLocationList; track $index){
      <app-housing-location
        [housingLocation]="HousingLocation"
      ></app-housing-location>
      }
    </section>
  `,
  styleUrls: ["./home.css"],
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocationInfo[] = [];
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string) {
    console.log("search term:", text);
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
    console.log("filtered:", this.filteredLocationList);
  }
}
