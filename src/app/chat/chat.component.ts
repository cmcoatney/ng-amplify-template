import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Chat, APIService } from '../API.service';
import { ZenObservable } from 'zen-observable-ts';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  public createForm: FormGroup;
  private subscription: ZenObservable.Subscription | null = null;

  @Input() chats: Array<Chat> = [];

  username: string = 'username';

  constructor(private api: APIService, private fb: FormBuilder) {
    Auth.currentAuthenticatedUser().then((data) => {
      this.username = data.username;
    });

    this.createForm = this.fb.group({
      name: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  async ngOnInit() {
    /* fetch chats when app loads */
    this.api.ListChats().then((event) => {
      this.chats = event.items as Chat[];
    });

    /* subscribe to new chats being created */
    this.subscription = this.api
      .OnCreateChatListener()
      .subscribe((event: any) => {
        const newChat = event.value.data.onCreateChat;
        this.chats = [newChat, ...this.chats];
      });
  }

  public onCreate(chat: Chat) {
    chat.name = this.username;

    this.api
      .CreateChat(chat)
      .then(() => {
        console.log('item created!');
        this.createForm.reset();
      })
      .catch((e) => {
        console.log('error creating chat...', e);
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }

  go(URL: string | undefined) {
    console.log(URL);
    window.open(URL);
  }
}
