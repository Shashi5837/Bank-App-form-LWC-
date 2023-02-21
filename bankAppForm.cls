public with sharing class bankForm {
   
    @AuraEnabled(cacheable=true)
    public static Customer_account_details__c checkPhone(Decimal mobNumber){
      return [Select Id,Mobile_Number__c from Customer_account_details__c where Mobile_Number__c=:mobNumber];
    }


    @AuraEnabled(cacheable=true)
    public static Customer_account_details__c checkAltPhone(Decimal mobAltNumber){
        return [select Id,Alternate_Mobile_Number__c from Customer_account_details__c where Alternate_Mobile_Number__c=:mobAltNumber];
    
  }
}
