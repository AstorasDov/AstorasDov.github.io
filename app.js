console.log("hello");

fetch('https://astorasdov.github.io/authors.json')
.then((res)=>res.json())
.then((data)=>console.log(data))
console.log("hello");
