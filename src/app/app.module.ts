import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgsearchComponent } from './imgsearch/imgsearch.component';
import { SearchserviceService} from './services/searchservice.service'
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HistoryComponent } from './history/history.component';
import { RegisterService } from './services/register.service';
@NgModule({
  declarations: [
    AppComponent,
    ImgsearchComponent,
    RegisterComponent,
    LoginComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SearchserviceService,RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
