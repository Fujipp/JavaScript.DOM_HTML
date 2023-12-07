import { CookieUtil } from './cookie.js'
// document.cookie = 'username=Anawat'
// document.cookie = 'course=INT201'
// document.cookie = 'credit=3'
// document.cookie = 'credit=2'//ชื่อซ้ำ แทนที่ค่าล่าสุดให้
// const currentCookie = document.cookie
// console.log(currentCookie)
// console.log(CookieUtil.get('course'))

CookieUtil.set('username', 'Umaporn', new Date(2023, 11, 25))
CookieUtil.set('course', 'INT201', new Date(2023, 11, 31))
CookieUtil.set('credit', '2', new Date(2024, 0, 1))
console.log(CookieUtil.get('username'))
console.log(CookieUtil.get('course'))
console.log(CookieUtil.unset('credit'))
console.log(CookieUtil.get('credit'))