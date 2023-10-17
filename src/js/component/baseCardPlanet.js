import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faTwitter, faFontAwesome)

export const CardPlanet = (props) => {
    const { store, actions } = useContext(Context);
    const [planet, setPlanet] = useState();


    useEffect(() => {
        fetch(props.url)
            .then(res => res.json())
            .then(data => setPlanet(data["result"]))
            .catch(err => console.error(err))
    }, []);

    return (

        <div className="card mx-2 cardsize">
            <img src="https://picsum.photos/400/200" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title cardsize">{props.nome}</h5>
                <p className="card-text"><strong>Population : </strong>{planet?.properties.population}</p>
                <p className="card-text"><strong>Terrain : </strong>{planet?.properties.terrain}</p>
                <div className="row">

                    <div className="col">
                        <Link to={'/plan/' + planet?.uid}>
                            <a href="#" className="btn btn-primary bg-transparent text-primary">Learn More!</a>
                        </Link>
                    </div>
                    <div className="col">
                    <button className="btn border border-warning text-warning" onClick={() => actions.Favorites(props.nome, "planet")}><FontAwesomeIcon icon="fa-solid fa-heart" /></button>
                    </div>
                </div>
            </div>
        </div>

    )
}