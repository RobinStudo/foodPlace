import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PlaceService {
    private places: Array<any> = [
        {
            id: 1,
            name: 'Raptor Shack',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim quidem autem dolore optio cupiditate dignissimos doloremque maiores repellat? Repudiandae quod accusamus consequuntur autem facere, nisi similique aperiam quia asperiores?',
            location: {
                latitude: 50.6321028,
                longitude: 3.0619513,
                address: "18 Rue d'Amiens - 59000 Lille"
            }, 
            image: 'https://rs-menus-api.roocdn.com/images/53f7ea3b-eacb-414b-933e-f6b3266d0b6c/image.jpeg?width=1200&height=630&auto=webp&format=jpg&fit=crop&v=',
            note: 4.3,
            category: 'Burger',
            createdAt: new Date(),
        },
        {
            id: 2,
            name: 'Il bastione',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim quidem autem dolore optio cupiditate dignissimos doloremque maiores repellat? Repudiandae quod accusamus consequuntur autem facere, nisi similique aperiam quia asperiores?',
            location: {
                latitude: 50.637106,
                longitude: 3.05174,
                address: '1 Boulevard Vauban - 59000 Lille'
            }, 
            image: 'https://www.veggielille.com/wp-content/uploads/2018/10/44766982_273252776688092_8542954255441461248_n.jpg',
            note: 4.8,
            category: 'Italien',
            createdAt: new Date(),
        },
        {
            id: 3,
            name: 'Salsa Posada',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim quidem autem dolore optio cupiditate dignissimos doloremque maiores repellat? Repudiandae quod accusamus consequuntur autem facere, nisi similique aperiam quia asperiores?',
            location: {
                latitude: 50.6432222,
                longitude: 3.0572059,
                address: '9 Rue Saint-André - 59000 Lille'
            }, 
            image: 'https://lechti.com/app/uploads/2021/01/capture-decran-2021-01-22-a-11.26.29.png',
            note: 3.2,
            category: 'Mexicain',
            createdAt: new Date(),
        },
    ];

    constructor(){}

    getAll(){
        return this.places;
    }

    getById(id: number){
        return this.places.find(place => place.id === id);
    }
}
