import React from 'react';
import './style.css';
import Animal from '../Animal/Animal';

const AnimalList = ({animals, selectAnimal}) => {
return(
    <div className="animal-list">
       { animals.map(x =>
        <Animal 
        key = {x.id}
        id = {x.id}
        name={x.nazev}
        latin={x.nazevLatinsky}
        img= {x.foto}
        selectAnimal={selectAnimal}
          />
        )}

    </div>
)

}
export default AnimalList