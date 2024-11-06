import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Edit } from "./edit";
import { Link, useNavigate } from "react-router-dom";





export const Contact = ({ contact }) => {
    const [deleteUser, setDeleteUser] = useState(0)
    const [editUSer, setEditUser] = useState(0)
    const { store, actions } = useContext(Context);
    return (

        // <!-- Modal -->
        <div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete this entry?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => actions.handleDelete(contact.id)} data-bs-dismiss="modal" >Delete</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="card">
                <div className="card-left">
                    <img src={rigoImage} className="card-img-top img-100" alt={`${contact.name}'s image`} />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{contact.name}</h2>
                    <h5 className="card-address">{contact.address}</h5>
                    <h5 className="card-phone">{contact.phone}</h5>
                    <h5 className="card-email">{contact.email}</h5>
                </div>
                <div className="card-right">

                    <Link to={`/edit/${contact.id}`}>
                        <button>Edit</button>

                    </Link>

                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setDeleteUser(contact.id)}>
                        Delete Entry
                    </button>
                </div>
            </div >
        </div >
    );
}