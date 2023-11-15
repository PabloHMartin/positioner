import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PreloadAllModules,
  RouteReuseStrategy,
  RouterModule,
} from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
import { appRoutes } from './routes';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
})
export class ShellModule {}
