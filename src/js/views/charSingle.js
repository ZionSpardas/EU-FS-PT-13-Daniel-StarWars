import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharSingle = props => {
	const { store, actions } = useContext(Context);

	const params = useParams();

	useEffect(() => {
		actions.loadPeopleData(params.uid)
	}, [])
	console.log()
	return (
		<div className="container-fluid mx-auto">
			<div className="row mb-5">
				<div className="col-6">
					<img src="https://picsum.photos/800/600" />
				</div>
				<div className="col-5">
					<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
				</div>
			</div>
			<div className="row border-top border-danger text-danger text-center">
				<div className="col">
					<p>Name</p>
					<p>{store.peopledata.name}</p>
				</div>
				<div className="col">
					<p>Birth Year</p>
					<p>{store.peopledata.birth_year}</p>
				</div>
				<div className="col">
					<p>Gender</p>
					<p>{store.peopledata.gender}</p>
				</div>
				<div className="col">
					<p>Height</p>
					<p>{store.peopledata.height}</p>
				</div>
				<div className="col">
					<p>Skin Color</p>
					<p>{store.peopledata.skin_color}</p>
				</div>
				<div className="col">
					<p>Eye Color</p>
					<p>{store.peopledata.skin_color}</p>
				</div>
			</div>


		</div>
	);
};


