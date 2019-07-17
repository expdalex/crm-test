import { Component, OnInit, OnDestroy, AfterContentChecked, AfterContentInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { MessageService } from '../shared/services/message.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Message } from '../shared/models/message.model';
import * as moment from 'moment';
import { mergeMap, switchMap } from 'rxjs/operators';

import { User } from 'src/app/shared/models/user.model';



@Component({
  selector: 'chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit, OnDestroy {

  form: FormGroup;
  sub1: Subscription;
  sub2: Subscription;

  user: User;

  messages: any;

  isLoaded = false;

  constructor(private title: Title, private messagesService: MessageService) { 
    title.setTitle('Чат')
  }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
    console.log(this.user.name);

    this.form = new FormGroup({
      'content': new FormControl('')
    });

    this.sub1 = interval(2000).pipe(switchMap(()=>{
      return this.messagesService.getMessage()
    })).subscribe((m)=>{
      console.log(1);
      this.messages = m;
      this.isLoaded = true;
 
    });
    // this.sub1 = this.messagesService.getMessage().subscribe((m)=>{
    //   this.messages = m;
    //   this.isLoaded = true;
 
    // });
  }

  

  onSubmit(){
    const date = moment().format('DD.MM.YY HH:mm:ss');
    const content = this.form.value.content;
    const user = this.user.name;
    const message = new Message(date, user, content);
    this.messagesService.createNewMessage(message)
      .pipe(mergeMap(()=>this.messagesService.getMessage()))
      .subscribe((m)=>{
        this.messages = m;
        this.form.setValue({
          content: '',
        })
      })

    console.log(message);
  }

  onRefresh(){
    this.isLoaded = false;
    this.sub1 = this.messagesService.getMessage().subscribe((m)=>{
      this.messages = m;
      this.isLoaded = true;
    });
  }
  
  ngOnDestroy(){
    this.sub1.unsubscribe();
    if (this.sub2){
      this.sub2.unsubscribe();
    }
  }

  
}
