import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LoadereComponent } from './component/loader/loader.component';


@NgModule({
    declarations: [LoadereComponent],
    imports: [
        ReactiveFormsModule, 
        FormsModule, 
        NgxChartsModule
    ],
    exports: [
        ReactiveFormsModule, 
        FormsModule, 
        NgxChartsModule,
        LoadereComponent
    ]
})
export class SharedModule {}