import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes = [
   /* {path: '', redirectTo: '/dashboard', pathMatch: 'full'},    
    {path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'}},*/
    
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
