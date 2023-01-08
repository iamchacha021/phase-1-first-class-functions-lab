// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2);
}

console.log(returnFirstTwoDrivers(drivers))

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(2)
}
console.log(returnLastTwoDrivers(drivers))

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]






const fareDoubler = function(fare){
    return fare * 2;
}

const fareTripler = function(fare){
    return fare * 3;
}

function createFareMultiplier(n){
    return (fare)=>{
        return  n * fare
        }
}
createFareMultiplier()




function selectDifferentDrivers(arr, selectingDrivers){
    return selectingDrivers(arr)
}

function funcDrivers (drivers){

}