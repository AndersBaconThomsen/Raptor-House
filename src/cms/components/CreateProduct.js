import React, { useState, useEffect } from "react";

//Context
import { getAll, post } from "../../Context/Context"

//History
import { useHistory } from "react-router-dom"


const CreateProduct = ({ setState }) => {

    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();

    const history = useHistory();

    useEffect(() => {
        getAll("categories").then(response => setCategories(response));
    }, [])

    const handleChange = (event) => {
        event.persist(); //React skal ikke fjerne det når siden loader

        if (event.target.id === "image") {
            const reader = new FileReader();
            reader.onload = handleImageLoad;
            reader.readAsBinaryString(event.target.files[0]);
        }

        setProducts(prevState => ({
            ...prevState,
            [event.target.id] : event.target.value
        }));
    }

    const handleImageLoad = (reader) => {
        setProducts(prevState => ({
            ...prevState,
            "image": btoa(reader.target.result)
        }));
    }

    const handleCreate = (event) => {
        event.preventDefault();

        post("products", products).then(response => {
            if (response?.id != null) {
                setState(prevState => ([
                    ...prevState,
                    response
                ]));
                history.push("/cms/products");
            }
        });
    }



    return (
        <>
            <form>
                <section className="row">
                    <h2>Create product</h2>
                    <hr />

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <input type="text" required id="title" className="form-control" placeholder="Title" onChange={handleChange} />
                    </div>

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="content">Content</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <textarea required id="content" className="form-control" placeholder="Content" rows="5" onChange={handleChange} ></textarea>
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
                                    products?.image ? <img alt="" className="w-100 img-fluid" src={`data:image/png;base64,${products?.image}`} /> : null
                                }
                            </div>
                        </div>
                    </div>

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="weight">Weight</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <input type="number" step=".01" required id="weight" className="form-control" placeholder="Weight" onChange={handleChange} />
                    </div>

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="price">Price</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <input type="number" step=".01" required id="price" className="form-control" placeholder="Price" onChange={handleChange} />
                    </div>

                    <div className="d-none d-md-block col-md-4">
                        <label htmlFor="categoryId">Category</label>
                    </div>
                    <div className="col-md-8 mb-2">
                        <select id="categoryId" required className="form-control" onChange={handleChange} >
                            <option value="">Pick Category</option>
                            {
                                categories?.map(category => (
                                    <option key={category?.id} value={category.id}>{category?.title}</option>
                                ))
                            }
                        </select>
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