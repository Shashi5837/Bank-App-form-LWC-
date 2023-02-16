import Customer_account_details from '@salesforce/schema/Customer_account_details__c';
import FirstName from '@salesforce/schema/Customer_account_details__c.Name';
import LastName from '@salesforce/schema/Customer_account_details__c.Last_Name__c';
import Gender from '@salesforce/schema/Customer_account_details__c.Gender__c';
import BankAccType from '@salesforce/schema/Customer_account_details__c.Bank_Account_type__c';
import Address from '@salesforce/schema/Customer_account_details__c.Address__c';
import city from '@salesforce/schema/Customer_account_details__c.City__c';
import Account from '@salesforce/schema/Customer_account_details__c.Account__c';
import state from '@salesforce/schema/Customer_account_details__c.State__c';
import Cards from '@salesforce/schema/Customer_account_details__c.Cards__c';
import Zip_Code from '@salesforce/schema/Customer_account_details__c.Zip_code__c';
import MobileNumber from '@salesforce/schema/Customer_account_details__c.Mobile_Number__c';
import Alternate_MobileNumber from '@salesforce/schema/Customer_account_details__c.Alternate_Mobile_Number__c';
import Email_Id from '@salesforce/schema/Customer_account_details__c.Email__c';
import Nominee_Details from '@salesforce/schema/Customer_account_details__c.Nominee_Details__c';
import Cheque_Book  from '@salesforce/schema/Customer_account_details__c.Cheque_Book__c';
import BankForm from '@salesforce/apex/bankForm.checkPhone';
//import BankForm1 from '@salesforce/apex/bankForm.checkAltPhone';



import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';


import { LightningElement,track,wire} from 'lwc';

export default class BankAppForm extends LightningElement {
     
   eName;
   lName;
   gender;
   @track baType;
   addr;
   @track cit='';
   stat='';
   zcode='';
   mnum='';
   amnum='';
    email='';
   nominee='';
   acc='';
    card='';
   cbook='';
 emailvalid=true;
 emailvalid1=true;



    @track options=[];
   @track options1=[];
   @track options2=[];
   @track options3=[];
   @track options4=[];
   @track options5=[];
   @track options6=[];
   @track cityOptions = [];
   checkboxVal = true;
   busistat=true;
   adderror=true;
   dstat=true;
   



