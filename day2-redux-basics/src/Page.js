import React from 'react'
import { connect } from 'react-redux'

function Page({ myList, dispatch }) {
    const addItem = () => {
        dispatch({ type: 'ADD_ITEM', text: 'Andrew' })
    }
    return (
        <>
            {myList.map(item => <div>{item}</div>)}
            <button onClick={addItem}>Add</button>
        </>
    )
}

const mapStateToProps = ({myList}) => {
    return {
        myList
    }
}

export default connect(mapStateToProps)(Page)
