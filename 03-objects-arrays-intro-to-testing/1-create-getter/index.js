/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    const arr =  path.split('.');	
    return obj =>{
       
       const f = (index,newObj)=> { 
       let result='';
       if ((index===arr.length-1) && (typeof newObj === 'object') && (typeof obj !==undefined))
           {	
               if (newObj.hasOwnProperty(arr[index]))
               result = newObj[arr[index]];
               else return undefined;
           }	
           else if ((typeof obj === 'object') && (typeof obj !==undefined) && (arr[index]!==undefined) && (newObj[arr[index]]!==undefined)) 
           {result=(f(index+1,newObj[arr[index]]));}
           else return undefined;
           return result;
        };
       return f(0,obj);
    } ;
   };