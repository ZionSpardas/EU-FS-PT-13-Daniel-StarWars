import React, { useState, useEffect, useContext, useSyncExternalStore } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faTwitter, faFontAwesome)
export const Navbar = (props) => {
	const { store, actions } = useContext(Context);


	console.log(store.favorites)


	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img className="mx-4" src="https://compass-ssl.xboxlive.com/assets/67/1c/671c739e-386a-4df3-9774-30e9e46eb53a.jpg?n=MSXC-StarWarsTitle-HeroAndImageCard-large-l-794x447-16x9-01.jpg" style={{ width: "200px", height: "100px" }} />
			</Link>
			<div className="btn-group me-5" role="group">
				<button type="button" className="btn btn-primary dropdown-toggle mx-a" data-bs-toggle="dropdown" aria-expanded="false">
					<FontAwesomeIcon icon="fa-solid fa-heart" />  Favorites
				</button>
				<ul class="dropdown-menu">
					{

						store.favorites ? (
							store.favorites.map((data, index) => (
								<li key={index}>
									<Link to={data.start + data.id} className="dropdown-item">
										{data.name}
										<button
											className="mx-3 border border-0 bg-transparent"
											onClick={() => actions.DeleteFavorite(index)}
										>
											<FontAwesomeIcon icon="fa-solid fa-trash-can" />
										</button>
									</Link>
								</li>
							))
						) : (
							<li>teste</li>
						)
					}

				</ul>
			</div>
		</nav>
	);
};
