import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient: HttpClient) { }

  public get(url: string, options?: any): Observable<any>{
    return this.httpClient.get(url, {...options});
  }

  public post(url: string, body: any, options?: any): Observable<any>{
    return this.httpClient.post(url, body, {...options});
  }

  public put(url: string, body: any, options?: any): Observable<any>{
    return this.httpClient.put(url, body, {...options});
  }
  
  public delete(url: string, options?: any): Observable<any>{
    return this.httpClient.delete(url, {...options});
  }
}
