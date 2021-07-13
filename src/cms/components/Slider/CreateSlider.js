import React, { useState, useEffect } from "react";

//Context
import { getAll, post } from "../../../Context/Context"

//History
import { useHistory } from "react-router-dom"


const CreateProduct = ({ setState }) => {

    const [sliderImage, setSliderImage] = useState();

    const history = useHistory();

    useEffect(() => {
        getAll("sliders").then(response => setSliderImage(response));
    }, [])

    const handleChange = (event) => {
        event.persist(); //React skal ikke fjerne det når siden loader

        if (event.target.id === "image") {
            const reader = new FileReader();
            reader.onload = handleImageLoad;
            reader.readAsBinaryString(event.target.files[0]);
        }

        setSliderImage(prevState => ({
            ...prevState,
            [event.target.id]: event.target.value
        }));
    }

    const handleImageLoad = (reader) => {
        setSliderImage(prevState => ({
            ...prevState,
            "image": btoa(reader.target.result)
        }));
    }

    const handleCreate = (event) => {
        event.preventDefault();

        post("sliders", sliderImage).then(response => {
            if (response?.id != null) {
                setState(prevState => ([
                    ...prevState,
                    response
                ]));
                history.push("/cms/slider");
            }
        });
    }



    return (
        <>
            <form>
                <section className="row">
                    <h2>Create Slider Image</h2>
                    <hr />

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="alt">Alternate Name</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <input type="text" required id="alt" className="form-control" placeholder="alt" onChange={handleChange} />
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
                                    sliderImage?.image ? <img alt="" className="w-100 img-fluid" src={`data:image/png;base64,${sliderImage?.image}`} /> : null
                                }
                            </div>
                        </div>
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

export default CreateProduct;