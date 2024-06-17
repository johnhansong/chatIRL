import { fetchEventDetails } from "../../store/events";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { formatDate } from '../../../prettier';
import "./ListPage.css"


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
    console.log(eventDetail)

    if (!eventDetail.length || !event.Venue) return <p>Loading...</p>
    return ( event &&
        <div key={eventId} className='event-item-wrapper'
            onClick={() => navigate(`/events/${event.id}`)}>
            <div className="event-item">
                <img
                    src={
                        event.previewImage ? event.previewImage :
                        'https://secure.meetupstatic.com/next/images/fallbacks/group-cover-4-wide.webp'}
                    id='event-img'/>
                <div className='event-item-details'>
                    <div>
                        <h5>{formatDate(event.startDate)}</h5>
                        <h2>{event.name}</h2>
                    </div>
                    <h4>{event.Venue.city}, {event.Venue.state}</h4>
                </div>
            </div>
                <p id='event-description'>
                    {eventDetail[0]?.description.length > 400 ?
                        eventDetail[0]?.description.slice(0, 400) + "..." : eventDetail[0].description}
                </p>
        </div>
    )
}

export default EventPreview;
