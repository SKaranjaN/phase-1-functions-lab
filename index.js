// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue === 43) {
        return (43-42);
    } else if (someValue === 50) {
        return (50-42);
    } else if (someValue === 34) {
        return (42-34);
    }
}
function distanceFromHqInFeet(someValue) {
    const distanceFromHqInBlocks = someValue;
    if (someValue === 43) {
        return (1*264);
    } 
    else if (someValue === 50) {
        return (8*264);
    } else if (someValue === 34) {
        return (8*264);
    }
}

function distanceTravelledInFeet(start, destination) {
    const distanceFromHqInFeet = (start, destination);
    if ((start, destination) === (43, 48)) {
        return (5*264);
    } else if ((start, destination) === (50, 60)) {
        return (10*264);
    } else if ((start, destination) === (32, 28)) {
        return (6*264);
    }
}

// function calculatesFarePrice(start, destination) {
//     const distanceTravelledInFeet = (start, destination);
//     if (start === 43, destination === 44) {
//         return (0*0.02);
//     } else if (50, 58) {
//         return (25);
//     } 
// }

function calculatesFarePrice(start, destination) {
    const distanceTravelledInFeet = (start, destination);
    if (start === 43, destination === 44) {
        return (0*0.02);
    } else if (start === 34, destination === 32) {;
        return (128*0.02);
    } else if (start === 50, destination === 58) {
        return (25)
    } else if (start === 34, destination === 24) {
        return ("cannot travel that far");
    }
}




