import classes from "./App.module.css";
import Navigation from "./components/Navigation";
import { Route, Redirect, Switch } from "react-router-dom";
import Balance from "./components/Balance/Balance";
import History from "./components/History/History";
import Form from "./components/Form/Form";

const data = {
  items: [{ name: "Plata", amount: 100000 }],
  income: 100000,
  expenses: 0,
};

function App() {
  const addItemHandler = (i) => {
    data.items.unshift(i);
    if (i.amount > 0) {
      data.income += +i.amount;
    } else {
      data.expenses += Number(i.amount);
    }
  };

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
          <Balance data={data} />
        </Route>
        <Route path='/istorija'>
          <History data={data} />
        </Route>
        <Route path='/dodaj'>
          <Form addItem={addItemHandler} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
