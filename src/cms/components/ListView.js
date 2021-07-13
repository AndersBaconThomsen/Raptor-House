import React from "react";

//Router
import { Link } from "react-router-dom";

//Icons
import { FaEdit, FaTrash } from "react-icons/fa"

//Context
import { del } from "../../Context/Context";

const ListView = ({items, title, setState}) => {

    const handleDelete = (event) => {
        
        if(window.confirm("Are you Sure??")) {
            const { id } = event.currentTarget;
            del(title, id).then(response => {
                setState(prevState => ([
                    ...prevState.filter(item => item.id !== response.id)
                ]));
            });
        }
    }

    return(
        <>
            <section className="row">
                <h2 className="mb-4">Showing {title}(s)</h2>
                <div className="col-12 px-0 py-5">
                    <Link to={`/cms/create${title}`} className="btn btn-primary float-end">Create</Link>
                </div>
                <table className="table table-striped table-light">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th className="text-end">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items?.map(item => (
                                <tr key={item?.id}>
                                    <td> {item?.id} </td>
                                    <td>
                                        {item?.title != null ? item?.title : ""}
                                        {item?.alt != null ? item?.alt : ""}
                                        {item?.subject != null ? item?.subject : ""}
                                    
                                    </td>
                                    <td className="text-end"> 
                                        <Link className="mx-2" to={`/cms/edit${title.toLowerCase()}/${item?.id}`}><FaEdit  /></Link> 
                                        <Link className="mx-2 text-decoration-none" to="#" onClick={handleDelete} id={item?.id} > <FaTrash/> </Link> </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default  ListView;