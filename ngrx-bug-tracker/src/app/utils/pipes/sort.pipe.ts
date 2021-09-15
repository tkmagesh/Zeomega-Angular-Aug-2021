import { Pipe, PipeTransform } from "@angular/core";

type Comparer = (item1 :any, item2 : any) => number;

@Pipe({
    name : 'sort',
    /* pure : false //NEVER EVER DO THIS */
})
export class SortPipe implements PipeTransform{
    private getDescComparer(comparer : Comparer) : Comparer {
        return function(item1 : any, item2 : any) : number {
            return comparer(item1, item2) * -1;
        };
    }

    private getComparer(attrName : string, isDesc : boolean = false) : Comparer {
        let comparer : Comparer = function(item1 : any, item2 : any) : number {
            if(item1[attrName] < item2[attrName]) return -1;
            if(item1[attrName] > item2[attrName]) return 1;
            return 0;
        }
        if (isDesc){
            return this.getDescComparer(comparer)
        } 
        return comparer;
    }

    transform(list: any[], sortAttr : string, isDesc : boolean = false) : any[] {
        if(!list || !list.length || !sortAttr) return list;
        let comparer = this.getComparer(sortAttr, isDesc);
        return list.sort(comparer);
    }
}
    