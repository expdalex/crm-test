
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { SystemComponent } from './system.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { PlanningPageComponent } from './planning-page/planning-page.component';
import { RecordsPageComponent } from './records-page/records-page.component';
import { HistoryDetailComponent } from './history-page/history-detail/history-detail.component';
import { AuthGuard } from '../shared/services/auth.guard';


const routes: Routes = [
    {path: '', component: SystemComponent,
    canActivate: [AuthGuard],
    children: [
        {path: 'chat', component: ChatPageComponent},
        {path: 'history', component: HistoryPageComponent},
        {path: 'planning', component: PlanningPageComponent},
        {path: 'records', component: RecordsPageComponent},
        {path: 'history/:id', component: HistoryDetailComponent}
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemRoutingModule{}