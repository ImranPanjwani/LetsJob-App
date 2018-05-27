import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { CallNumber } from "@ionic-native/call-number";
import { EmailComposer } from "@ionic-native/email-composer";

import { MyApp } from "./app.component";
import { JobsPage } from "../pages/jobs/jobs";
import { JobDetailsPage } from "../pages/job-details/job-details";
import { JobsServiceProvider } from "../providers/jobs-service/jobs-service";
import { DateTimeServiceProvider } from "../providers/date-time-service/date-time-service";
import { AddJobPage } from "../pages/add-job/add-job";

@NgModule({
  declarations: [MyApp, JobsPage, JobDetailsPage],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: "",
      backButtonIcon: "arrow-round-back"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, JobsPage, JobDetailsPage],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    EmailComposer,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DateTimeServiceProvider,
    JobsServiceProvider
  ]
})
export class AppModule {}
