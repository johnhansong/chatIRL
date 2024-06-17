import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { postGroup, postGroupImage, updateGroup } from '../../store/groups';
import "./AddGroupPage.css"


const AddGroupPage = ({toggle}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const groupId = params.groupId;
    const group = useSelector((state) => {
        if (groupId == state.groups.oneGroup.id) {
            return state.groups.oneGroup
        }
        return null;
    });

    const [city, setCity] = useState(group ? group.city : "");
    const [state, setState] = useState(group ? group.state :"");
    const [name, setName] = useState(group ? group.name :"");
    const [about, setAbout] = useState(group ? group.about :"");
    const [type, setType] = useState(group ? group.type :"");
    const [visibility, setVisibility] = useState(group ? group.private : true);
    const [image, setImage] = useState("");
    const [errors, setErrors] = useState({})

    const setLocation = (location) => {
        const [city, state] = location.split(', ');
        setCity(city);
        setState(state);
    }

    const handleLocation = (e) => setLocation(e.target.value)
    const handleName = (e) => setName(e.target.value);
    const handleAbout = (e) => setAbout(e.target.value);
    const handleType = (e) => setType(e.target.value);
    const handleVisibility = (e) => setVisibility(e.target.value);
    const handleImage = (e) => setImage(e.target.value);
    // const handleErrors = (e) => setErrors(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const error = {}
        if (!city || !state) {
            error.location = "Location is required";
        } if (!name) {
            error.name = "Name is required";
        } if (about?.length < 30) {
            error.about = "Description must be at least 30 characters long";
        } if (!type) {
            error.type = "Group Type is required";
        } if (!visibility === true && !visibility === false) {
            error.visibility = "Visibility Type is required";
        } if (!image.endsWith(".png") || !image.endsWith(".jpg") || !image.endsWith(".jpeg")) {
            error.image = "Image URL must end in .png, .jpg, or .jpeg";
        }

        const payload = {
            name,
            about,
            type,
            private: visibility,
            city,
            state,
        };

        let group;
        if (toggle == 'create') {
            group = await dispatch(postGroup(payload))
            .catch(async (res) => {
                const data = await res.json();
                if (data?.errors) {
                    setErrors({...data.errors, ...error})
                }
        })}
        if (group && toggle == 'create') {
            dispatch(postGroupImage(group.id, image, true))
        }

        if (toggle == 'update') {
            group = await dispatch(updateGroup(payload, groupId))
            .catch(async (res) => {
                const data = await res.json();
                if (data?.errors) {
                    setErrors({...data.errors, ...error})
                }
            })
        }

        if (group) navigate(`/groups/${group.id}`)
    }

    return (
    <div>
        <div className="add-group-header">
            {toggle == 'create' && <>
                <h4>BECOME AN ORGANIZER</h4>
                <h2>We&apos;ll walk you through a few steps to build your local community</h2>
            </>}
            {toggle == 'update' && <>
                <h4>UPDATE YOUR GROUP&apos;S INFORMATION</h4>
                <h2>We&apos;ll walk you through a few steps to build your local community</h2>
            </>}
        </div>

        <form onSubmit={handleSubmit}>
            <div className="set-group-location">
                <h2>First, set your group&apos;s location.</h2>
                <p>
                    Meetup groups meet locally, in person and online. We&apos;ll connect
                    you with people in your area, and more can join you online.
                </p>
                <input
                    onChange={handleLocation}
                    placeholder='City, STATE'
                    defaultValue={toggle=='create' ? '' : `${city}, ${state}`}
                ></input>
                <p className="errors">{errors.location}</p>
            </div>

            <div className="set-group-name">
                <h2>What will your group&apos;s name be</h2>
                <p>
                    Choose a name that will give people a clear idea of what the group is about.
                    Feel free to get creative! You can edit this later if you change your mind.
                </p>
                <input
                    onChange={handleName}
                    placeholder="What is your group name"
                    defaultValue={toggle=='create' ? '' : name}
                ></input>
                <p className="errors">{errors.name}</p>
            </div>

            <div className="set-group-description">
                <h2>Now describe what your group will be about</h2>
                <p>People will see this when we promote your group, but you&apos;ll be able to add to it later, too</p>
                <ol>
                    <li>What&apos;s the purpose of the group?</li>
                    <li>Who should join?</li>
                    <li>What will you do at your events?</li>
                </ol>
                <textarea
                    onChange={handleAbout}
                    placeholder="Please write at least 30 characters"
                    defaultValue={toggle=='create' ? '' : about}
                ></textarea>
                <p className="errors">{errors.about}</p>
            </div>

            <div className="set-final-steps">
                <h2>Final steps...</h2>

                <label>Is this an in-person or online group?</label>
                <select onChange={handleType} defaultValue={toggle=='create' ? '' : type}>
                    <option value="" hidden>(select one)</option>
                    <option value="Online">Online</option>
                    <option value="In person">In person</option>
                </select>
                <p className="errors">{errors.type}</p>

                <label>Is this group private or public?</label>
                <select onChange={handleVisibility} defaultValue={toggle=='create' ? '' : visibility}>
                    <option value="" hidden>(select one)</option>
                    <option value="true">Private</option>
                    <option value="false">Public</option>
                </select>
                <p className="errors">{errors.visibility}</p>

                { toggle == 'create' && <>
                <label>Please add in image url for your group below:</label>
                <input
                    onChange={handleImage}
                    placeholder="https://somewhere.com/image.gif"
                ></input>
                <p className="errors">{errors.image}</p>
                </>}
            </div>

            <button type='submit'>
                {toggle=='create' && 'Create Group'}
                {toggle=='update' && 'Update Group'}
            </button>
        </form>
    </div>
    )
}

export default AddGroupPage;
