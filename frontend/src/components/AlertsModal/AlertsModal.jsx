import { useModal } from "../../context/Modal";
import { capitalizeFirstLetter } from "../../../prettier";

function AlertsModal(feature) {
    const { closeModal } = useModal();
    const { handleDelete } = feature;

    console.log(handleDelete)

    return (
    <div>
        {feature.type == 'notice' ? (
            <div>
                <h2>Feature coming soon!</h2>
            </div> ) : null
        }

        {feature.type == 'delete' ? (
            <div>
                <h2>Confirm Delete</h2>
                <h4>Are you sure you want to delete this {feature.details}?</h4>

                <button className="delete-btn-yes" onClick={handleDelete}>
                    Yes (Delete {capitalizeFirstLetter(feature.details)})
                </button>
                <button className="delete-btn-no" onClick={closeModal}>
                    No (Keep {capitalizeFirstLetter(feature.details)})
                </button>
            </div> ) : null
        }
    </div>
    )
}

export default AlertsModal
