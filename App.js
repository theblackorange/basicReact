import React from 'react'
import  ReactDOM  from 'react-dom/client';
const element = React.createElement("h1", {key:"1"}, "<h2>m hun</h2><h3>m bhi hoon</h3>");
// element._store.validated = true
console.log(element)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element)