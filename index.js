const returnFirstTwoDrivers = function(arr){
    return arr.slice(0,2);
}

const returnLastTwoDrivers = function(arr){
    return arr.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(num){
    return function(fare){return fare*num;
  }
}
function fareDoubler(fare) {
    const theFare = createFareMultiplier(2);
    return theFare(fare)
}

function fareTripler(fare) {
    const theFare = createFareMultiplier(3);
    return theFare(fare)
}

function selectDifferentDrivers(arr, returnArr){
    const whichReturn = returnArr;
        return whichReturn(arr)
    }