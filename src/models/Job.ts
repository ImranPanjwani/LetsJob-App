import { JobCategory } from './JobCategory.enum';

export interface Job {
    contactEmails: [ string ];
    contactNumbers: [ number ];
    title: string;
    description: string;
    category: JobCategory;
    slug?: string;
    timesViewed?: number;
    verified?: boolean;
    createdAt?: string;
    updatedAt?: string;

}
