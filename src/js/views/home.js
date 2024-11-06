import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Contact } from "./contact";
import { Submit } from "./submit";
import { Link, useNavigate } from "react-router-dom";



export const Home = () => {
    const { store, actions } = useContext(Context);
    const [id, setId] = useState(0)

    // Load contacts when the component mounts
    useEffect(() => {
        actions.loadContacts();
    }, []);

    return (
        <div> {/* // <!-- Modal --> */}

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
                            <button type="button" className="btn btn-primary" onClick={() => actions.handleDelete(id)} data-bs-dismiss="modal" >Delete</button>
                        </div>
                    </div>
                </div>
            </div>

            <Link to={"/submit"} > <button className="btn-secondary other-button"> add new </button>

            </Link>


            <div id="contactList">
                {store.contactList.map((contact) => (
                    <Contact key={contact.id} contact={contact} setId={setId} />
                ))}



            </div>
        </div>
    );
};
