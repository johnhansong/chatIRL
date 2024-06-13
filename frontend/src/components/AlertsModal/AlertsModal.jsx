export default function AlertsModal(feature) {
    return (
    (feature.type == 'notice' &&
        <div>
            <h2>{feature.text}</h2>
        </div>
    )

    (feature.type == 'delete' &&
        <div>
            <h2>{feature.text}</h2>
            <button>No</button>
            <button>Yes</button>
        </div>
    )
    )
}
