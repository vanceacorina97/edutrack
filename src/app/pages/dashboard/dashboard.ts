import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { DummyService, DummyUser } from '../../services/dummy.service';

@Component({
  selector: 'app-dashboard',
  imports: [AsyncPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  users$!: Observable<DummyUser[]>;

  constructor(private dummyService: DummyService) {}

  ngOnInit(): void {
    this.users$ = this.dummyService.getDummyUsers();
  }

  async addDummyUser(): Promise<void> {
    console.log('Adding dummy user...');
  }
}
