trigger AccountCreateTrigger on Account (before insert) {
    throw new Exception('please enter account revenue greater than 100000');

}