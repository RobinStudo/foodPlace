import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
    private places: Array<any> = [
        {
            id: 1,
            name: 'Raptor Shack',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim quidem autem dolore optio cupiditate dignissimos doloremque maiores repellat? Repudiandae quod accusamus consequuntur autem facere, nisi similique aperiam quia asperiores?',
            location: {
                latitude: 50.6321028,
                longitude: 3.0619513,
                address: '12 rue de rivoli - 59000'
            }, 
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/5e/6d/eb/restaurant.jpg',
            note: 4.3,
            category: 'Burger',
            createdAt: new Date(),
        },
        {
            id: 2,
            name: 'Il bastione',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim quidem autem dolore optio cupiditate dignissimos doloremque maiores repellat? Repudiandae quod accusamus consequuntur autem facere, nisi similique aperiam quia asperiores?',
            location: {
                latitude: 50.6321028,
                longitude: 3.0619513,
                address: '12 rue de rivoli - 59000'
            }, 
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/5e/6d/eb/restaurant.jpg',
            note: 4.8,
            category: 'Italien',
            createdAt: new Date(),
        },
        {
            id: 3,
            name: 'Salsa Posada',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim quidem autem dolore optio cupiditate dignissimos doloremque maiores repellat? Repudiandae quod accusamus consequuntur autem facere, nisi similique aperiam quia asperiores?',
            location: {
                latitude: 50.6321028,
                longitude: 3.0619513,
                address: '12 rue de rivoli - 59000'
            }, 
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/5e/6d/eb/restaurant.jpg',
            note: 3.2,
            category: 'Mexicain',
            createdAt: new Date(),
        },
    ];


    constructor(public alertCtrl: AlertController){}

    ngOnInit() {
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
