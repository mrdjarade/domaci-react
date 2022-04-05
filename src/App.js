import classes from "./App.module.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className={classes["app-container"]}>
      <Navigation></Navigation>
    </div>
  );
}

export default App;
