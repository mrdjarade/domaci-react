import classes from "./App.module.css";
import Navigation from "./components/Navigation";
import { Route, Redirect, Switch } from "react-router-dom";

function App() {
  return (
    <div className={classes["app-container"]}>
      <Navigation></Navigation>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/pocetna'></Redirect>
        </Route>
        <Route path='/pocetna'>
          <h1 className={classes.naslov}>Dobrodošli</h1>
          <p className={classes.paragraf}>
            Aplikacija za jednostavno praćenje troškova kreirana za potrebe
            domaćeg zadatka na predmetu Internet tehnologije.
          </p>
        </Route>
        <Route path='/stanje'>
          <h1>Stanje</h1>
        </Route>
        <Route path='/istorija'>
          <h1>Istorija</h1>
        </Route>
        <Route path='/dodaj'>
          <h1>Dodaj</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
