import React from "react";





//Componente Card

const CardComponent = ({ imgSrc, title, text }) => {

    return (
        <div className="col">
            <div className="card">
                <img src={imgSrc} className="card-img-top" alt={`Image for ${title}`} />
                <div className="card-body">
                    <h5 className="card-title text-center">{title}</h5>
                    <p className="card-text text-center">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;