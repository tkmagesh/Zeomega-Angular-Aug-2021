import { NgModule } from "@angular/core";
import { ElapsedPipe } from "./pipes/elapsed.pipe";
import { SortPipe } from "./pipes/sort.pipe";
import { TrimTextPipe } from "./pipes/trimText.pipe";

const All_Pipes = [
    ElapsedPipe, 
    SortPipe, 
    TrimTextPipe
];

@NgModule({
    declarations:[
        ...All_Pipes,
    ],
    providers : [],
    imports : [],
    exports :[
        ...All_Pipes
    ] /* all public entities that need to be accessed from outside */
})
export class UtilsModule{

}