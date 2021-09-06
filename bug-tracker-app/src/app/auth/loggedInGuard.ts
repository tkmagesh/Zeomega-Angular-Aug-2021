import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "./user.service";

@Injectable({
    providedIn : 'root'
})
export class LoggedInGuard implements CanActivate{
    constructor(private userService : UserService, private router : Router){
        
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const loggedIn = this.userService.isLoggedIn;
        if(!loggedIn){
            this.router.navigate(['/login'])
        }
        return loggedIn;
    }

}