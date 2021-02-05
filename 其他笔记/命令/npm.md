### 无法使用npm命令
```powershell（管理员）
set-ExecutionPolicy RemoteSigned // 选择Y（禁用脚本）
get-ExecutionPolicy
```
### 使用nrm
```sh
npm config get registry //查看当前镜像
npm config set registry http://registry.npm.taobao.org // jign
npm config set registry https://registry.npmjs.org/
```
### 初始化项目
```sh
npm init // 创建一个package.json文件
npm init -y // 
```

