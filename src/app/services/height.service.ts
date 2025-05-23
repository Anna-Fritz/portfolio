import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeightService {
  private heightSubject = new Subject<number>();
  heightChanged$ = this.heightSubject.asObservable();

  /**
   * Updates the height by emitting the new value to subscribers through a subject
   * @param height 
   */
  setHeight(height: number) {
    this.heightSubject.next(height);
  }
  
  constructor() { }
}
