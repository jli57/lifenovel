const Notifications = ({ events }) => {
  return (
    <ul>
      events.map( event => <li key={event.id}>{ event }</li> )
    </ul>
  );
};
