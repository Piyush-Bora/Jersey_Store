import React, { useState } from "react";
import Cards from "./Cards";
import Categories from "./Categories";

function AllProducts() {
  const [data, setdata] = useState(Categories);

  return (
    <div className="grid grid-cols-2">
      <div className="sidebar bg-slate-100"></div>
      <div className="flex flex-wrap">
        {data.map((values) => {
          return (
            <>
              <Cards
                key={values.id}
                title={values.title}
                description={values.description}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default AllProducts;
