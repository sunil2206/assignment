import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstQuestionComponent } from './components/first-question/first-question.component';
import {FormsModule} from '@angular/forms';
import { SecondQuestionComponent } from './components/second-question/second-question.component';
import { ThirdQuestionComponent } from './components/third-question/third-question.component';
import { FourthQuestionComponent } from './components/fourth-question/fourth-question.component';
import { RouterModule } from '@angular/router';
import { CornerBoxComponent } from './components/corner-box/corner-box.component';
import { MiddleInputComponent } from './components/middle-input/middle-input.component';
import { YcomponentComponent } from './components/ycomponent/ycomponent.component';
import { XcomponentComponent } from './components/xcomponent/xcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstQuestionComponent,
    SecondQuestionComponent,
    ThirdQuestionComponent,
    FourthQuestionComponent,
    CornerBoxComponent,
    MiddleInputComponent,
    YcomponentComponent,
    XcomponentComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([{
          path: 'first_Question',
          component: FirstQuestionComponent
        },{
          path: 'second_Question',
          component: SecondQuestionComponent
        },{
          path: 'third_Question',
          component: ThirdQuestionComponent
        }, {
          path: 'fourth_Question',
          component: FourthQuestionComponent
        }])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
