import React from 'react'

export default function Modal(props) {
    return (
        <div className="vg-modal">
            <p>Are you sure?</p>
            <button className="vg-btn vg-btn--alt">Cancel</button>
            <button>Confirm</button>
        </div>
    )
}
