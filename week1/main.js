// import sum, {echo, MAX_VALUE} from './libs/utils.js'
// console.log(echo('hello'))
// console.log(sum(1,5,4))
// console.log(MAX_VALUE)

const rootNode = document
console.log(rootNode)
console.log(rootNode.nodeName)
console.log(rootNode.nodeType)
console.log(rootNode.nodeValue)

console.log(document.documentElement)
console.log(document.documentElement.nodeName)
console.log(document.documentElement.nodeType)
console.log(document.documentElement.nodeValue)


console.log(document.body)
console.log(document.body.nodeName)
console.log(document.body.nodeType)
console.log(document.body.nodeValue)

console.log(document.head)
console.log(document.head.nodeName)
console.log(document.head.nodeType)
console.log(document.head.nodeValue)

console.log(document.title)
console.log(document.title.nodeName)
console.log(document.title.nodeType)
console.log(document.title.nodeValue)

const headElement = document.head
console.log(headElement)

const headChildren = headElement.childNodes
console.log(headChildren)

headChildren.forEach((hc) => {
    console.log(hc.nodeName)
    console.log(hc.nodeType)
    console.log(hc.nodeValue)
})

console.log('length:', headElement.children.length)
Array.from(headElement.children).forEach((hc) => {
    console.log(hc.nodeName)
    console.log(hc.nodeType)
    console.log(hc.nodeValue)
})

const headParentNode=headElement.parentElement
const headParentElement=headElement.parentElement

console.log(headParentNode)
console.log(headParentElement)

const headPreviousSibling=headElement.previousSibling
console.log(headPreviousSibling)
previousElementSibling