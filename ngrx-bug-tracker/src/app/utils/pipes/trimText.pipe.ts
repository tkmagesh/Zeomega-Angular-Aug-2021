import { PipeTransform } from "@angular/core";
import { Pipe } from "@angular/core";

@Pipe({
    name : 'trimtext'
})
export class TrimTextPipe implements PipeTransform {
    transform(text: string, maxLength : number = 30) : string {
        return text.length <= maxLength ? text : text.substr(0,maxLength) + '...';
    }

}