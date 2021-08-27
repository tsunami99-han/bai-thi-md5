import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Player} from "../model/player";
import {environment} from "../../environments/environment";


const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Player[]> {
    return this.httpClient.get<Player[]>(API_URL);
  }

  save(player: Player): Observable<Player> {
    return this.httpClient.post<Player>(API_URL, player);
  }

  findById(id: number): Observable<Player> {
    return this.httpClient.get<Player>(`${API_URL}/${id}`);
  }

  update(id: number, player: Player): Observable<Player> {
    return this.httpClient.put<Player>(`${API_URL}/${id}`, player);
  }

  delete(id: number): Observable<Player> {
    return this.httpClient.delete<Player>(`${API_URL}/${id}`);
  }
}
