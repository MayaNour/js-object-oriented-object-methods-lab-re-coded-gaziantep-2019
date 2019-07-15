function BoardMember(name, homeState, training){
  this.name = name;
  this.homeState = homeState;
  this.training = training;
  
  this.veto = function veto(){
    console.log("No, I must disagree");
  }
  
  this.approve = function approve(){
    console.log("You can do that!");
  }
  
  this.doCharity = function doCharity(){
    console.log("I like to help people.");
  }
  
  this.releasePressStatement = function releasePressStatement(){
    console.log("You will see great things from Scuber.");
  }
  
  this.sayHi = function sayHi(){
    console.log("Hi");
  }
}