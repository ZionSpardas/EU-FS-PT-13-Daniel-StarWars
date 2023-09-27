import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faTwitter, faFontAwesome)

export const CardPeople = (props) => {
    const { store, actions } = useContext(Context);
    const [ person, setPerson ] = useState();


    useEffect(() => {
        fetch(props.url)
            .then(res => res.json())
            .then(data =>setPerson(data["result"]))
            .catch(err => console.error(err))
    }, []);

    return (

        <div className="card mx-2 cardsize" >
            <img src="https://picsum.photos/400/200" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.nome}</h5>
                <p className="card-text"><strong>Gender : </strong>{person?.properties.gender}</p>
                <p className="card-text"><strong>Hair Color : </strong>{person?.properties.hair_color}</p>
                <p className="card-text"><strong>Eye Color : </strong>{person?.properties.eye_color}</p>
                <div className="row">
            
                    <div className="col">
                        <Link to={'/char/' + person?.uid}>
                        <a href="#" className="btn btn-primary bg-transparent text-primary">Learn More!</a>
                        </Link>
                    </div>
                    <div className="col">
                        <button className="btn border border-warning text-warning"><FontAwesomeIcon icon="fa-solid fa-heart" /></button>
                    </div>
                </div>
            </div>
        </div>

    )
}