import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

export interface DummyUser {
  id?: string;
  name: string;
  email: string;
  role: string;
}

@Injectable({ providedIn: 'root' })
export class DummyService {
  constructor(private firestore: Firestore) {}

  getDummyUsers(): Observable<DummyUser[]> {
    const usersRef = collection(this.firestore, 'dummyUsers');
    return collectionData(usersRef, { idField: 'id' }) as Observable<
      DummyUser[]
    >;
  }
}
