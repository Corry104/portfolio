/// <reference types="react-scripts" />
/**
 * quick fix to create your own declaration module for react/jsx-runtime
 * https://stackoverflow.com/questions/67053345/could-not-find-a-declaration-file-for-module-react-jsx-runtime
 */
declare module 'react/jsx-runtime' {
  export default any
}
