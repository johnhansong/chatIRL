import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useNavigate } from "react-router-dom";
import { fetchOneGroup } from "../../store/groups";
import "./SingleGroupPage.css";

export const GroupDetailsPage = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    const groupId = params.groupId

    console.log(groupId)

    useEffect(() => {
        dispatch(fetchOneGroup(groupId))
    }, [dispatch])

    const group = useSelector((state) => {
        if (groupId == state.groups)
    })

    return (
    <div> GROUPS/ID
        <div className="group-page">
            <img id="group-img" src={GroupDetailsPage.GroupImages}></img>


        </div>
    </div>
    )
}
