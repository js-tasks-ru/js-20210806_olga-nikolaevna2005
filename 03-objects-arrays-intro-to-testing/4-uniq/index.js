/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr=[]) {
    const set = new Set();
    arr.forEach(x=> set.add(x));
    const result = [];
    set.forEach( y => result.push(y) ); 
    return result;
  }