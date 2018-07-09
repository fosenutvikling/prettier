export default {
  parser: "typescript",
  printWidth: 100,
  tabWidth: 4,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: "none",
  bracketSpacing: true,
  arrowParens: "avoid",
  proseWrap: "never",
  requirePragma: false,
  insertPragma: false,  
  overrides: [{
      files:'*.json',
      options: {parser: "json", tabWidth: 2}
  }
  ]
};
