import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TaskcomponentsComponent } from './components/taskcomponents/taskcomponents.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './components/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskInserterComponent } from './components/task-inserter/task-inserter.component';
import { AboutComponent } from './components/about/about.component';
import { DeleteAllComponent } from './components/delete-all/delete-all.component'




@NgModule({
  declarations: [
    AppComponent,
    TaskcomponentsComponent,
    TaskCardComponent,
    ButtonComponent,
    TaskInserterComponent,
    AboutComponent,
    DeleteAllComponent,
    ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
