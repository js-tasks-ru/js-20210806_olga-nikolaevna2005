/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols (str,num)
{
	const result=[];
	if (num === str.length) return str;
    if (num === undefined) return str;
	else if (num!=0)
	{
		let count=0;
		for (let i=0; i<str.length;i++)
		{
			if (str[i]===str[i-1])
			{	
				if (count < num)
				{
					result.push(str[i]);
					count++;
				}
			}	
				else 
				{
					result.push(str[i]);
					count=1;
				}					
			
		}
	}
	return result.join('');
}