    handleChanges(event){
       // if(event.target.label == 'First Name'){
            this.eName = event.target.value;
            const inputBox = event.currentTarget;

    //If there was a custom error before, reset it
    inputBox.setCustomValidity('');
    //Tells the lightning-input to show the error right away without needing interaction 
    inputBox.reportValidity(); 
        
        // else if(event.target.label=='Last Name'){
        //     this.lName=event.target.value;
        // }
        //else if(event.target.label=='Gender'){
          //  this.gender=event.target.value;
      //  }
      //  else if (event.target.label=='BankAccType'){
     //       this.baType=event.target.value;
      //  }
        // else if (event.target.label=='Address'){
        //     this.addr=event.target.value;
        // }
      //  else if(event.target.label=='city'){
       //     this.cit=event.target.value;
      //  }
       // else if (event.target.label=='state'){
     //       this.stat=event.target.value;
    //    }
        // else if (event.target.label=='Zip code'){
        //     this.zcode=event.target.value;
        // }
        // else if (event.target.label=='Mobile Number'){
        //     this.mnum=event.target.value;
        // }
        // else if (event.target.label=='Alternate Mobile Number'){
        //     this.amnum=event.target.value;
        // }
        // else if (event.target.label=='Email Id'){
        //     this.email=event.target.value;
        // }
        // else if (event.target.label=='Nominee Details'){
        //     this.nominee=event.target.value;
        // }
    }
    handleNominee(event){
        this.nominee=event.target.value;


    }
    handleLast(event){
        this.lName=event.target.value;
        const inputBox = event.currentTarget;
         inputBox.setCustomValidity('');
         inputBox.reportValidity(); 
    }
        createRecords = (event) => {
            const fields = {}
                
            fields[FirstName.fieldApiName] = this.eName;
            fields[LastName.fieldApiName]=this.lName;
            fields[Gender.fieldApiName]=this.gender;
            fields[BankAccType.fieldApiName]=this.baType;
            fields[Address.fieldApiName]=this.addr;
            fields[city.fieldApiName]=this.cit;
            fields[state.fieldApiName]=this.stat;
            fields[Zip_Code.fieldApiName]=this.zcode;
            fields[MobileNumber.fieldApiName]=this.mnum;
            fields[Alternate_MobileNumber.fieldApiName]=this.amnum;
            fields[Email_Id.fieldApiName]=this.email;
            fields[Nominee_Details.fieldApiName]=this.nominee;
            fields[Account.fieldApiName]=this.acc;
            fields[Cards.fieldApiName]=this.card;
            fields[Cheque_Book.fieldApiName]=this.cbook;

            //let key=FirstName.fieldApiName;
            
            let check =1;
            
            let fieldErrorMsg="Please Enter the";
            let addNewError="Please Enter a valid ";
            this.template.querySelectorAll("lightning-input").forEach(item =>{
            let fieldValue=item.value;
            let fieldLabel=item.label;         
            if(!fieldValue  && ( fieldLabel !=='Alternate Mobile Number' && fieldLabel !== 'Nominee Details')){

                item.setCustomValidity(fieldErrorMsg+' '+fieldLabel);
                check=0;
            }
			else if(fieldLabel === 'Email Id' ){
                const et=/[A-Za-z0-9._-]+@[a-z0-9-]+\.[a-z]{2,}$/;
                if(this.email.match(et)){
                    this.emailvalid=true;
                }
            else{
                    item.setCustomValidity(addNewError+' '+fieldLabel);

                }
        }
        else if(fieldLabel === 'Mobile Number' ){
          // const et=/\+\d{9,11}/;
              const et=/^[0-9]+$/;
            if(this.mnum.match(et)){
                this.emailvalid1=true;
            }
        else{
                item.setCustomValidity(addNewError+' '+fieldLabel);

            }
    }
       
    

            item.reportValidity();
		});
        //////////c/acc
        let check1 =1;
            let fieldErrorMsg1="Please Choose the";
            this.template.querySelectorAll("lightning-radio-group").forEach(item => {
            let fieldValue=item.value;
            let fieldLabel=item.label;            
            if(!fieldValue){
                item.setCustomValidity(fieldErrorMsg1+' '+fieldLabel);
             
                check=0;
            }
			else{
                item.setCustomValidity("");

            }
            item.reportValidity();
		});


        /////////
        let check2 =1;
        let fieldErrorMsg2="Please Select the";
        this.template.querySelectorAll("lightning-combobox").forEach(item => {
        let fieldValue=item.value;
        let fieldLabel=item.label;            
        if(!fieldValue){
            item.setCustomValidity(fieldErrorMsg2+' '+fieldLabel);
           
            check=0;
        }
        else{
            item.setCustomValidity("");

        }
        item.reportValidity();
    });


            // demoadd({pbname:this.card
               
            // })
            
            if(check===1 && check1===1 && check2===1)
            {
                const recordInput = { apiName:Customer_account_details.objectApiName,fields };

                createRecord(recordInput).then(() => {
                    this.dispatchEvent(new ShowToastEvent({
                        title: 'Successfully Created',
                        message: 'Form Submitted',
                        variant: 'success'
                    }));
                    location.reload();
                }).catch(() => {
                    this.dispatchEvent(new ShowToastEvent({
                        title: 'Error Please try again',
                        message: 'Error in Creating Form',
                        variant: 'error'
                    }));
                })
            }
            // const recordInput = { apiName:Customer_account_details.objectApiName,fields };

            // createRecord(recordInput).then(() => {
            //     this.dispatchEvent(new ShowToastEvent({
            //         title: 'Successfully Created',
            //         message: 'Form Submitted',
            //         variant: 'success'
            //     }));
            //     location.reload();
            // }).catch(() => {
            //     this.dispatchEvent(new ShowToastEvent({
            //         title: 'Error',
            //         message: 'Error in creating Form',
            //         variant: 'error'
            //     }));
            // })

            
        }
       
        clear = (event) => {
           this.template.querySelector('form').reset();
            this.acc=null;
            this.amnum=null;
            this.mnum=null;
            this.lName=null;
            this.eName=null;
            this.email=null;
            this.zcode=null;
            this.cbook=null;
            this.stat=null;
            this.cit=null;
            this.card=null;
            this.baType=null;

            // this.template.querySelectorAll("lightning-input").forEach(item => {
            //     //item.reset();
            //     console.log(item);
            // });
            
        }

