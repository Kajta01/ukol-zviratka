import React from 'react';
import './style.css';

const AnimalDetail = ({detail}) => {
return(
    <div className="detail">
        <div className="detail__content">

            <div className="detail__header">
                <img className="detail__image" src={detail.foto} alt={detail.nazev} />
                <div className="detail__title">
                    <h2 className="detail__name"><span>{detail.nazev}</span></h2>
                    <div className="detail__latin"><span>{detail.nazevLatinsky}</span></div>
                </div>
            </div>

            <div className="detail__info">
                <p className="detail__desc">
                {detail.popis}
                </p>

                <div className="detail__items">
                    <div className="detail__item">
                        <h3>Domovina</h3>
                        <p>{detail.domovina}</p>
                    </div>
                    <div className="detail__item">
                        <h3>Biotop</h3>
                        <p>{detail.biotop}</p>
                    </div>
                    <div className="detail__item">
                        <h3>Potrava</h3>
                        <p>{detail.potrava}</p>
                    </div>
                    <div className="detail__item">
                        <h3>Velikost</h3>
                        <p>{detail.velikost}</p>
                    </div>
                </div>

                <div className="detail__zoo">
                    <h3>Najdete v těchto ZOO</h3>
                    <p>Praha, Dvůr Králové, Olomouc</p>
                </div>
            </div>

        </div>
    </div>
)

}
export default AnimalDetail