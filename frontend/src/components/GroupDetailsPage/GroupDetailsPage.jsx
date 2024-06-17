import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { fetchOneGroup, fetchGroupEvents, destroyGroup } from "../../store/groups";
import { useModal } from "../../context/Modal";
import EventPreview from "../ListPage/EventDetails";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import AlertsModal from "../AlertsModal/AlertsModal";
import { sortByDate } from "../../../prettier";
import "./GroupDetailsPage.css";

const GroupDetailsPage = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    const user = useSelector((state) => state.session.user)
    const { closeModal } = useModal();
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

    const handleUpdateBtn = () => {
        navigate(`/groups/${groupId}/edit`)
    }

    const handleCreateEvt = () => {
        navigate(`/groups/${groupId}/events/create`)
    }

    const deleteGroup = () => {
        dispatch(destroyGroup(groupId))
        navigate('/groups')
        closeModal();
    }

    useEffect(() => {
        dispatch(fetchGroupEvents(groupId))
        dispatch(fetchOneGroup(groupId))
    }, [dispatch, groupId])

    if (!Object.keys(group).length || !group.Organizer) return <p>Loading...</p>
    return (Object.keys(group).length && groupEvents &&
    <>
        <div className='group-details-wrapper-1'>
                <NavLink id='back-btn' to="/groups">← Groups </NavLink>
            <div className="group-block-1">
                <img id="group-details-img" src={group.GroupImages.length ?
                                group.GroupImages[0]?.imageURL : 'https://secure.meetupstatic.com/next/images/fallbacks/group-cover-15-wide.webp'}></img>
                <div className="group-details-box">
                    <div className="group-details">
                        <h1>{group.name}</h1>
                        <h4>{group.city}, {group.state}</h4>
                        <h4>{groupEvents.length} events · {group.private ? "Private" : "Public"}</h4>
                        <h4>Organized by {group.Organizer.firstName} {group.Organizer.lastName}</h4>
                    </div>

                    <div className="group-btn">
                        {/* BUTTONS! */}
                        { user && isOrganizer(user) ? (
                            <div className='org-group-btn'>
                                <button onClick={handleCreateEvt}>Create Event</button>
                                <button onClick={handleUpdateBtn}>Update</button>
                                <OpenModalButton
                                    buttonText="Delete"
                                    modalComponent={
                                        <AlertsModal details="group"
                                                    handleDelete={deleteGroup}
                                                    type={'delete'}
                                        />}
                                ></OpenModalButton>
                            </div>
                        ) : user ? (
                            <div className="join-group-btn">
                                <OpenModalButton
                                    buttonText="Join this group"
                                    modalComponent={ <AlertsModal groupId="" type={'notice'}/>}
                                ></OpenModalButton>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>

        <div className="group-details-wrapper-2">
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
                    {!groupEvents.length ? (<h2>No upcoming events!</h2>) : null}

                    {futureEvents.length ? (
                    <>
                        <h2> Upcoming Events ({futureEvents.length})</h2>
                        {Object.values(futureEvents).map(event => {
                            return <EventPreview event={event}/>
                        })}
                    </>
                    ) : null}

                    {pastEvents.length ? (
                    <>
                        <h2> Past Events ({pastEvents.length})</h2>
                        {Object.values(pastEvents).map(event => {
                            return <EventPreview event={event}/>
                        })}
                    </>
                    ) : null}
                </div>
            </div>
        </div>
    </>
    )
}

export default GroupDetailsPage
