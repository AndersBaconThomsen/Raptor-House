import React, { useState, useEffect } from "react";

//Context
import { getAll, post } from "../../../Context/Context";

//History
import { useHistory } from "react-router-dom"


const CreateMessage = ({ setState }) => {

    const [message, setMessage] = useState();

    const history = useHistory();

    useEffect(() => {
        getAll("messages").then(response => setMessage(response));
    }, [])

    const handleChange = (event) => {
        event.persist(); //React skal ikke fjerne det når siden loader

        setMessage(prevState => ({
            ...prevState,
            [event.target.id]: event.target.value
        }));
    }

    const handleCreate = (event) => {
        event.preventDefault();

        post("messages", message).then(response => {
            setState(prevState => ([
                ...prevState,
                response
            ]));
            history.push("/cms/messages");
        });
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
                        <input type="text" required id="name" className="form-control" placeholder="Name" onChange={handleChange} />
                    </div>

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <input type="text" required id="email" className="form-control" placeholder="Email" onChange={handleChange} />
                    </div>

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="subject">Subject</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <input type="text" required id="subject" className="form-control" placeholder="subject" onChange={handleChange} />
                    </div>

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="content">Content</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <textarea required id="content" className="form-control" placeholder="Content" rows="5" onChange={handleChange} ></textarea>
                    </div>

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="subject">Subject</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <input type="date" required id="subject" className="form-control" placeholder="subject" onChange={handleChange} />
                    </div>

                    <div className="d-none d-md-block col-md-4">
                        <label>Create</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <button className="btn btn-primary float-end" onClick={handleCreate} >Create</button>
                    </div>

                </section>
            </form>
        </>
    )
}

export default CreateMessage;