import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class MockServerApiService {
    constructor(private http: HttpClient) {
    }

    public getMockResource(path: string): Observable<any> {
        return this.http.get(path);
    }
}
