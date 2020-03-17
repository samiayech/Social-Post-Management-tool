import { task } from './task';

export class campaign {
    id: number;
    title: string;
    color: string;
    icon: string;
    created: Date;
    updated: Date;
    tasks: task[] = [];
 
}