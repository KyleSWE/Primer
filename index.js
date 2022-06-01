/* 
Auther: Kyle Reed
May 31, 2022
*/


export function calculateTotal (items, tax) {
  let total = 0; //initial value

  for(const item of items){//iterate through item objects
    const {price, taxable} = item; //destructure each item object
    if(taxable){
        total += price * Math.abs(tax);
    }//end if
    total += price;
  }//end for
  return total;
}
