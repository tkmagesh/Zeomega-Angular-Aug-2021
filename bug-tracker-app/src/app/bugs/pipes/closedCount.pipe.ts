import { Pipe, PipeTransform } from '@angular/core';
import { Bug } from '../models/bug.model';

@Pipe({
    name  : 'closedCount'
})
export class ClosedCountPipe  implements PipeTransform {
  transform(bugs: Bug[]): number {
    console.log('closedCount transform triggered')
    return bugs.filter(bug => bug.isClosed).length;
  }
}