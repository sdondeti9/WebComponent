public with sharing class AnimalDataService {
    public static void getAnimalList(){
        AnimalAPI app=new AnimalAPI();
        HttpResponse res=app.getRestAPIResponce();
        System.debug('res:'+res.getBody());
		 // Deserialize the JSON string into collections of primitive data types.
    Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(res.getBody());
    // Cast the values in the 'animals' key as a list
    List<Object> animals = (List<Object>) results.get('animals');
    List<Animal__c> animalList= new List<Animal__c>();
    System.debug('Received the following animals:');
    for (Object animal: animals) {
        System.debug(animal);
        Animal__c ani = new Animal__c();
         ani.name=String.valueOf(animal);
         animalList.add(ani);
        System.debug('ani'+ani);

        
    }
    try {
        insert animalList;
    } catch (Exception e) {
        System.debug('error occured at animal List insertion'+e);
        
    }
 }
 @AuraEnabled(cacheable=true)
 public static List<Animal__c> getAllAnimalList() {
    return [select id,Name from Animal__c];
  }
}