        CheckMethod(event)
        {
            this.template.querySelector('form').reset();
            this.acc=null;
            this.amnum=null;
            this.mnum=null;
            this.lName=null;
            this.eName=null;
            this.email=null;
            this.zcode=null;
            this.cbook=null;
            this.stat=null;
            this.cit=null;
            this.card=null;
            this.baType=null;
            this.template.querySelectorAll("lightning-input").forEach(item => {
                item.value='123';
                item.setCustomValidity('');
                item.reportValidity();
                item.value=null;
            });
            this.template.querySelectorAll("lightning-radio-group").forEach(item => {
                item.value='remove';
                item.setCustomValidity('');
                item.reportValidity();
                item.value=null;
            });
            this.template.querySelectorAll("lightning-combobox").forEach(item => {
                item.value='remove';
                item.setCustomValidity('');
                item.reportValidity();
                item.value=null;
            });
        }

        handleGen(event){
            this.gender=event.target.value;
            const inputBox = event.currentTarget;
         inputBox.setCustomValidity('');
         inputBox.reportValidity(); 
        }
        handleZip(event){
            this.zcode=event.target.value;
            const inputBox = event.currentTarget;
         inputBox.setCustomValidity('');
         inputBox.reportValidity(); 
         if(!isFinite(this.zcode)) {
            event.target.value=this.zcode.toString().slice(0,-1);
        }
        }

        handleBank(event){
           this.baType=event.target.value;
           const inputBox = event.currentTarget;
         inputBox.setCustomValidity('');
         inputBox.reportValidity(); 
        }
        handleAddress(event){
            this.addr=event.target.value;
            const inputBox = event.currentTarget;
         inputBox.setCustomValidity('');
         inputBox.reportValidity(); 
        }
        handleAcc(event){
            
            this.acc=event.target.value;
        }

        handleCard(event){
            this.card=event.target.value;
            this.card=this.card.join(',');
            // console.log(event.target.value);
             console.log(this.card);
            // console.log(this.card.join(','));
          // this.value=event.target.value;
        }

        handlecheck(event){
            this.cbook=event.target.value;
        }
        handleEmail(event){
            this.email=event.target.value;
            const inputBox = event.currentTarget;
         inputBox.setCustomValidity('');
         inputBox.reportValidity(); 
        }
        handleMobile(event){
            this.mnum=event.target.value;
            const inputBox = event.currentTarget;
            inputBox.setCustomValidity('');
            inputBox.reportValidity(); 
            if(!isFinite(this.mnum)) {
                event.target.value=this.mnum.toString().slice(0,-1);
            }

            if(this.mnum.length==10)
            {
                console.log(1);
                BankForm({mobNumber:this.mnum})
                .then(data=>{
                    inputBox.setCustomValidity('This Mobile Number is already exists');
                })
                .catch(error=>{
                    console.log(error);
                });
            }
        }
        handleAltMob(event){
            this.amnum=event.target.value;
           // const inputBox = event.currentTarget;
            if(!isFinite(this.amnum)) {
                event.target.value=this.amnum.toString().slice(0,-1);
            }
            
        }

 // object info using wire service
    @wire(getObjectInfo, { objectApiName:Customer_account_details})
    objectInfo;

     // Getting Account Type Picklist values using wire service
     @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName:Gender})
     typePicklistValues({error, data}) {
         if(data) {
             let optionsValues = [];
             for(let i = 0; i < data.values.length; i++) {
                 optionsValues.push({
                     label: data.values[i].label,
                     value: data.values[i].value
                 })
             }
             this.options = optionsValues;
             console.log(this.options);
         }
     }
//bank account
     @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName:BankAccType})
     typePicklistValues1({error, data}) {
         if(data) {
             let optionsValues = [];
             for(let i = 0; i < data.values.length; i++) {
                 optionsValues.push({
                     label: data.values[i].label,
                     value: data.values[i].value
                 })
             }
             this.options1 = optionsValues;
         }
     }
    
  //account
     @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName:Account})
     typePicklistValues2({error, data}) {
         if(data) {
             let optionsValues = [];
             for(let i = 0; i < data.values.length; i++) {
                 optionsValues.push({
                     label: data.values[i].label,
                     value: data.values[i].value
                 })
             }
             this.options2 = optionsValues;
         }
         else if(error) {
             window.console.log('error ===> '+JSON.stringify(error));
         }

     }
     acc='Self-Account';
     cbook='No';


     @track recordId;
     @track controllingValues = [];
     @track dependentValues = [];
     @track isEmpty = false;
     @track error;
     @track controlValues;
     totalDependentValues = [];
     @track data;
 
