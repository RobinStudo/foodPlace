import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ExpandDirective } from '../directives/expand.directive';
import { CategoryIconPipe } from '../pipes/category-icon.pipe';

const contents = [ExpandDirective,CategoryIconPipe];

@NgModule({
    declarations: contents,
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: contents,
})
export class SharedModule { }
