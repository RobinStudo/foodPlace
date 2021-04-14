import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PlaceService {
    private url: string = "http://localhost:3000/place";

    constructor(public http: HttpClient){}

    getAll(){
        return this.http.get( this.url );
    }

    getById(id: number){
        return this.http.get( this.url + '/' + id );
    }
}
