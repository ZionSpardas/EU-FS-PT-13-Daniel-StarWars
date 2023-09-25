import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faTwitter, faFontAwesome)
export const CardVehicle = (props) => {
    const { store, actions } = useContext(Context);


    return (

        <div className="card mx-2">
            <img src="https://picsum.photos/400/200" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.nome}</h5>
                <p className="card-text"></p>
                <p className="card-text"></p>
                <p className="card-text"></p>
                <div className="row">

                    <div className="col">
                        <a href="#" className="btn btn-primary bg-transparent text-primary">Learn More!</a>
                    </div>
                    <div className="col">
                        <button className="btn border border-warning text-warning"><FontAwesomeIcon icon="fa-solid fa-heart" /></button>
                    </div>
                </div>
            </div>
        </div>

    )
}