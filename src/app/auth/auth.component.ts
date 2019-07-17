import { Component, OnInit, HostBinding } from "@angular/core";
import { fadeStateTrigger } from '../shared/animations/fade.animation';
import { Router } from '@angular/router';

@Component({
    selector: 'wfm-auth',
    templateUrl: './auth.component.html',
    animations: [fadeStateTrigger]
})

export class AuthComponent implements OnInit{
    @HostBinding('@fade') a = true;
    
    
    constructor(private router: Router){}

    ngOnInit(){
        this.router.navigate(['/login']);
    }
}