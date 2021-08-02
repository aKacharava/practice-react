import React from 'react'

export default function Backdrop(props) {
    return (
        <div className="vg-backdrop" onClick={props.pressedOnCancel}/>
    )
}
