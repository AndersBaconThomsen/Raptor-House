import React from "react";

const Slider = ({ slider }) => {

    // const [slider, setSlider] = useState();

    // useEffect(() => {
    //     getAll("sliders").then(response => setSlider(response));
    // })

    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {
                        slider?.map((ele,index) => (
                            <div key={ele?.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                <img src={`data:image/png;base64,${ele?.image}`} className="d-block w-100" alt={ele?.alt} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Slider