import { ChangeDetectionStrategy, Input } from "@angular/core";
import { Component } from "@angular/core";
import { Bug } from "../models/bug.model";

@Component({
    selector : 'app-bug-stats',
    template : `
        <h3>{{getCurrentTime()}}</h3>
        <section class="stats">
            <span class="closed">{{bugs | closedCount}}</span>
            <span> / </span>
            <span>{{bugs.length}}</span>
        </section>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BugStatsComponent{

    @Input('data')
    bugs : Bug[] = [];

    getCurrentTime() : string {
        return Date();
    }

}