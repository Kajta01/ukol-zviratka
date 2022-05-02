import React from 'react';
import './style.css';

const Animal = ({name, latin, img, id, selectAnimal}) => {
return(
    <div className="animal" onClick={()=>selectAnimal(id)}>
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