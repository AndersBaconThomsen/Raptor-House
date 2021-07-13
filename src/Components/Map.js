import React from "react"

const Map = () => {
    return(
        <> 
            <article className="row" style={{minHeight: "600px"}}>
                <section className="col-12">    
                    <div className="bg-white p-3 h-100">
                        <h2 style={{ color: "maroon"}}>Her finder du os</h2>
                        <div className="h-75 p-3" style={{background: "maroon"}}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1103.6100465854001!2d10.904287072137107!3d56.41226874434477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464dd5c6c2d63e9f%3A0x6150d76e9ea1f9a8!2sHavnevej%20110%2C%208500%20Gren%C3%A5!5e0!3m2!1sda!2sdk!4v1616501330338!5m2!1sda!2sdk" className="w-100 h-100" title="Map" tabIndex="0" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </section>
            </article>
        </> 
    )
}

export default  Map;