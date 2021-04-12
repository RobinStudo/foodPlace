import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
    private title: string = 'Contactez-nous';
    private img: string = 'https://via.placeholder.com/350x150';
    private users: Array<string> = ['Paul', 'Pierre', 'Leo'];
    private isConnected: boolean = true;


    constructor() { }

    ngOnInit() {
    }

    clickedPicture(){
        console.log('Clicked');
    }

    // keyPressed(value){
    //     console.log(value);
    // }
}
