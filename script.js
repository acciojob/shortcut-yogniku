function shortcut(s1, s2) {
  //your code here jh
	  if (str1.length === 0 || str2.length === 0) {
        return ''; // Return an empty string if either input string is empty
    }

    return str1[0].toUpperCase() + str2[0].toLowerCase(); 
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
