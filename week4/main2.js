// const counter = localStorage.getItem("count")
// if (counter === null) {
//   counter = 1;
//   localStorage.setItem("count", counter)
// } else localStorage.setItem("count", ++counter)
// alert('counter=${counter}')

let counter = sessionStorage.getItem("count")
if (counter === null) {
  counter = 1;
  sessionStorage.setItem("count", counter)
} else sessionStorage.setItem("count", ++counter)
alert(`counter=${counter}`)