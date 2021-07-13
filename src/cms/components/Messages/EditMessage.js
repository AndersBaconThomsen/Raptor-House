import React, { useState, useEffect } from "react";


import { get, put } from "../../../Context/Context";

//History
import { useHistory } from "react-router-dom"

const EditMessage = ({ messages, setState, id }) => {

    const [message, setMessage] = useState();

    const history = useHistory();

    useEffect(() => {
        get("messages", id).then(response => setMessage(response))
    }, [id])

    const handleChange = (event) => {
        event.persist(); //React skal ikke fjerne det når siden loader

        setMessage(prevState => ({
            ...prevState,
            [event.target.id]: event.target.value
        }));

    }

    const handleEdit = (event) => {
        event.preventDefault();
        put("messages", id, message).then(response => {
            const copy = [...messages];
            const indexToEdit = copy.findIndex(x => Number(x.id) === Number(id));
            copy[indexToEdit] = message;

            setState(copy);
            history.push("/cms/messages");
        })
    }

    return (
        <>
            <form>
                <section className="row">
                    <h2>Create product</h2>
                    <hr />

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <input type="text" required id="name" defaultValue={message?.name} className="form-control" placeholder="Name" onChange={handleChange} />
                    </div>

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <input type="text" required id="email" defaultValue={message?.email} className="form-control" placeholder="Email" onChange={handleChange} />
                    </div>

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="subject">Subject</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <input type="text" required id="subject" defaultValue={message?.subject} className="form-control" placeholder="subject" onChange={handleChange} />
                    </div>

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="content">Content</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <textarea required id="content" defaultValue={message?.content} className="form-control" placeholder="Content" rows="5" onChange={handleChange} ></textarea>
                    </div>

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="date">Date</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <input type="text" required id="date" defaultValue={message?.date} className="form-control" placeholder="date" onChange={handleChange} />
                    </div>

                    <div className="d-none d-md-block col-md-4">
                        <label>Save</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <button className="btn btn-primary float-end" onClick={handleEdit} >Save</button>
                    </div>

                </section>
            </form>
        </>
    )
}

export default EditMessage;