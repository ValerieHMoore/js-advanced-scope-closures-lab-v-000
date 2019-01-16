function produceDrivingRange(blockRange) {
    return function (beginBlock, endBlock){
       let beginInteger = parseInt(beginBlock) 
       let endInteger = parseInt(endBlock)
       let distanceTravelled = Math.abs(beginInteger - endInteger)
        if (distanceTravelled <= blockRange){
            return `within range by ${blockRange - distanceTravelled}`
        } else {
            return `${distanceTravelled - blockRange} blocks out of range`
        }
    }
}

function produceTipCalculator(tip){
    return function(fare){
        return fare * tip
    }
}

function createDriver() {
    let DriverId = 0;
    return class {
      constructor(name) {
        this.name = name;
        this.id = ++DriverId;
      }
    };
}