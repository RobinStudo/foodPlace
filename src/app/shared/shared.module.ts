import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpandDirective } from '../directives/expand.directive';
import { CategoryIconPipe } from '../pipes/category-icon.pipe';

const contents = [ExpandDirective,CategoryIconPipe];

@NgModule({
    declarations: contents,
    imports: [
        CommonModule
    ],
    exports: contents,
})
export class SharedModule { }
