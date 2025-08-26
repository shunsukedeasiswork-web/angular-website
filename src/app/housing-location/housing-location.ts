import { Component, input } from "@angular/core";
import { HousingLocationInfo } from "../housing-location";
import { RouterLink } from "@angular/router";
@Component({
  selector: "app-housing-location",
  imports: [RouterLink],
  templateUrl: "./housing-location.html",
  styleUrls: ["./housing-location.css"],
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
