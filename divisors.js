function divisors(integer) {
  
  // create empty array to hold divisors
  let arr = []
  
  // loop through divisors
  for ( let i = 2; i < integer; i++ ) {
    
    // check and push to arr
    if ( integer % i === 0 ) {
      arr.push(i)
    }
  }
  
  // check for prime
  if ( arr.length == 0 )
    return `${integer} is prime`
  else
    return arr
  
};


// successfully implemented steps 1 to 3
// by not testing for empty array as check for prime
// since prime is not divisor, lost extra 4 hours