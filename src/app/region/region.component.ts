import {Component, OnInit} from '@angular/core';
import {Cities, Districts, Region, Streets, Villages} from '../interface';
import {RegionService} from '../region.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';
import {StreetDialogComponent} from '../street-dialog/street-dialog.component';


@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  mapMarkers: { lat: number; lng: number }[] = [];
  defaultMarker: {};
  zoom = 8;

  regions: Region[] = [];
  regionId: number[];

  districts: Districts[] = [];
  districtsId: number[];
  selectedDistricts: Districts[];

  cities: Cities[] = [];
  cityId: number[];
  selectedCity: Cities[];

  villages: Villages[] = [];
  villageId: number[];
  selectedVillage: Villages[];

  streets: Streets[] = [];
  streetId: number[];
  selectedStreet: Streets[];


  constructor(private regionService: RegionService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.defaultMarker = {lat: 40.17724, lng: 44.51267};
    this.regionService.getRegions().subscribe((data) => {
      this.regions = data;
    }, error => {
      console.warn(error.message);
    });
    this.regionService.getDistricts().subscribe((data) => {
      this.districts = data;
    }, error => {
      console.warn(error.message);
    });
    this.regionService.getCity().subscribe((data) => {
      this.cities = data;
    }, error => {
      console.warn(error.message);
    });
    this.regionService.getVillage().subscribe((data) => {
      this.villages = data;
    }, error => {
      console.warn(error.message);
    });
    this.regionService.getStreets().subscribe((data) => {
      this.streets = data;
    }, error => {
      console.warn(error.message);
    });
  }

  selectRegion() {
    this.mapMarkers = [];
    this.mapMarkers = this.regions.filter(el => this.regionId.includes(el.id)).map(el => el.coordinates);
    this.selectedCity = [];
    this.selectedCity = this.cities.filter(el => this.regionId.includes(el.regionId));
    this.selectedVillage = [];
    this.selectedVillage = this.villages.filter(el => this.regionId.includes(el.regionId));
    this.selectedDistricts = [];
    this.selectedDistricts = this.districts.filter(el => this.regionId.includes(el.regionId));
    this.defaultMarker = this.mapMarkers[this.mapMarkers.length - 1];
    this.zoom = 8;
    if (this.regionId.length <= 0) {
      this.districtsId = [];
      this.cityId = [];
      this.streetId = [];
      this.villageId = [];
    }
  }

  selectCity() {
    this.mapMarkers = this.selectedCity.filter(el => this.cityId.includes(el.id)).map(el => el.coordinates);
    this.zoom = 10;
    this.defaultMarker = this.mapMarkers[this.mapMarkers.length - 1];
  }

  selectVillage() {
    this.mapMarkers = this.selectedVillage.filter(el => this.villageId.includes(el.id)).map(el => el.coordinates);
    this.zoom = 12;
    this.defaultMarker = this.mapMarkers[this.mapMarkers.length - 1];
  }

  selectDistricts() {
    this.mapMarkers = [];
    this.mapMarkers = this.districts.filter(el => this.districtsId.includes(el.id)).map(el => el.coordinates);
    this.zoom = 13;
    this.selectedStreet = [];
    this.selectedStreet = this.streets.filter(el => this.districtsId.includes(el.districtsId));
    if (this.districtsId.length === 0) {
      this.streetId = [];
    }
    this.defaultMarker = this.mapMarkers[this.mapMarkers.length - 1];
  }

  selectStreets() {
    this.mapMarkers = this.selectedStreet.filter(el => this.streetId.includes(el.id)).map(el => el.coordinates);
    this.zoom = 15;
    this.defaultMarker = this.mapMarkers[this.mapMarkers.length - 1];
  }

  addNewVillage() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        regionId: null,
        name: '',
        coordinates: {
          lat: null,
          lng: null
        }
      }
    });
    dialogRef.afterClosed().subscribe((data) => {
      if (!data) {
        return;
      }
      this.regionService.postNewVillage(data).subscribe(() => {
        if (!this.regionId || !this.districtsId) {
          this.villages.push(data);
        } else {
          this.villages.push(data);
          this.selectedVillage.push(data);
        }
      });
    });
  }

  addNewStreet() {
    const dialogRef = this.dialog.open(StreetDialogComponent, {
      data: {
        districtsId: null,
        name: '',
        coordinates: {
          lat: null,
          lng: null
        }
      }
    });
    dialogRef.afterClosed().subscribe((data) => {
      if (!data) {
        return;
      }
      this.regionService.postNewStreet(data).subscribe(() => {
        if (!this.regionId || !this.districtsId) {
          this.streets.push(data);
        } else {
          this.streets.push(data);
          this.selectedStreet.push(data);
        }
      });
    });
  }
}
