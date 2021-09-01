import { Pipe, PipeTransform } from "@angular/core";
import * as moment from 'moment';
@Pipe({
    name : 'elapsed'
})
export class ElapsedPipe implements PipeTransform {
    transform(value: Date): string {
        return moment(value).fromNow()
    }
}