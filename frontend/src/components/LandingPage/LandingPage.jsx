import './LandingPage.css';
import OpenModalButton from '../OpenModalButton/OpenModalButton';
import SignupFormModal from '../SignupFormModal/SignupFormModal';

const LandingPage = () => {

    return (
    <>
        <div className='landingPage-block-1'>
            <div id='block-1-text'>
                <h1>
                    The people platform- Where interests become friendships
                </h1>
                <p>
                    Whatever your interest, from hiking and reading to
                    networking and skill sharing, there are thousands
                    of people who share it on ChatIRL. Events are happening
                    every day— get off your phone and sign up to join the fun.
                </p>
            </div>
            <div>
                <img
                    id='block-1-img'
                    src='https://secure.meetupstatic.com/next/images/shared/online_events.svg?w=640'
                />
            </div>
        </div>
        <div className='landingPage-block-2'>
            <h2 id='block-2-header'>How ChatIRL works</h2>
            <p id='block-2-text'>
                Discover events and groups: See who's hosting local
                events for all the things you love.
                Start a group to host events: Create your
                own ChatIRL group, and draw from a community of tens
            </p>
        </div>
        <div className='landingPage-block-3'>
            <div id='seeGroups'>
                <img src='https://secure.meetupstatic.com/next/images/shared/handsUp.svg?w=256'/>
                <h3>See all groups</h3>
                <p>
                    Do what you love, meet others who love it,
                    find your community. The rest is history!
                </p>
            </div>
            <div id='findEvent'>
                <img src='https://secure.meetupstatic.com/next/images/shared/ticket.svg?w=256'/>
                <h3>Find an Event</h3>
                <p>
                    Events are happening on just about any topic you can think of,
                    from online gaming and photography to yoga and hiking.
                </p>
            </div>
            <div id='startGroup'>
                <img src='https://secure.meetupstatic.com/next/images/shared/joinGroup.svg?w=256'/>
                <h3>Start a new group</h3>
                <p>
                    You don&apos;t have to be an expert to gather people together
                    and explore shared interests.
                </p>
            </div>
        </div>
        <div className='join-button'>
            <OpenModalButton
                buttonText="Join Meetup"
                modalComponent={ <SignupFormModal/> }
            >
            </OpenModalButton>
        </div>
    </>
    )
}

export default LandingPage
