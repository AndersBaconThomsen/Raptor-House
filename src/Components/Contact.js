import React, { useState } from "react";
import { Link } from "react-router-dom";

import { post } from "../Context/Context"

const Contact = () => {

    const [messages, setMessages] = useState();

    const handleChange = (event) => {
        event.persist();

        setMessages(prevState => ({
            ...prevState,
            [event.target.name] : event.target.value,
            "date" : new Date()
        }))

    }

    const handleSend = (event) => {
        event.preventDefault();

        post("messages", messages).then(response => {
            setMessages({
                name : "",
                email : "",
                subject : "",
                content : ""
            })
            alert("Din besked er blevet sendt")
        });
    }


    return(
        <>
            <section className="p-3 bg-white">
                <h2 style={{ color: "maroon"}}>Kontakt</h2>
                
                <article className="row h-100">
                    <section className="col-md-6">
                        <p className="p-2 text-white" style={{ background:"maroon", height: "39%", marginBottom: "1%"}}>
                            <h4>Raptor House</h4>
                        </p>
                        <p className="p-2 text-white" style={{ background:"maroon", height: "18%", marginBottom: "1%", marginTop: "1%"}}>
                            <Link to="/Map" className="text-decoration-none text-white">Vis på kort</Link>
                        </p>
                        <p className="p-2 text-white" style={{ background:"maroon", height: "39%", marginTop: "1%"}}>
                            <h4>Åbningstider</h4>
                        </p>
                    </section>
                    <section className="col-md-6 text-white">
                        <div className="p-3" style={{ background: "maroon"}}>
                            <h5>Send os en mail:</h5>
                            <table className="w-100">
                                <tbody>
                                    <tr>
                                        <td className="py-2">Navn:</td>
                                        <td className="py-2">
                                            <input type="text" value={messages?.name} required placeholder="Navn" name="name" className="w-100" onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2">E-mail:</td>
                                        <td className="py-2">
                                        <input type="email" value={messages?.email} required placeholder="Email" name="email" className="w-100" onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2">Emne:</td>
                                        <td className="py-2">
                                            <input type="text" value={messages?.subject} required placeholder="Emne" name="subject" className="w-100" onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2" colSpan="2">
                                            <textarea required name="content" value={messages?.content} className="w-100" rows="6" onChange={handleChange} ></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2" colSpan="2">
                                            <button onClick={handleSend}>Send</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </article>
            </section>
        </>
    )
}

export default Contact