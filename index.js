// Code your solution in this file!
function returnFirstTwoDrivers(arr) {
    let newArr = [];
    for (let t = 0; t < 2; t++) {
      newArr.push(arr[t]);
    }
    return newArr;
  }
  
  function returnLastTwoDrivers(arr) {
    let newArr = [];
    for (let t = arr.length - 2; t < arr.length; t++) {
      newArr.push(arr[t]);
    }
    return newArr;
  }
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  function createFareMultiplier(fare) {
    return () => {
      return fare * fare;
    }
  }
  
  function fareDoubler(fare) {
    return fare * 2;
  }
  
  function fareTripler(fare) {
    return fare * 3;
  }
  
  function selectDifferentDrivers(arrayOfDrivers, f) {
    return f(arrayOfDrivers);
  }