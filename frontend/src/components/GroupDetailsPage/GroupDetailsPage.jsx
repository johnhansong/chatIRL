import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { fetchOneGroup, fetchGroupEvents } from "../../store/groups";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import AlertsModal from "../AlertsModal/AlertsModal";
import { formatDate, sortByDate } from "../../../prettier";
import "./GroupDetailsPage.css";

const GroupDetailsPage = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    const user = useSelector((state) => state.session.user)
    const groupId = params.groupId
    const group = useSelector((state) => {
        if (groupId == state.groups.oneGroup.id) {
            return state.groups.oneGroup
        }
        return {};
    });

    // group store also pulls group events by groupId
    const groupEvents = useSelector((state) => state.groups.events.Events)

    // extract all the events and bucket them into past and future
    let pastEvents = [];
    let futureEvents = [];
    const availableEvents = (events) => {

        events?.forEach((event) => {
            let currDate = new Date();
            let eventDate = new Date(event.startDate)
            if (currDate < eventDate) {
                futureEvents.push(event)
            } else {
                pastEvents.push(event)
            }
        });
    }
    availableEvents(groupEvents)

    // sort the events
    sortByDate(pastEvents)
    sortByDate(futureEvents)

    // check if currUser is group Organizer
    const isOrganizer = (user) => {
        return user.id == group.Organizer.id
    }

    useEffect(() => {
        dispatch(fetchGroupEvents(groupId))
        dispatch(fetchOneGroup(groupId))
    }, [dispatch, groupId])

    return (Object.keys(group).length && groupEvents &&
    <div className='group-details-wrapper'>
            <NavLink id='back-btn' to="/groups">← Groups </NavLink>
        <div className="group-block-1">
            <img id="group-details-img" src={group.GroupImages ?
                            group.GroupImages[0].imageURL : 'https://secure.meetupstatic.com/next/images/fallbacks/group-cover-15-wide.webp'}></img>
            <div className="group-details">
                <h1>{group.name}</h1>
                <h4>{group.city}, {group.state}</h4>
                <h4>{groupEvents.length} events · {group.private ? "Private" : "Public"}</h4>
                <h4>Organized by {group.Organizer.firstName} {group.Organizer.lastName}</h4>
            </div>

                {/* BUTTONS! */}
                { user && isOrganizer(user) ? (
                    <div className='org-group-btn'>
                        <button >Create Event</button>
                        <button >Update</button>
                        <button >Delete</button>
                    </div>
                ) : user ? (
                    <div className="join-group-btn">
                        <OpenModalButton
                            buttonText="Join this group"
                            modalComponent={ <AlertsModal type={'notice'} text={'Feature coming soon'} />}
                        ></OpenModalButton>
                    </div>
                ) : null}
        </div>

        <div className="group-block-2">
            <div className="organizer-details">
                <h1>Organizer</h1>
                <h4>{group.Organizer.firstName} {group.Organizer.lastName}</h4>
            </div>

            <div className="group-about">
                <h2>What we&apos;re about</h2>
                <p>{group.about}</p>
            </div>

            <div className="group-upcoming-events">
                {groupEvents.length && (<h2>No upcoming events!</h2>)}

                {futureEvents.length && (
                    <>
                        <h2> Upcoming Events ({futureEvents.length})</h2>
                            {Object.values(futureEvents).map(event => (
                                <div key={event.id} id='group-event-item'
                                onClick={() => navigate(`/events/${event.id}`)}>
                                <div className="event-item">
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
                                    <p id='event-description'>event description here</p>
                            </div>
                            ))
                            }
                    </>
                )}

                {pastEvents.length && (
                    <>
                    <h2> Past Events ({pastEvents.length})</h2>

                    {Object.values(pastEvents).map(event => (
                        <div key={event.id} id='group-event-item'
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
                            <p id='event-description'>event description here</p>
                        </div>
                    ))
                    }
                </>
                )}
            </div>
        </div>
    </div>
    )
}

export default GroupDetailsPage
