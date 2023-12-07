//select collection of specified condition
const programmingLect = document.getElementsByClassName
('programming')
//return HTMLCollection data type - array-like 
//(can use index or length, cannot use array function (filter , map,...))
console.log(programmingLect)
console.log(programmingLect.length)

const ulTagname = document.getElementsByTagName
('ul')
console.log(ulTagname)
console.log(ulTagname.length)
//return HTMLCollection 

const courseEle = document.querySelector
('.course')
console.log(courseEle)

const divEle = document.getElementById
('bscit-courses')
const courseUnderDiv = divEle.querySelectorAll 
('.course')
console.log(courseUnderDiv)

const courseUnderDoc = document.querySelectorAll
('.course')
console.log(courseUnderDoc)
