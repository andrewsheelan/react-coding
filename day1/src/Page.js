import React, { useState, useRef, useEffect } from 'react'
import Item from './Item'
import uuid from 'react-uuid'

export default function Page() {
    const [myList, setMyList] = useState([])
    const pageDataRef = useRef("")
    
    useEffect(() => {
        const myNewList = JSON.parse(localStorage.getItem('ITEMS'));
        setMyList(myNewList)
    }, [])

    useEffect(() => {
        localStorage.setItem('ITEMS', JSON.stringify(myList))
    }, [myList])

    const addToList = () => {
        const myNewList = [...myList, {
            id: uuid(),
            text: pageDataRef.current.value,
            checked: false
        }]
        setMyList(myNewList)
    }

    const toggleChecked = (id) => {
        const myNewList = [...myList]
        const mySelectedItem = myNewList.find(item => item.id === id)
        mySelectedItem.checked = !mySelectedItem.checked
        setMyList(myNewList)
    }

    return <div>
        {myList.map(item => <Item {...item} key={item.id} toggleChecked={toggleChecked}/>)}
        <input type="text" ref={pageDataRef} />
        <button onClick={addToList}>Add</button>
    </div>
}