//cards
     // Picklist values based on record type
@wire(getPicklistValuesByRecordType, { objectApiName:Customer_account_details, recordTypeId: '$objectInfo.data.defaultRecordTypeId'})
StatePicklistValues({error, data}) {
      if(data) {
      this.error = null;                 
      let stateOptions = [];
      data.picklistFieldValues.State__c.values.forEach(key => {
      stateOptions.push({
      label : key.label,
      value: key.value
                      })
});

this.controllingValues = stateOptions;
let typeOptions = [];
this.controlValues = data.picklistFieldValues.City__c.controllerValues;
this.totalDependentValues = data.picklistFieldValues.City__c.values;
this.totalDependentValues.forEach(key => {
    typeOptions.push({
    label : key.label,
    value: key.value
})
});
this.city1= false;

this.dependentValues = typeOptions;
}
else if(error) {
    this.error = JSON.stringify(error);
}
}


    // cards
    //  @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName:Cards})
    //  typePicklistValues3({error, data}) {
    //      if(data) {
    //          let optionsValues1 = [];
    //          for(let i = 0; i < data.values.length; i++) {
    //              optionsValues1.push({
    //                  label: data.values[i].label,
    //                  value: data.values[i].value
    //              })
    //          }
    //          this.options3 = optionsValues1;
    //          //console.log(options3);
    //          console.log('123344');
    //          //console.log(value);
    //      }
         
    //  }


     card='Debit Card';

     get option1() {
        return [
            { label: 'Debit Card', value: 'Debit Card' },
            { label: 'Credit Card', value: 'Credit Card' },
        ];
    }
    // get checkboxValues() {
    //     console.log(this.value);
    //     return this.value.join(',');
    // }
    // state
    //  @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName:state})
    //  typePicklistValues4({data,error}) {
    //      if(data) {
    //          let optionsValues = [];
    //          for(let i = 0; i < data.values.length; i++) {
    //              optionsValues.push({
    //                  label: data.values[i].label,
    //                  value: data.values[i].value
    //              })
    //          }
    //          this.options4 = optionsValues;
    //          console.log(12241241)
    //          console.log(optionsValues)
    //      }
    //      else if(error) {
    //          window.console.log('error ===> '+JSON.stringify(error));
    //      }
    //  }
    

//city
    //  @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName:city})
    //  typePicklistValues5({error, data}) {
    //      if(data) {
    //          let optionsValues = [];
    //          for(let i = 0; i < data.values.length; i++) {
    //              optionsValues.push({
    //                  label: data.values[i].label,
    //                  value: data.values[i].value
    //              })
    //          }
    //          this.options5 = optionsValues;
    //          console.log(this.options5);
    //      }
    //      else if(error) {
    //          window.console.log('error ===> '+JSON.stringify(error));
    //      }
    //  }
//cheque book
     @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName:Cheque_Book})
     typePicklistValues6({error, data}) {
         if(data) {
             let optionsValues = [];
             for(let i = 0; i < data.values.length; i++) {
                 optionsValues.push({
                     label: data.values[i].label,
                     value: data.values[i].value
                 })
             }
             this.options6 = optionsValues;
         }
         else if(error) {
             window.console.log('error ===> '+JSON.stringify(error));
         }
     }

    handleState(event)
     {
        this.dstat=false;
        this.stat = event.target.value;
        const inputBox = event.currentTarget;
         inputBox.setCustomValidity('');
         inputBox.reportValidity();
    
     let dependValues = [];
     if(this.stat) {
        // filter the total dependent values based on selected meal preference value 
        this.totalDependentValues.forEach(conValues => {
            if(conValues.validFor[0] === this.controlValues[this.stat]) {
            dependValues.push({
            label: conValues.label,
            value: conValues.value
        })
    }
})

this.dependentValues = dependValues;
}

}

handleCity(event){
this.cit=event.target.value;

}
 @track city1=true;

 
 
  

}
