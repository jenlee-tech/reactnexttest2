import React from "react";
import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

export default function MeetupList(props) {
  return (
    <div>
      <ul className={classes.list}>
        {props.meetups.map((meetup) => (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            description={meetup.description}
            address={meetup.address}
          />
        ))}
      </ul>
    </div>
  );
}
