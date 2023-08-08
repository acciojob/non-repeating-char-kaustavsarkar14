//you


const text = prompt("Enter a string");
alert(firstChar(text));

const firstChar =(s)=>{
	for(let i=0; i<s.length; i++){
		 if(!s.contains(s.charAt(i)))
			 return s.charAt(i);
	}
	return -1;
}