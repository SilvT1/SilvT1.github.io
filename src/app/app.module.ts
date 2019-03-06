import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule, MatTabsModule, MatButtonModule, MatIconModule } from '@angular/material';
import { IntroComponent } from './content/intro/intro.component';
import { WorkexpComponent } from './content/workexp/workexp.component';
import { EduComponent } from './content/edu/edu.component';
import { SkillsComponent } from './content/skills/skills.component';
import { ContactComponent } from './content/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    IntroComponent,
    WorkexpComponent,
    EduComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
