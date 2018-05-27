import { Injectable } from "@angular/core";

import moment from 'moment';

@Injectable()
export class DateTimeServiceProvider {
  constructor() {}
  getLocaleDate(dateToFormat) {
    return moment(dateToFormat).format('DD-MM-YYYY');
  }
  formatUpdatedTime(updatedAt) {
    const diffFromCurrentTime =
      new Date().getTime() - new Date(updatedAt).getTime();
    if (diffFromCurrentTime % 1000 === diffFromCurrentTime) {
      return "Just Now";
    } else if (diffFromCurrentTime % (1000 * 60) === diffFromCurrentTime) {
      return `${Math.floor(diffFromCurrentTime / 1000)} sec`;
    } else if (diffFromCurrentTime % (1000 * 60 * 60) === diffFromCurrentTime) {
      return `${Math.floor(diffFromCurrentTime / (1000 * 60))} mins`;
    } else if (
      diffFromCurrentTime % (1000 * 60 * 60 * 24) ===
      diffFromCurrentTime
    ) {
      return `${Math.floor(diffFromCurrentTime / (1000 * 60 * 60))} hrs`;
    } else if (diffFromCurrentTime % 2592000000 === diffFromCurrentTime) {
      return `${Math.floor(diffFromCurrentTime / (1000 * 60 * 60 * 24))} days`;
    } else if (diffFromCurrentTime % 31556952000 === diffFromCurrentTime) {
      return `${Math.floor(diffFromCurrentTime / 2592000000)} months`;
    }
  }
}
