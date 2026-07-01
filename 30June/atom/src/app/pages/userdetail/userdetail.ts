import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, users } from '../../utils/utils';

@Component({
  selector: 'app-userdetail',
  imports: [],
  templateUrl: './userdetail.html',
  styleUrl: './userdetail.css',
})
export class Userdetail{
  private route = inject(ActivatedRoute);
  user = users;
  userId = 0;
  // userData = {};
  userData = signal<User | null>(null);
  ngOnInit() {
    const currId = Number(this.route.snapshot.paramMap.get('userId'));
    console.log(currId);
    this.userId = currId;
    const arrVal = this.user.find(user => user.id === this.userId) || null;

    console.log(arrVal);
    this.userData.set(arrVal);
  }
}
