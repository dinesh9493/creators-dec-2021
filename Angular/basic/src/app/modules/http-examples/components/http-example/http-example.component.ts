import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.scss']
})
export class HttpExampleComponent implements OnInit {

  httpResponse: any = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getPosts().subscribe(
      (res: any) => {
        this.httpResponse = res;
        console.log(res);
      },
      (error: any) => {
        console.log(error);
      },
    );
  }

}
