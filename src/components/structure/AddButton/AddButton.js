import React from 'react'

const AddButton = () => {
    return (
        <form>
            <input
                type="text"
                placeholder="Enter a Todo..."
                className="task-input"
            />
            <button className="button-add" type="submit">
                Add
            </button>
        </form>
    )
}

export default AddButton
