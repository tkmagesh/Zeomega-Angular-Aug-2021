import { Input } from "@angular/core";
import { Component } from "@angular/core";
import { Bug } from "../models/bug.model";

@Component({
    selector : 'app-bug-stats',
    template : `
        <section class="stats">
            <span class="closed">{{bugs | closedCount}}</span>
            <span> / </span>
            <span>{{bugs.length}}</span>
        </section>
    `
})
export class BugStatsComponent{

    @Input('data')
    bugs : Bug[] = [];

}