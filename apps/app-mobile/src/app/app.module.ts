import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { ShellModule } from '@app/shell';

@NgModule({
  declarations: [AppComponent],
  imports: [IonicModule.forRoot(), ShellModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
