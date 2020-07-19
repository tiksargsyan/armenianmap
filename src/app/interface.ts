import {MatDialog} from '@angular/material/dialog';

export interface Region {
  id?: number;
  province: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Districts {
  id?: number;
  regionId: number;
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Cities {
  id?: number;
  regionId: number;
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Villages {
  id?: number;
  regionId: number;
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Streets {
  regionId: number;
  id?: number;
  districtsId: number;
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}
