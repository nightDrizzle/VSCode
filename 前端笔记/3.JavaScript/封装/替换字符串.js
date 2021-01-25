let a = 'bbababbb]]]'
let b = 'bb'
let c = 'c'
function replaceString(a, b, c) {
  if (a.length < b.length) {
    return a
  }
  if (a.length === b.length) {
    let flag = true
    for (let i = 0; i < a.length; i++) {
      if (a.split('')[i] !== b.split('i')) {
        flag = false
      }
    }
    if (flag === true) {
      return a
    }
    return c
  }
  let i = 0
  while (i <a.length && (a.length - i) >= b.length) {
    let flag = true
    for (let j = 0,k=i; j < b.length; j++) {
      if (a.split('')[k] !== b.split('')[j]) {
        flag = false
      }
      k++
    }
    if (flag === true) {
      arrA = a.split('')
      arrB = b.split('')
      arrA.splice(i, 2,c)
      a = arrA.join('')
      i+=c.length-1;
    }
    console.log(a);
    i++
  }
  return a
}
a = replaceString(a, b, c)
console.log(a);
