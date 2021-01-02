### VSCode-settings.json 中的配置

```json
{
  "editor.tabSize": 2,
  "editor.formatOnPaste": true, // 粘贴时格式化
  "editor.formatOnSave": true, // 保存时格式化

  /*prettier-start*/
  "vetur.format.defaultFormatter.html": "prettier",
  "vetur.format.defaultFormatter.pug": "prettier",
  "vetur.format.defaultFormatter.css": "prettier",
  "vetur.format.defaultFormatter.postcss": "prettier",
  "vetur.format.defaultFormatter.scss": "prettier",
  "vetur.format.defaultFormatter.less": "prettier",
  "vetur.format.defaultFormatter.stylus": "stylus-supremacy",
  "vetur.format.defaultFormatter.js": "prettier",
  "vetur.format.defaultFormatter.ts": "prettier",
  "vetur.format.defaultFormatter.sass": "sass-formatter",
  "vetur.format.defaultFormatterOptions": {
    "prettier": {
      "printWidth": 200,
      "singleQuote": true,
      "semi": false
    }
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.semi": false, // 清除js语句结尾的分号
  "prettier.singleQuote": true,
  "prettier.printWidth": 200,
  "explorer.confirmDragAndDrop": false,
  "workbench.colorTheme": "Visual Studio Light",
  "files.autoSave": "off",
  "explorer.confirmDelete": false,
  "tabnine.experimentalAutoImports": true // 使用单引号
  /*prettier-end*/
}
```
