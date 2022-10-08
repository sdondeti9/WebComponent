import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ANIMAL from '@salesforce/schema/Animal__c';
import NAME from '@salesforce/schema/Animal__c.Name';
export default class AddAnimal extends LightningElement {
    objectApiName = ANIMAL;
    fields = [NAME];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Animal is Added",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}