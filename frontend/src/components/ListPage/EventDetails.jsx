import { fetchEventDetails } from "../../store/events";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { formatDate } from '../../../prettier';


function EventPreview({event}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getEvents = useSelector((state) => {
        return state.events.eventDetails
    })
    const eventId = event.id;

    useEffect(() => {
        dispatch(fetchEventDetails(eventId))
    }, [dispatch, eventId])

    const eventDetail = getEvents.filter(event => event.id == eventId)


    return ( event &&
        <div key={event.id} id='event-item'
            onClick={() => navigate(`/events/${event.id}`)}>
            <div>
                <img
                    src={
                        event.previewImage ? event.previewImage :
                        'https://secure.meetupstatic.com/next/images/fallbacks/group-cover-4-wide.webp'}
                    id='event-img'/>
                <div className='event-item-details'>
                    <h4>{formatDate(event.startDate)}</h4>
                    <h2>{event.name}</h2>
                    <h3>{event.Venue.city}, {event.Venue.state}</h3>
                </div>
            </div>
                <p id='event-description'>{eventDetail[0].description}</p>
        </div>
    )
}

export default EventPreview;
