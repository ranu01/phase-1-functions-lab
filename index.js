function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
  }
  console.log(distanceFromHqInBlocks(50));
  
//function 2
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }

console.log(distanceFromHqInFeet(50))

//function 3
function distanceTravelledInFeet(start_block, destination_block){
    const blocksTravelled=Math.abs(destination_block- start_block)

    const feetTravelled = blocksTravelled * 264

    return feetTravelled;
    
}

console.log(distanceTravelledInFeet(34,38))


//function 4
function calculatesFarePrice(start_block, destination_block){
    const feetPerBlock = 264;
    const distanceTravelled = Math.abs (destination_block - start_block) * feetPerBlock;
    
    if (distanceTravelled <=400){
        return  0;
    }else if (distanceTravelled > 400 && distanceTravelled <= 2000){
        return (distanceTravelled - 400) * 0.02
    }else if (distanceTravelled > 2000 && distanceTravelled <=2500){
        return 25;
    }else{
        return 'cannot travel that far'
    }
}
console.log(calculatesFarePrice(34,38)) 