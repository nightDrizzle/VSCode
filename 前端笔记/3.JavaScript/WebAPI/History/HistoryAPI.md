## popstate事件
### 以下情况下触发：
1. history.go()
2. history.back()
3. 触发a链接锚点
以下情况不触发：
1. history.pushState()
2. history.replaceState()
### 在VueRouter中对应的方法
history.go() -> router.go()
history.pushState() -> router.push()
history.replaceState() -> router.replace()