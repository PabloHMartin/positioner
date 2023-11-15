import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { Route, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

export const routes: Route[] = [{ path: '', component: HomepageComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), IonicModule],
  declarations: [HomepageComponent],
  exports: [HomepageComponent],
})
export class HomepageModule {}
