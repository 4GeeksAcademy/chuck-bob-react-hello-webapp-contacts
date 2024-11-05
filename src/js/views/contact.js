import React from "react";
import PropTypes from "prop-types";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Contact = ({ contact }) => (
    <div className="card">
        <div className="card-left">
            <img src={rigoImage} className="card-img-top" alt={`${contact.name}'s image`} />
        </div>
        <div className="card-body">
            <h2 className="card-title">{contact.name}</h2>
            <h5 className="card-address">{contact.address}</h5>
            <h5 className="card-phone">{contact.phone}</h5>
            <h5 className="card-email">{contact.email}</h5>
        </div>
        <div className="card-right">
            <button>Edit</button>
            <button>Delete</button>
        </div>
    </div>
);
