import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LocationModel } from 'src/app/models/location.model';
import { PlaceModel } from 'src/app/models/place.model';
import { CategoryService } from 'src/app/services/category.service';
import { PlaceService } from 'src/app/services/place.service';

@Component({
    selector: 'app-add',
    templateUrl: './add.page.html',
    styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
    private placeForm: FormGroup;
    private categories: Array<string>;
    private submited: boolean = false;
    private loader: boolean = false;
    private nativePicture: string;

    constructor(
        public formBuilder: FormBuilder,
        public router: Router,
        public camera: Camera,
        public categoryService: CategoryService, 
        public placeService: PlaceService
    ){}

    ngOnInit(){
        this.categories = this.categoryService.getAll();
        this.buildForm();
    }

    buildForm(){
        this.placeForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            description: ['', [Validators.required, Validators.minLength(20)]],
            address: ['', [Validators.required]],
            image: [''],
            nativeImage: [''],
            note: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
            category: ['', [Validators.required]],
        }, {
            validator: this.validateImage('image', 'nativeImage'),
        });
    }

    save(){
        this.submited = true;
        if(!this.placeForm.valid){
            return;
        }
        this.loader = true;

        let values = this.placeForm.value;
        let image = this.nativePicture ? this.nativePicture : values['image'];
        
        let location = new LocationModel(values['address']);
        let place = new PlaceModel(
            values['name'],
            values['description'],
            location,
            image,
            values['note'],
            values['category'],
            new Date()
        );

        this.placeService.add(place).subscribe(place => {
            this.router.navigate(['/show', place.id]);
        }).add(() => {
            this.loader = false;
        });
    }

    getForm(){
        return this.placeForm.controls;
    }

    takePicture(){
        const options: CameraOptions = {
            quality: 20,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        this.camera.getPicture(options).then(data => {
            this.nativePicture = 'data:image/jpeg;base64,' + data;
            this.getForm().nativeImage.setValue(this.nativePicture);
        });
    }

    validateImage(form: string, native: string){
        return (formGroup: FormGroup) => {
            let image = formGroup.controls[form];
            let nativeImage = formGroup.controls[native];

            if(nativeImage.value){
                return image.setErrors(null);
            }

            let regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
            if(image.value && regex.test(image.value)){
                return image.setErrors(null);
            }

            return image.setErrors({noImage: true});
        };
    }
}
