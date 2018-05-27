import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { catchError } from "rxjs/operators";
import 'rxjs/add/observable/throw';

import { ENV } from "@app/env";
import { Job } from "@models/job";
import { JobCategory } from "models/JobCategory.enum";

@Injectable()
export class JobsServiceProvider {
  
  private jobsCategoryObject = {
    'TEACH' : 'Teaching',
    'MARKT' : 'Marketing',
    'ENGR' : 'Engineering',
    'IT' : 'Information Technology',
    'FINACC' : 'Finance',
    'BD' : 'Business Development',
    'BANK' : 'Banking' 
  }
  constructor(public http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http
      .get<Job[]>(ENV.ApiBase + ENV.jobsUrl)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }
  getCategoryName(categoryEnum: JobCategory) {
    return this.jobsCategoryObject[categoryEnum]; 
  }
}
