import NewMeetUpForm from "../components/meetups/NewMeetUpForm";

function NewMeetupsPage() {
  function addMeetupHandler(meetupData) {
    fetch(
      "https://my-first-firebase-projec-9248d-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "content-type": "application/json" },
      }
    );
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetUpForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetupsPage;
