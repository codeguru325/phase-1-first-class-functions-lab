// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return [drivers[0], drivers[1]]

} 
const result = returnFirstTwoDrivers([1,2,3,4])




const returnLastTwoDrivers = function(drivers) {
    const lastIndex = drivers.length - 1;
    const secondToLastIndex = drivers.length - 2;
    
    return [drivers[secondToLastIndex], drivers[lastIndex]];
  
  
  } 
  

  const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers];





  function createFareMultiplier(int){
    return function multiplier(fare){
            return fare*int
    }
  }



  const fareDoubler = createFareMultiplier(2)
  const fareTripler = createFareMultiplier(3)



  function selectDifferentDrivers( drivers, returnLastTwoDrivers ){

    return returnLastTwoDrivers(drivers)
  }