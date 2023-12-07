const programmingLect = document.querySelectorAll
('.programming')
//NodeList
console.log(programmingLect)
programmingLect.forEach((pl) => {
    console.log(pl)
    console.log(pl.nodeName)
    console.log(pl.nodeType)
    console.log(pl.nodeValue)
    console.log(pl.attributes) //get all attributes of element //NameNodeMap does not implement forEach
    Array.from(pl.attributes).forEach((attr) => console.log(attr))
})

const pEle = document.getElementById('p-01')
const pELeAttributes = pEle.attributes
console.log(pELeAttributes)
console.log(pELeAttributes.length)
Array.from(pELeAttributes).forEach((attr) => {
    console.log(attr.name)
    console.log(attr.value)
})
console.log(pEle.getAttribute('id'))

const ulEle = document.getElementsByTagName('ul')
//return HTMLCollection
Array.from(ulEle).forEach((ul) => console.log(ul))