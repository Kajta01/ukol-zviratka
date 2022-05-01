import React from 'react';
import './style.css';
import Animal from '../Animal/Animal';

const AnimalList = ({animals}) => {
return(
    <div className="animal-list">
       { animals.map(x =>
        <Animal 
        key = {x.id}
        name={x.nazev}
         latin={x.nazevLatinsky}
          img= {x.foto}
          />
        )}

    </div>
)

}
export default AnimalList