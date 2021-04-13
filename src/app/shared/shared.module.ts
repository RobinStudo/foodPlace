import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpandDirective } from '../directives/expand.directive';


@NgModule({
    declarations: [ExpandDirective],
    imports: [
        CommonModule
    ],
    exports: [ExpandDirective]
})
export class SharedModule { }
