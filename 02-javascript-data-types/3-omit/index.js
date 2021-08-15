/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    let new_fruits = new Object(); 	
    fields.forEach(function(elem) {
        if (obj.hasOwnProperty(elem)) {delete obj[elem];}
    });
    return new_fruits = Object.fromEntries(Object.entries(obj)); 
}
