

--------------------

I keep six honest serving-men

(They taught me all I knew);

Their names are What and Why and When 

And How and Where and Who.

# Answered Questions

## React



## CSS


## Javascript
### Why is type equals module used in App js script?
```javascript

<script type="module" src="./App.js"></script>
```
What is a Module in JavaScript?
Modules give you a better way to organize these variables and functions. With modules, you group the variables and functions that make sense to go together.

This puts these functions and variables into a module scope. The module scope can be used to share variables between the functions in the module.

But unlike function scopes, module scopes have a way of making their variables available to other modules as well. They can say explicitly which of the variables, classes, or functions in the module should be available.

h/t to https://twitter.com/linclark 

Relevant links:
https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/ +
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#see_also  




## Git


## Unclassified


# Open Questions

## React

### What is the 2 line interpretation of useState
```javascript
  const [location, updateLocation] = useState("");

```



### For text formatting inside components why you may use span over div
```javascript
function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

```

### Why key prop is used when rendering the array of components

```javascript
  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
```

## CSS



## Javascript


## Git

## Unclassified



### Show me a simple example of props & useState
A component-specific memory is called State

Read this sample

```javascript
import { useState } from 'react';

function MyButton({ p_count, p_onClick }) {
  return (
    <button onClick={p_onClick}>
      Clicked {p_count} times
    </button>
  );
}

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  function handleClick2() {
    setCount(count+1.01);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton p_count={count} p_onClick={handleClick} />
      <MyButton p_count={count} p_onClick={handleClick2} />
    </div>
  );
}

```
Code Sandbox link inspired by react documentation : https://codesandbox.io/s/rkwfls 






### Explain conditional rendering in JSX

```javascript
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);

```
What did we just do?
We first assigned a component to a JS object based on a condition.
We then rendered it in JSX by escaping back to JS using {content}


### What does State mean in React

Reference : https://beta.reactjs.org/learn/state-a-components-memory 

### HTML - what is onClick in button element
```javascript
<button onClick={handleClick}> 

```









### What is useEffect? How is it used?


```javascript
  useEffect(() => {
    requestPets();
  }, []);
```


### What is async await in Javascript
```javascript
  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }
```

### Is JSX stricter than HTML
Yes, You have to close tags like <br />. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> 

### JSX basiclly helps you put markup in JS code but how do you escap back to JS
By using {} for all expressions which need to be evaluated in JS



### When we use Git, what is the difference between accessing Git from VSCode via SSH vs via HTTPS
We want to understand the implications of these 2 methods

Which is preferred when, pros and cons

### Should I change the definition of the repository in my packaage.json 

  "repository": {
    "type": "git",
    "url": "git+https://github.com/software-eng-bootcamp/typescript-template-project.git"
  },

### Summary of how jasmine framework works
Jasmine started

  Line
    × placeholder spec one
      - Expected true to equal false.
    √ placeholder spec two

**************************************************
*                    Failures                    *
**************************************************

1) Line placeholder spec one
  - Expected true to equal false.

Executed 2 of 2 specs (1 FAILED) in 0.019 sec.

