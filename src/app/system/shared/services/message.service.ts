import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { BaseApi } from 'src/app/shared/core/base-api';
import { Message } from '../models/message.model';


@Injectable()
export class MessageService extends BaseApi {
    constructor(public http: HttpClient){
        super(http)
    }


    getMessage(){
        return this.get('messages');
    }

    createNewMessage(message: Message){
        return this.post('messages', message);
    }
}