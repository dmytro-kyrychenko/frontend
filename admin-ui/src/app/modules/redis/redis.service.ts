import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedisService {
  private redisRoute = '/api/admin/yangcatalog-redis';
  constructor(private http: HttpClient) { }

  fetchRedisDocument(): Observable<any> {
    const headers = new HttpHeaders({
      Accept: 'text/plain',
      'Content-Type': 'text/plain'
    });
    return this.http.get(this.redisRoute, { headers });
  }

  saveRedisDocument(redisDocument: string): Observable<any> {
    const headers = new HttpHeaders({
      Accept: 'text/plain',
      'Content-Type': 'application/json'
    });
    const body = {
      input: {
        data: redisDocument
      }
    };
    return this.http.put(this.redisRoute, body, { headers });
  }
}
