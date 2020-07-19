import {Component, OnInit, inject, Inject} from '@angular/core';
import {RegionService} from '../region.service';
import {Region, Villages} from '../interface';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  regions: Region[] = [];

  constructor(private regionService: RegionService, public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Villages) {
  }

  ngOnInit(): void {
    this.regionService.getRegions().subscribe((data) => {
        this.regions = data.filter(el => el.id !== 1);
      },
      (error) => {
        console.warn(error);
      });
  }

}
