import { useDispatch, useSelector } from 'react-redux';
import { fetchGroups } from '../../store/groups';
import { fetchEvents } from '../../store/events';
import { useEffect } from 'react';
import './ListPage.css';
import { NavLink } from "react-router-dom";
import { formatDate } from '../../../prettier';

const ListPage = ({toggle}) => {
    const dispatch = useDispatch()
    const groups = useSelector((state) => state.groups.allGroups)
    const events = useSelector((state) => state.events.allEvents)

    console.log("TEST", events[0].startDate)
    // const numEvents = (group) => {
    //     const count = Object.values(events).filter(event =>
    //         event.groupId === group.id
    //     ).length;

    //     return count;
    // }

    useEffect(() => {
        dispatch(fetchGroups());
        dispatch(fetchEvents());
    }, [dispatch]);

    return (
    <>
        <div>
            <h1>ListPage</h1>
            <div className='toggle-events-group'>
                <NavLink to='/events'>Events</NavLink>
                <NavLink to='/groups'>Groups</NavLink>
            </div>
            <h3>{toggle} in ChatIRL</h3>
        </div>

        <div>
            <ul className='list-content'>
                {toggle == 'Groups' &&
                    Object.values(groups).map(group => (
                        <div key={group.id} id='group-item'>
                            <img src={group.previewImage} />
                            <div className='group-item-details'>
                                <h2>{group.name}</h2>
                                <h3>{group.city}, {group.state}</h3>
                                <p>{group.about}</p>
                                <h4>Private: {group.private ? "Private" : "Public"}</h4>
                            </div>
                        </div>
                    ))
                }

                {toggle === 'Events' &&
                    <li>IN DEVELOPMENT</li> &&

                    Object.values(events).map(event => (
                        <div key={event.id} id='event-item'>
                            <img src={event.previewImage} />
                            <div className='event-item-details'>
                                <h4>{formatDate(event.startDate)}</h4>
                                <h2>{event.name}</h2>
                            </div>
                        </div>
                    ))
                }
            </ul>
        </div>
    </>
    )
}

export default ListPage
