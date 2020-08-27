import React from 'react'

export default function Item({ id, text, checked, toggleChecked }) {
    const setToggleChecked = () => {
        toggleChecked(id)
    }
    return (
        <div>
            <label>
                <input type="checkbox" checked={checked} onChange={setToggleChecked} />
                <span>{text}</span>
            </label>
        </div>
    )
}
