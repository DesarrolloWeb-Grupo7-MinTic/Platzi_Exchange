import GlobalStyle from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import DetailPage from "./components/DetailPage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path='/coin/:id' component={DetailPage} />
        <Route path='/home' component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
