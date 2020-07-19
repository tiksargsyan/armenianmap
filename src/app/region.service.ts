import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cities, Districts, Region, Streets, Villages} from './interface';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) {
  }

  getRegions(): Observable<Region[]> {
    return this.http.get<Region[]>('http://localhost:3000/regions');
  }

  getDistricts(): Observable<Districts[]> {
    return this.http.get<Districts[]>('http://localhost:3000/districts');
  }

  getCity(): Observable<Cities[]> {
    return this.http.get<Cities[]>('http://localhost:3000/cities');
  }

  getVillage(): Observable<Villages[]> {
    return this.http.get<Villages[]>('http://localhost:3000/villages');
  }

  getStreets(): Observable<Streets[]> {
    return this.http.get<Streets[]>('http://localhost:3000/streets');
  }

  postNewVillage(village): Observable<Villages> {
    return this.http.post<Villages>('http://localhost:3000/villages', village);
  }

  postNewStreet(street): Observable<Streets> {
    return this.http.post<Streets>('http://localhost:3000/streets', street);
  }
}
