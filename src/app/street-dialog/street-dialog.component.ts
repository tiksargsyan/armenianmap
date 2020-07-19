import {Component, Inject, OnInit} from '@angular/core';
import {RegionService} from '../region.service';
import {Districts, Streets, Villages} from '../interface';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-street-dialog',
  templateUrl: './street-dialog.component.html',
  styleUrls: ['./street-dialog.component.css']
})
export class StreetDialogComponent implements OnInit {
  districts: Districts[] = [];

  constructor(private regionService: RegionService, public dialogRef: MatDialogRef<StreetDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Streets) {
  }

  ngOnInit(): void {
    this.regionService.getDistricts().subscribe((data) => {
      this.districts = data;
    });
  }

}
