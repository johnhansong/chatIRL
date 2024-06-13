import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { fetchOneEvent } from '../../store/events';
import { fetchOneGroup } from '../../store/groups';

const EventDetailsPage = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const eventId = params.eventId;
    const event = useSelector((state) => {
        if (eventId == state.events.oneEvent.id) {
            return state.events.oneEvent
        }
        return {}
    })
    const group = useSelector((state) => {
        if (event.groupId == state.groups.oneGroup.id) {
            return state.groups.oneGroup
        }
        return {}
    })

    console.log("console", group)

    useEffect(() => {
        dispatch(fetchOneEvent(eventId))
    }, [dispatch])

    useEffect(() => {
        if (event.groupId) {
            dispatch(fetchOneGroup(event.groupId))
        }
    }, [event])

    return ( group.Organizer &&
    <div className="event-details-wrapper">
        <div className="event-details-header">
            <NavLink id='back-btn' to='/events'>← Events</NavLink>
            <div className="event-title">
                <h1>{event.name}</h1>
                <h4>Hosted by {group.Organizer.firstName} {group.Organizer.lastName}</h4>
            </div>
        </div>

        <div className="event-boxes">
            <img id="event-image" src={event.previewImage ?
                event.previewImage : "https://secure.meetupstatic.com/next/images/fallbacks/group-cover-15-wide.webp"
            }/>
            <div className="event-boxes">
                <div className="event-group-details">
                    <img id="event-group-image" src={group.GroupImages.length ?
                        group.GroupImages[0].imageURL : "https://secure.meetupstatic.com/next/images/fallbacks/group-cover-1-wide.webp"
                    }/>
                    <div className="event-group-info">
                        <h3>{group.name}</h3>
                        <h4>{group.private ? "Private" : "Public"}</h4>
                    </div>
                </div>

                <div className="event-details-box">
                    <i class="fa-regular fa-clock"></i>
                    <div>
                        <h4>START</h4>
                        <h4>END</h4>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>
    )
}

export default EventDetailsPage
