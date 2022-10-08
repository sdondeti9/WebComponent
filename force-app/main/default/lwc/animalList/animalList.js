import { LightningElement, wire } from 'lwc';
import Name from '@salesforce/schema/Animal__c.Name';
import getAnimals from '@salesforce/apex/AnimalDataService.getAllAnimalList';
import { reduceErrors } from 'c/ldsUtils';
const COLUMNS = [
    { label: 'Name', fieldName: Name.fieldApiName, type: 'text' }
];
export default class AnimalList extends LightningElement {
    columns = COLUMNS;
    @wire(getAnimals)
    animals;
    get errors() {
        return (this.animals.error) ?
            reduceErrors(this.animals.error) : [];
    }
}