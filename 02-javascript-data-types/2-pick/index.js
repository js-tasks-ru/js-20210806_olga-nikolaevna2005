/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    let new_fruits = new Object(); 	
    fields.forEach(function(elem) {
        if (obj.hasOwnProperty(elem)) {new_fruits[elem]=obj[elem];}
    });
    return new_fruits; 
    }
