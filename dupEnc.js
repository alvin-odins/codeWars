function duplicateEncode(word){
  // var not case sensitive
  let str = word.toLowerCase()
  // var to concatinate final output
  let concatVal = ''
  // loop through ch in str
  for ( let j = 0; j < str.length; j++ ) {
    // check repeated ch
    if ( str.lastIndexOf( str[ j ] ) === str.indexOf( str[ j ] ) ) {
      // str with no repeated ch replaced with "("
      concatVal += "("
    }
    else {
      // str with repeated ch replaced with ")"
      concatVal += ")"
    }
    
  }
   return concatVal
}