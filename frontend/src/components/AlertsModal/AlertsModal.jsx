import { useModal } from "../../context/Modal";

function AlertsModal(feature) {
    const { closeModal } = useModal();
    const { handleDelete } = feature;

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
                <h4>Are you sure you want to delete this group?</h4>

                <button className="delete-btn-yes" onClick={handleDelete}>
                    Yes (Delete Group)
                </button>
                <button className="delete-btn-no" onClick={closeModal}>
                    No (Keep Group)
                </button>
            </div> ) : null
        }
    </div>
    )
}

export default AlertsModal
