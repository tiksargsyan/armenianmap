import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cities, Districts, Region, Streets, Villages} from './interface';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) {
  }

  getRegions(): Observable<Region[]> {
    return this.http.get<Region[]>(`${environment.firebaseConfig.databaseURL}/regions.json`);
  }

  getDistricts(): Observable<Districts[]> {
    return this.http.get<Districts[]>(`${environment.firebaseConfig.databaseURL}/districts.json`);
  }

  getCity(): Observable<Cities[]> {
    return this.http.get<Cities[]>(`${environment.firebaseConfig.databaseURL}/cities.json`);
  }

  getVillage(): Observable<Villages[]> {
    return this.http.get<Villages[]>(`${environment.firebaseConfig.databaseURL}/villages.json`);
  }

  getStreets(): Observable<Streets[]> {
    return this.http.get<Streets[]>(`${environment.firebaseConfig.databaseURL}/streets.json`);
  }

  postNewVillage(village: Villages): Observable<Villages> {
    return this.http.post<Villages>(`${environment.firebaseConfig.databaseURL}/villages.json`, village);
  }

  postNewStreet(street: Streets): Observable<Streets> {
    return this.http.post<Streets>(`${environment.firebaseConfig.databaseURL}/streets.json`, street);
  }
}
