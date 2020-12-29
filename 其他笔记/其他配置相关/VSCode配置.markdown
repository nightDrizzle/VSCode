```json
{
  "tabnine.experimentalAutoImports": true,
  "workbench.iconTheme": "vscode-icons",
  "vetur.grammar.customBlocks": {
    "docs": "md",
    "i18n": "json"
  },
  "vetur.format.defaultFormatterOptions": {
    "prettier": {
      "printWidth": 300,
      "singleQuote": true,
      "wrapAttributes": false,
      "sortAttributes": false,
      "semi": false,
      "tabWidth": 2,
    },
    "js-beautify-html": {
      "wrap_attributes": "force-expand-multiline",
      "wrap_line_length": 300,
      "end_with_newline": false //
    },
    "prettyhtml": {
        "printWidth": 300,
        "singleQuote": true,
        "wrapAttributes": false,
        "sortAttributes": false,
        "semi": false,
        "tabWidth": 2,
    }
  },
  "vetur.format.defaultFormatter.html": "prettyhtml",
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "eslint.codeAction.showDocumentation": {
    "enable": true
  },
  "explorer.confirmDelete": false,
  "editor.tabSize": 2, // vscode制表符的空格数
  "javascript.format.semicolons": "remove", // 删除js代码结尾分号
  "javascript.preferences.quoteStyle": "single",
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "liveServer.settings.donotShowInfoMsg": true,
  "explorer.confirmDragAndDrop": false,
  "git.enableSmartCommit": true
}
```