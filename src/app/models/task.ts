import { campaign } from './campaign';

export class task {
    id: number;
    title: string;
    description: string;
    notification: Date;
    complete: boolean;
    created: Date;
    assigned: Date;
    updated: Date;
    campaignId: number;
    // campaign: campaign;
    createdUserId: number;
    assignedUserId: number;
    updatedUserId: number;

}