var obj1 = {
  name: "zhangsan",
  sex: 'male'
}
var obj2 = {
  sex: 'male',
  name: "zhangsan"
}
/*比较两个对象是否相等*/
function compareObj(obj1, obj2) {
  
  var obj1keys = Object.keys(obj1)
  var obj2keys = Object.keys(obj2)

  if (obj2keys.length !== obj1keys.length) return false

  for (let i = 0; i <= obj1keys.length - 1; i++) {
    let key = obj1keys[i]
    if (!obj2keys.includes(key)) return false
    if (obj2[key] !== obj1[key]) return false
  }
  return true
}
console.log(compareObj(obj1,obj2))