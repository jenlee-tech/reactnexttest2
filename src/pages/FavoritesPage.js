import React from "react";
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage(props) {
  const favoirtesCtx = useContext(FavoritesContext);
  let content;

  if (favoirtesCtx.totalFavorites === 0) {
    content = <p>you got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={FavoritesContext.favorites} />;
  }

  return (
    <section>
      <h1> My Favoirtes </h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
