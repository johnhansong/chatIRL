import { useDispatch, useSelector } from 'react-redux';
import { fetchGroups } from '../../store/groups';
import { fetchEvents } from '../../store/events';
import { useEffect } from 'react';
import './ListPage.css';
import { NavLink, useNavigate } from "react-router-dom";
import { formatDate } from '../../../prettier';

const ListPage = ({toggle}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const groups = useSelector((state) => state.groups.allGroups);
    const events = useSelector((state) => state.events.allEvents);

    const numEvents = (group) => {
        const count = Object.values(events).filter(event =>
            event.groupId === group.id
        ).length;

        return count;
    }

    useEffect(() => {
        dispatch(fetchGroups());
        dispatch(fetchEvents());
    }, [dispatch]);

    return (
    <div className='list-page-container'>
        <div>
            <div className='toggle-events-group'>
                <NavLink to='/events' className={toggle==='Events' ? 'selected' : 'not-selected'}>
                    Events
                </NavLink>
                <NavLink to='/groups' className={toggle==='Groups' ? 'selected' : 'not-selected'}>
                    Groups
                </NavLink>
            </div>
            <h3 id='toggle-description'>{toggle} in ChatIRL</h3>
        </div>

        <div>
            <ul className='list-content'>
                {toggle == 'Groups' &&
                    Object.values(groups).map(group => (
                        <div key={group.id} id='group-item'
                            onClick={() => navigate(`/groups/${group.id}`)}>
                            <img
                            id='group-img'
                                src={
                                    group.previewImage ? group.previewImage :
                                    'https://secure.meetupstatic.com/next/images/fallbacks/group-cover-4-wide.webp'}
                            />
                            <div className='group-item-details'>
                                <h2>{group.name}</h2>
                                <h3>{group.city}, {group.state}</h3>
                                <p>{group.about}</p>
                                <h4>{numEvents(group)} events · {group.private ? "Private" : "Public"}</h4>
                            </div>
                        </div>
                    ))
                }

                {toggle === 'Events' &&
                    Object.values(events).map(event => (
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
                            <p id='event-description'>event description here</p>
                    </div>
                    ))
                }
            </ul>
        </div>
    </div>
    )
}

export default ListPage
