import { Switch, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import NewMeetupsPage from "./pages/NewMeetupsPage";
import FavoritesPage from "./pages/FavoritesPage";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetupsPage />
        </Route>

        <Route path="/new-meetup" exact={true}>
          <NewMeetupsPage />
        </Route>

        <Route path="/favorites" exact={true}>
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
