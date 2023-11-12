import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { ShellFeatureModule } from '@positioner/shell-feature';

@NgModule({
  declarations: [AppComponent],
  imports: [IonicModule.forRoot(), ShellFeatureModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
