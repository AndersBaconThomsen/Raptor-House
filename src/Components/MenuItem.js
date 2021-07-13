import React, { useEffect, useState } from "react";
import { getAll } from "../Context/Context";

const MenuItem = (props) => {
  const id = props.match.params.id;
  const [products, setProducts] = useState();

  useEffect(() => {
    getAll("products").then((response) =>
      setProducts(
        response.filter((ele) => Number(ele.categoryId) === Number(id))
      )
    );
  }, [id]);

  return (
    <>
      <div className="row">
        {
          products?.map((ele) => (
            <section key={ele?.id } className="col-md-6">
              <div className="p-3 my-3" style={{ background: "#fff" }}>
                <article className="row mb-2" style={{ borderBottom: "2px solid maroon" }}>
                  <div className="col-md-7">
                    <h4>{ele?.title} </h4>
                  </div>
                  <div className="col-md-2">
                    <h5> {ele?.weight + "g"} </h5>
                  </div>
                  <div className="col-md-3">
                    <h4 className="text-end"> {ele?.price + ",-"} </h4>
                  </div>
                </article>
                <article className="row">
                  <div className="col-md-7">{ele?.content}</div>
                  <div className="col-md-5">
                    <img className="img-fluid" alt={ele?.title} src={`data:image/png;base64,${ele?.image}`} />
                  </div>
                </article>
              </div>
            </section>
          ))
        }
      </div>
    </>
  );
};

export default MenuItem;
