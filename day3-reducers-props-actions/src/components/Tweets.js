import React from 'react'
import { connect } from 'react-redux'

function Tweets({tweets, tweeter}) {
    return (
        <div>
            <br />
            {tweeter}
        </div>
    )
}

const mapStateToProps = ({login, tweets}) => {
    console.log(login)
    return {
        tweets, 
        get tweeter() {
            return `Lets have some fun Tweeting with email: ${login.email}`
        }
    }
}

export default connect(mapStateToProps)(Tweets)