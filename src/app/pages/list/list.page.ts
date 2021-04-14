import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PlaceService } from 'src/app/services/place.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
    private places: Array<any>;

    constructor(public alertCtrl: AlertController, public placeService: PlaceService){}

    ngOnInit(){
        this.places = this.placeService.getAll();
    }

    async showPreviewModal(){
        const alert = await this.alertCtrl.create({
            header: 'Bientôt disponible',
            message: 'Cette fonctionnalité sera bientôt ajouté. Restez connecté !',
            buttons: ['OK']
        });

        await alert.present();
    }
}
