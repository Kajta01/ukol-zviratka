import React from 'react';
import './style.css';

const Animal = ({name, latin, img}) => {
return(
    <div className="animal">
        <div className="animal__image">
            <img src={img} alt={name} />
        </div>
        <div className="animal__desc">
            <div className="animal__name">{name}</div>
            <div className="animal__latin">{latin}</div>
        </div>
    </div>

)

}
export default Animal