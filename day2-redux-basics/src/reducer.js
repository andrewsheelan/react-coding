const initState = {
    myList: []
}
export default function reducer(state=initState, action) {
    var myList;
    if(action.type == 'ADD_ITEM') {
        myList = [...state.myList, action.text]
        return {
            myList
        }
    }
    return state
}