public with sharing class AccountHandler {
      public static Account insertNewAccount(String strNames)
      {
          try
          {
          Account acct = new Account();
            acct.Name = strNames;
            acct.Phone = '(415)555-1212';
            acct.NumberOfEmployees = 100;
        insert acct;
              return acct;
          }
          catch(DmlException  ex)
          {
              System.debug('Got the Error:' +ex.getMessage());
              return null;
          }
}
}