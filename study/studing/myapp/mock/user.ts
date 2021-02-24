import Mock from 'mockjs';

const data = Mock.mock({
  'name:|2-3':'abc',
  'name|5':'v',
  'name|+1':13,
  'number1|10-20':1,
  'number2|2.5':1.1,
  'boolean1|1':true,
  'boolean2|1-9':true,
  'obj1|3':{a:1,b:2,c:3,d:4,e:5,f:6,g:7},
  'obj2|4-6':{a:1,b:2,c:3,d:4,e:5,f:6,g:7},
  'array1|1': ['AMD', 'CMD', 'KMD', 'UMD'],
  'array2|+1': ['AMD', 'CMD', 'KMD', 'UMD'],
  'array3|3-6':['a','b','c'],
  'aaa':function(){return false},
})
const random = Mock.mock('*','get',{
  type:'get',
  email:'@email',
  random1:Mock.Random.character('symbol'),
  random2:Mock.Random.string(5)
})
Mock.setup({
  timeout:3000
})
export default {
  // 使用 mockjs 等三方库
  'GET /api/data': data,
  'GET /api/random': random,
};

