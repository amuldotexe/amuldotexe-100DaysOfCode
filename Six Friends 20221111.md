- [Queries which will aid revision of what we studied](#queries-which-will-aid-revision-of-what-we-studied)
  * [Why is type equals module used in App js script?](#why-is-type-equals-module-used-in-app-js-script-)
  * [What is the 2 line interpretation of useState](#what-is-the-2-line-interpretation-of-usestate)
  * [What is a State in React](#what-is-a-state-in-react)
  * [HTML - what is onClick in button element](#html---what-is-onclick-in-button-element)

I keep six honest serving-men
(They taught me all I knew);
Their names are What and Why and When 
And How and Where and Who.

## Queries which will aid revision of what we studied

I KEEP six honest serving-men
(They taught me all I knew);
Their names are What and Why and When 
And How and Where and Who.

### Why is type equals module used in App js script?
```javascript

<script type="module" src="./App.js"></script>
```

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