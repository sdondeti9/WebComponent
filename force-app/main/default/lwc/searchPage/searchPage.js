import {  LightningElement, api, track } from 'lwc';
import findAccounts from '@salesforce/apex/AccountController.findAccounts';
import NAME_FIELD from '@salesforce/schema/Account.Name';

const DELAY = 350;
const COLUMNS = [
    { label: 'Account Name', fieldName: NAME_FIELD.fieldApiName, type: 'text'}
];
export default class SearchPage extends LightningElement {
    @track accounts;
    @track error;
    columns = COLUMNS;
    handleKeyChange(event) {
        // Debouncing this method: Do not actually invoke the Apex call as long as this function is
        // being called within a delay of DELAY. This is to avoid a very large number of Apex method calls.
        window.clearTimeout(this.delayTimeout);
        const searchKey = event.target.value;
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        this.delayTimeout = setTimeout(() => {
            findAccounts({ searchKey })
                .then(result => {
                    this.accounts = result;
                    this.error = undefined;
                })
                .catch(error => {
                    this.error = error;
                    this.accounts = undefined;
                });
        }, DELAY);
    }

}
