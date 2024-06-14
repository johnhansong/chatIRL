import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import "./CreateGroupPage.css"


const CreateGroupPage = () => {
    const dispatch = useDispatch();
    const params = useParams();

    const groupId = params.groupId;
    const group = useSelector((state) => {
        if (groupId == state.groups.oneGroup.id) {
            return state.groups.oneGroup;
        }
        return {};
    })


    return (
    <div>
        <div className="create-group-header">
            <h4>BECOME AN ORGANIZER</h4>
            <h2>We&apos;ll walk you through a few steps to build your local community</h2>
        </div>

        <form>
            <div className="set-group-location">
                <h2>First, set your group&apos;s location.</h2>
                <p>
                    Meetup groups meet locally, in person and online. We&apos;ll connect
                    you with people in your area, and more can join you online.
                </p>
                <input></input>
            </div>

            <div className="set-group-name">
                <h2>What will your group&apos;s name be</h2>
                <p>
                    Choose a name that will give people a clear idea of what the group is about.
                    Feel free to get creative! You can edit this later if you change your mind.
                </p>
                <input></input>
            </div>

            <div className="set-group-description">
                <h2>Now describe what your group will be about</h2>
                <p>People will see this when we promote your group, but you&apos;ll be able to add to it later, too</p>
                <ol>
                    <li>What&apos;s the purpose of the group?</li>
                    <li>Who should join?</li>
                    <li>What will you do at your events?</li>
                </ol>
                <input></input>
            </div>

            <div className="set-final-steps">
                <h2>Final steps...</h2>

                <label>Is this an in person or online group?</label>
                <select>
                    <option value="" hidden>(select one)</option>
                    <option value="Online">Online</option>
                    <option value="In person">In person</option>
                </select>

                <label>Is this group private or public?</label>
                <select>
                    <option value="" hidden>(select one)</option>
                    <option value="false">Public</option>
                    <option value="true">Private</option>
                </select>

                <label>Please add in image url for your group below:</label>
                <input></input>
            </div>

            <div>
                <button type='submit'>Create group</button>
            </div>
        </form>

    </div>
    )
}

export default CreateGroupPage;
