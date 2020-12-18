import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./pages/register";

function App() {



  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
