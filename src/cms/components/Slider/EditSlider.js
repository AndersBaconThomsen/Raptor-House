import React, { useState, useEffect } from "react";


import { get, put } from "../../../Context/Context";

//History
import { useHistory } from "react-router-dom"

const EditProduct = ({ sliders, setState, id }) => {

    const [slider, setSlider] = useState();

    const history = useHistory();

    useEffect(() => {
        get("sliders", id).then(response => setSlider(response))
    }, [id])

    const handleChange = (event) => {
        event.persist(); //React skal ikke fjerne det når siden loader

        if (event.target.id === "image") {
            const reader = new FileReader();
            reader.onload = handleImageLoad;
            reader.readAsBinaryString(event.target.files[0]);
        } else {
            setSlider(prevState => ({
                ...prevState,
                [event.target.id]: event.target.value
            }));
        }
    }

    const handleImageLoad = (reader) => {
        setSlider(prevState => ({
            ...prevState,
            "image": btoa(reader.target.result)
        }));
    }

    const handleEdit = (event) => {
        event.preventDefault();
        put("sliders", id, slider).then(response => {
            const copy = [...sliders];
            const indexToEdit = copy.findIndex(x => Number(x.id) === Number(id));
            copy[indexToEdit] = slider;

            setState(copy);
            history.push("/cms/slider");
        })
    }

    return (
        <>
            <form>
                <section className="row">
                    <h2>Edit product</h2>
                    <hr />

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="alt">Altername Name</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <input type="text" required id="alt" defaultValue={slider?.alt} className="form-control" placeholder="Alternate Name" onChange={handleChange} />
                    </div>

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="image">Image</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <div className="row">
                            <div className="col-6">
                                <input type="file" id="image" className="form-control-file" placeholder="Pick Image" onChange={handleChange} />
                            </div>
                            <div className="col-6">
                                {
                                    slider?.image ? <img alt="" className="w-100 img-fluid" src={`data:image/png;base64,${slider?.image}`} /> : null
                                }
                            </div>
                        </div>
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

export default EditProduct;