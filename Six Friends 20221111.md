- [Queries which will aid revision of what we studied](#queries-which-will-aid-revision-of-what-we-studied)
  * [Why is type equals module used in App js script?](#why-is-type-equals-module-used-in-app-js-script-)
  * [What is the 2 line interpretation of useState](#what-is-the-2-line-interpretation-of-usestate)
  * [What is a State in React](#what-is-a-state-in-react)
  * [HTML - what is onClick in button element](#html---what-is-onclick-in-button-element)

## Queries which will aid revision of what we studied

I keep six honest serving-men

(They taught me all I knew);

Their names are What and Why and When 

And How and Where and Who.

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



### What is the 2 line interpretation of useState
```javascript
  const [location, updateLocation] = useState("");

```

### What is a State in React
A component-specific memory is called State


Reference : https://beta.reactjs.org/learn/state-a-components-memory 

### HTML - what is onClick in button element
```javascript
<button onClick={handleClick}> 

```
onClick is now defined as handleClick because the definition of handleClick is being passed as a value to onClick



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