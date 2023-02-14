import React from "react";
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage(props) {
  const favoirtesCtx = useContext(FavoritesContext);
  return (
    <section>
      <h1> My Favoirtes </h1>
      <MeetupList meetups={favoirtesCtx.favorites} />
    </section>
  );
}

export default FavoritesPage;
