import { redirect, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

function EventDetailPage() {
  const data = useRouteLoaderData('event-details');

  return (
    <>
      <EventItem event={data.event} />
    </>
  );
}

export default EventDetailPage;


// async function loadEvent(id)
// {
//   const response = await fetch('http://localhost:8080/events/' + id);

//   if (!response.ok) {
//     throw new Response(JSON.stringify({message: 'Could not fetch details for selected event.'}),
//       {
//         status: 500
//       }
//     );
//   }
//    const resData = await response.json();

//   return resData;
// }

export async function loader({ params }) {
  const id = params.eventId;

  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw new Response(JSON.stringify({message: 'Could not fetch details for selected event.'}),
      {
        status: 500
      }
    );
  }


  const resData = await response.json();

  return resData;
}

export async function action({ request, params }) {
  console.log('DELETE ACTION STARTED');
  console.log('Method:', request.method);
  console.log('Event ID:', params.eventId);

  const eventId = params.eventId;

  const response = await fetch('http://localhost:8080/events/' + eventId,{
      method: request.method,
    }
  );

  console.log('Backend response status:', response.status);

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not delete event.',}),{
        status: 500,
      }
    );
  }

  console.log('DELETE SUCCESS');

  return redirect('/events');
}