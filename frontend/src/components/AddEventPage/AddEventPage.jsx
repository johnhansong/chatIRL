import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams} from "react-router-dom";
import { postEvent, postEventImage } from "../../store/events";
import { fetchOneGroup } from "../../store/groups";
import './AddEventPage.css'


const AddEventPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const groupId = params.groupId;
    const group = useSelector((state) => state.groups.oneGroup)

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState(0);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({})

    const handleName = (e) => setName(e.target.value)
    const handleType = (e) => setType(e.target.value)
    const handlePrice = (e) => setPrice(e.target.value)
    const handleStartDate = (e) => setStartDate(e.target.value)
    const handleEndDate = (e) => setEndDate(e.target.value)
    const handleImage = (e) => setImage(e.target.value)
    const handleDescription = (e) => setDescription(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const error = {};
        if (!name) error.name = "Name is required";
        if (!type) error.type = "Type is required";
        if (!price) error.about = "Price is required"
        if (!startDate) error.startDate = "Event start is required";
        if (!endDate) error.endDate = "Event end is required";
        if (!(image.endsWith(".png") || image.endsWith(".jpg") || image.endsWith(".jpeg"))) {
            error.image = "Image URL must end in .png, .jpg, or .jpeg";
        }
        if (description?.length < 30) error.description = "Description must be at least 30 characters long"

        const payload = {
            name, type, price,
            startDate, endDate,
            description,
            venueId: '1',
            capacity: '1'
        }

        const event = await dispatch(postEvent(payload, groupId))
            .catch(async (res) => {
                const data = await res.json();
                if (data?.errors) {
                    setErrors({...data.errors, ...error})
                }
            })

        if (event) {
            dispatch(postEventImage(event.id, image, true))
            navigate(`/events/${event.id}`)
        }
    }

    useEffect(() => {
        dispatch(fetchOneGroup(groupId))
    }, [dispatch])

    return (
        <div className="create-form-wrapper">
            <form onSubmit={handleSubmit}>
                <div className="set-event-section">
                    <h2>Create an event for {group.name}</h2>

                    <h4>What is the name of your event?</h4>
                    <input
                        placeholder="Event Name"
                        onChange={handleName}
                    ></input>
                    <p className="errors">{errors.name}</p>
                </div>

                <div className="set-event-section">
                    <label>Is this an in person or online event?</label>
                    <select onChange={handleType}>
                        <option value="" hidden>(Select One)</option>
                        <option value="In person">In person</option>
                        <option value="Online">Online</option>
                    </select>
                    <p className="errors">{errors.type}</p>

                    <label>What is the price for your event?</label>
                    <input
                        type="number"
                        placeholder="0"
                        onChange={handlePrice}
                    ></input>
                    <p className="errors">{errors.price}</p>
                </div>

                <div className="set-event-section">
                    <label>When does your event start?</label>
                        <input
                            type="datetime-local"
                            onChange={handleStartDate}
                        ></input>
                    <p className="errors">{errors.startDate}</p>

                    <labeL>When does your event end?</labeL>
                        <input
                            type="datetime-local"
                            onChange={handleEndDate}
                        ></input>
                    <p className="errors">{errors.endDate}</p>
                </div>

                <div className="set-event-section">
                    <label>Please add in image url for your group below:</label>
                    <input
                        placeholder="image URL"
                        onChange={handleImage}
                    ></input>
                    <p className="errors">{errors.image}</p>
                </div>

                <div className="set-event-description">
                    <label>Please describe your event</label>
                    <textarea
                        placeholder="Please include at least 30 characters"
                        onChange={handleDescription}
                    ></textarea>
                    <p className="errors">{errors.description}</p>
                </div>

                <button
                    className="form-submit-btn"
                    type="submit"
                >Create Event</button>

            </form>
        </div>
    )
}

export default AddEventPage
