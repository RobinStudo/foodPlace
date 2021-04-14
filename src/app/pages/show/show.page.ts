import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
    private place: any; 

    constructor(public route: ActivatedRoute, public placeService: PlaceService){}

    ngOnInit(){
        let id = parseInt( this.route.snapshot.params['id'] );
        this.place = this.placeService.getById(id);
    }

}
