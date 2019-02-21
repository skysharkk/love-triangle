/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
let count = 0;
let firstLover;
let secondLover;
for(let i = 0; i <= preferences.length - 1; i++){
    
    firstLover = preferences[i];
    secondLover = preferences[firstLover - 1];
    if (preferences[secondLover - 1] === i + 1){
        count++;        
    }
}
return Math.floor(count / 3);
};
