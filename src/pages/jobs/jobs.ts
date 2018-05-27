import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { JobsServiceProvider } from "../../providers/jobs-service/jobs-service";
import { Job } from "models/Job";
import { JobDetailsPage } from "../job-details/job-details";
import { DateTimeServiceProvider } from "../../providers/date-time-service/date-time-service";

@Component({
  selector: "page-jobs",
  templateUrl: "jobs.html"
})
export class JobsPage {
  public jobs: Job[];
  constructor(
    public navCtrl: NavController,
    public jobsService: JobsServiceProvider,
    public dateTImeService: DateTimeServiceProvider
  ) {
    this.jobsService.getJobs().subscribe(jobs => (this.jobs = jobs));
  }

  jobSelected(event, selectedJob) {
    this.navCtrl.push(JobDetailsPage, { selectedJob });
  }
}
