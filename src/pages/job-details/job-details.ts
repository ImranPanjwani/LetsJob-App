import { Component } from "@angular/core";
import { NavParams, ActionSheetController, ToastController } from "ionic-angular";
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';

import { Job } from "models/Job";
import { JobsServiceProvider } from "../../providers/jobs-service/jobs-service";
import { DateTimeServiceProvider } from "../../providers/date-time-service/date-time-service";

@Component({
  selector: "page-job-details",
  templateUrl: "job-details.html"
})
export class JobDetailsPage {
  selectedJob: Job;
  constructor(
    public jobsService: JobsServiceProvider,
    public dataTimeService: DateTimeServiceProvider,
    public actionsheetCtrl: ActionSheetController,
    private navParams: NavParams,
    private toastCtrl: ToastController,
    private callNumber: CallNumber,
    private emailComposer: EmailComposer
  ) {
    this.selectedJob = this.navParams.get("selectedJob");
  }
  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Contact',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    this.selectedJob.contactNumbers && this.selectedJob.contactNumbers.map(contactNumber => {
      const contactNumberString = contactNumber.toString();
      actionSheet.addButton(
        {
          text: contactNumberString,
          icon: 'ios-call-outline',
          handler: () => {
            this.callNumber.callNumber(contactNumberString, true)
              .then(res => console.log('Launched dialer!', res))
              .catch(err => 
                this.toastCtrl.create({
                  message: err,
                  duration: 3000,
                  position: 'top'
                })
              )
          }
        }
      )
    });
    this.selectedJob.contactEmails && this.selectedJob.contactEmails.map(email => {
      const contactEmailString = email.toString();
      actionSheet.addButton(
      {
        text: contactEmailString,
        icon: 'ios-mail-outline',
        handler: () => {
          this.emailComposer.isAvailable().then((available: boolean) =>{
            if(available) {
              let newEmail = {
                to: email,
                subject: `Re: ${this.selectedJob.title}`,
              };
              this.emailComposer.open(newEmail);
            }
           });
        }
      })
    });
    actionSheet.present();
  }
}
