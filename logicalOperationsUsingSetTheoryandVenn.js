let set1 = [1, 2, 3];
let set2 = [2, 3, 4, 5];

// First of all create your Union/OR
let orSet = [...set1, ...set2];

let andSet = [];
let xor = new Set();

// create your Intersection/AND
for(let i = 0; i < set1.length; i++) {
    if (set2.indexOf(set1[i]) >= 0){
        andSet.push(set1[i]);
    }
}

// Subtract the Union and Intersection to get the xor
orSet.forEach((val) => {
    if(andSet.indexOf(val) >= 0) {
    }else{
        xor.add(val);
    }
})

console.log(xor);
