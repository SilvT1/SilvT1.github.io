import { TestBed, async } from '@angular/core/testing';
import { MatToolbarModule, MatTabsModule, MatIconModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { IntroComponent } from './content/intro/intro.component';
import { WorkexpComponent } from './content/workexp/workexp.component';
import { EduComponent } from './content/edu/edu.component';
import { SkillsComponent } from './content/skills/skills.component';
import { ContactComponent } from './content/contact/contact.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatIconModule,
        MatTabsModule,
        MatToolbarModule
      ],
      declarations: [
        AppComponent,
        ContactComponent,
        EduComponent,
        IntroComponent,
        SkillsComponent,
        ToolbarComponent,
        WorkexpComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Tiago Silva Portfolio'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tiago Silva Portfolio');
  });
});
