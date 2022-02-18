import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { JSON_API } from '../configs/url.configs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPosts() {
    return this.httpClient.get(JSON_API);
  }

}
