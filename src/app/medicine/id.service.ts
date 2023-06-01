import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class IdService {

  constructor() { }
  stream1=new Subject<number>();
}
