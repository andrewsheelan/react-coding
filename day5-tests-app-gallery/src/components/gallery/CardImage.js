import React from 'react'

const CardImage = ({src}) => {
    return (
        <div className="gallery-card-image">
            <img src={src} alt={src}/>
        </div>
    )
}

export default CardImage
