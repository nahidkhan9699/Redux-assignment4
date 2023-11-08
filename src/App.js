import React from "react";
import Landing from "./Components/Landing";
import { configstore } from "./state/configstore";
import { Provider } from "react-redux";
function App() {
  const mystore=configstore();
  return (
   <Provider store={mystore}>
    <Landing/>
   </Provider>

  );
}

export default App;
