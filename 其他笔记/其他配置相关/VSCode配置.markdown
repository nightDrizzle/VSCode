### VSCode-settings.json 中的配置

```json
{
  "editor.tabSize": 2,
  "editor.formatOnSave": true, // 保存时自动格式化 
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }, // 保存时以eslint格式进行修复
  "explorer.confirmDragAndDrop": false,
  "workbench.colorTheme": "Default Light+",
  "files.autoSave": "off",
  "explorer.confirmDelete": false,
  "eslint.format.enable": true,
  // "[vue]": {
  //   "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  // },
  "eslint.codeActionsOnSave.mode": "problems",
  "eslint.lintTask.enable": false,
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatterOptions": {
    "prettier": {
      "semi": false,
      "singleQuote": true,
      "trailingComma": "none",
      "printWidth": 200
    },
    "js-beautify-html": {
      "wrap_attributes": "force-expand-multiline"
    },
    "prettyhtml": {
      "printWidth": 200,
      "singleQuote": true,
      "wrapAttributes": false,
      "sortAttributes": false
    }
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  }
}
```


### 保存自动eslint，格式化使用vetur
```json
{
  "editor.tabSize": 2,
  // "editor.formatOnSave": true, // 保存时自动格式化 
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }, // 保存时以eslint格式进行修复
  "explorer.confirmDragAndDrop": false,
  "workbench.colorTheme": "Default Light+",
  "files.autoSave": "off",
  "explorer.confirmDelete": false,
  "eslint.format.enable": true,
  "eslint.codeActionsOnSave.mode": "problems",
  "eslint.lintTask.enable": false,
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatterOptions": {
    "prettier": {
      "semi": false,
      "singleQuote": true,
      "trailingComma": "none",
      "printWidth": 115
    },
    "js-beautify-html": {
      "wrap_attributes": "force-expand-multiline"
    },
    "prettyhtml": {
      "printWidth": 200,
      "singleQuote": true,
      "wrapAttributes": false,
      "sortAttributes": false
    }
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  }
}
```