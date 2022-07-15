var playerName=window.prompt("What is your robots's name?");
var playerHealth=100;
var playerAttack=10;
console.log(playerName,playerAttack,playerHealth);
var enemyName="Roborto";
var enemyHealth=50;
var enemyAttack=12;



function fight(){
window.alert("The fight has begun!");
enemyHealth-=playerAttack;
console.log(

playerName+" attacked "+enemyName+". "+enemyName+" now has "+ enemyHealth+" remaining."


);
if(enemyHealth<=0){
    window.alert(enemyName+" has died!");
}else{
    window.alert(enemyName+" still has "+ enemyHealth+" health left.");
}
console.log(enemyHealth);
playerHealth-=enemyAttack;
console.log(enemyName+" attacked "+ playerName+". "+playerName+" now has "+ playerHealth+" remaining.");
if(playerHealth<=0){
    window.alert(playerName+" has died!");

}else{
    window.alert(playerName+" still has "+playerHealth+" health left.");
}
console.log(playerHealth);
}
fight();