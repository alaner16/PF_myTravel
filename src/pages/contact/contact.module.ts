import { NgModule} from '@angular/core';
import { HomePage} from '../home/home';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [HomePage],
    imports: [
        IonicPageModule.forChild(HomePage),

    ],
})
export class ContacPageModule { }