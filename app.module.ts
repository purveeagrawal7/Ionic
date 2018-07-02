import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, ViewChildren } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NewpagePage } from '../pages/newpage/newpage';
import { TabsPage } from '../pages/tabs/tabs';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SqlitehelperProvider } from '../providers/sqlitehelper/sqlitehelper';
import { TodoServiceProvider } from '../providers/todo-service/todo-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NewpagePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    NgCircleProgressModule.forRoot({
      // set defaults here
      "percent":50,
      "backgroundColor": "#F1F1F1",
      "backgroundPadding": -18,
      "radius": 60,
      "toFixed": 2,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#FF6347",
      "innerStrokeColor": "#32CD32",
      "innerStrokeWidth": 1
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NewpagePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SqlitehelperProvider,
    TodoServiceProvider
  ]
})
export class AppModule {
}
