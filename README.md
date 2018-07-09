# @fosenu/prettier
Prettier configuration used by Fosen Utvikling

## Usage

    npm install @fosenu/prettier --save-dev

Create a `prettierrc.js` file, import this package, and export its content

```js
import prettier from '@fosenu/prettier';
export default {
    ...prettier,
    // Other prettier rules to overwrite
}
```

