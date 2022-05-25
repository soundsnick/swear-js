# 🍭 Swear JS
Simple strong typed state manager, with the simplest abstraction and minimum boilerplate


## Features
- 🍥 **Simple abstraction**. No need to get into FLUX, life cycle, the flow. You just have a state, and have functions(actions) that somehow mutates that state. Just like React's `useState`. No way simpler.
- 🍩 **Deep type inferences**. No need to guess what type you're working with(hey, Redux)!
- 🍡 **Code splitting**. Your swears can lay wherever you want. Even in the scope of another microapplication.
- 🧊 **Framework-agnostic**. If your framework has no support, or you just simply don't use one, `core` package is for you.
- 🪡 **Small size**. [584B](https://bundlephobia.com/package/@swear-js/core@2.1.0)
- 🐞 **Logging**. Store has default support for logging. And SwearJS has it's our own beautiful [logger](https://npmjs.org/@swear-js/logger)

### Frameworks
Choose your framework/agnostic here, and keep going
- [Framework agnostic](/packages/core)
- [React](/packages/react)

### Demo
Demo applications are runnable via npx:
- [Framework agnostic] `$ npx swear-demo-agnostic`
- [React] `$ npx swear-demo-react`
> Don't forget to remove created project directory after

Inspired by [@artalar's](https://github.com/artalar) [Reatom](https://github.com/artalar/reatom).
