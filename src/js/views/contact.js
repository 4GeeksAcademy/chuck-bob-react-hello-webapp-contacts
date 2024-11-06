import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Edit } from "./edit";
import { Link, useNavigate } from "react-router-dom";





export const Contact = ({ contact, setId }) => {
    const [deleteUser, setDeleteUser] = useState(0)
    const [editUSer, setEditUser] = useState(0)
    const { store, actions } = useContext(Context);
    
    return (
<div>
        


            <div className="contact d-flex">
                <div className="card-left">
                    <img src={rigoImage} className="card-img-top img-100" alt={`${contact.name}'s image`} />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{contact.name}</h2>
                    <h5 className="card-address">Address: {contact.address}</h5>
                    <h5 className="card-phone">Phone: {contact.phone}</h5>
                    <h5 className="card-email">Email: {contact.email}</h5>
                </div>
                <div className="card-right">

                    <Link to={`/edit/${contact.id}`}>
                        <button>Edit</button>

                    </Link>

                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" 
                    onClick={() => setId(contact.id)}>
                        Delete Entry
                    </button>
                </div>
            </div >
        </div >
    );
}