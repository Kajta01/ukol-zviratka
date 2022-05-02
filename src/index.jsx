import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import './style.css';

import AnimalList from './comp/AnimalList/AnimalList';
import AnimalDetail from './comp/AnimalDetail/AnimalDetail';

const App = () => {

  const [data, setData] = useState([]);
  const [detail, setDetail] = useState([]);

  const selectAnimal = (id) =>{setDetail(data[id-1]); };

  

  useEffect(
		() => {
    	fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
			.then((response) => response.json())
			.then((json) => {
        setData(json.zvirata);
       setDetail(json.zvirata[0]);
      })
		},
		[]
	);
  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <div className="container">
        <AnimalList
         animals={data}
         selectAnimal={selectAnimal}
        />
        <AnimalDetail detail = {detail}/>

      </div>
      </>
  );
}

render(<App />, document.querySelector('#app'));
