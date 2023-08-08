//you


function firstChar(s) {
  let rev = s.split("").reverse().join("")
  for(let i=0; i<s.length; i++){
    if(rev.indexOf(s.charAt(i))+1-s.length===i)
      return s.charAt(i)
  }
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));