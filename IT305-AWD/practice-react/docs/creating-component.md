The `.tsx` extension refers to the React component files written in TypeScript with JSX syntax. It allows you to use TypeScript's type-checking features while writing React components.

The `.jsx` extension is used for React component files written in JavaScript with JSX syntax. JSX allows you to write HTML-like syntax directly within your JavaScript code, making it easier to create React components.

If using TypeScript, you would typically use the `.tsx` extension instead and for JavaScript, you would use the `.jsx` extension.

Functional Component is the most used component type in React. It is a JavaScript function that returns JSX. Functional components can accept props as arguments and are often used for presenting UI elements.

Example Code:
```
import React from 'react';

const MyComponent = (props) => {
  return <div>Hello, {props.name}!</div>;
};

export default MyComponent;
```

But also there is Class Component, which is a more traditional way to define a component in React. Class components are ES6 classes that extend from `React.Component` and must contain a `render()` method.

Example Code:
```
import React from 'react';

class MyComponent extends React.Component {
  render() {
    return <div>Hello, {this.props.name}!</div>;
  }
}

export default MyComponent;
```

Functional Based Components recommended approach for new project, while Class Based Components are still widely used in existing codebases and for components that require more advanced features like lifecycle methods.