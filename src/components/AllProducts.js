import React, { useState } from "react";
import Cards from "./Cards";
import Categories from "./Categories";

function AllProducts() {
  const [data, setdata] = useState(Categories);

  const filterResult=(catItem) =>{
    const result = Categories.filter((curData) =>{
      return curData.category === catItem;
    });
    setdata(result);
  }

  return (
    <div className="md:grid md:grid-cols-5 min-h-[calc(100vh-244px-64px)]">

      {/* sidebar code */}
      <div className="sidebar bg-slate-100 w-full flex flex-col">

        {/* heading */}
        <span className="text-3xl text-center font-bold p-3 w-full">
          Filters
        </span>

        {/* checkboxes here */}
        <fieldset className="m-5">
          <div className="flex items-start items-center mb-4">
            <input
              id="checkbox-2"
              aria-describedby="checkbox-2"
              type="checkbox"
              className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
              onChange={()=>filterResult('Men')}
            />
            <label
              for="checkbox-2"
              className="text-sm ml-3 font-medium text-gray-900"
            >
              Men
            </label>
          </div>
          <div className="flex items-start items-center mb-4">
            <input
              id="checkbox-2"
              aria-describedby="checkbox-2"
              type="checkbox"
              className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
              onChange={()=>filterResult('Women')}
            />
            <label
              for="checkbox-2"
              className="text-sm ml-3 font-medium text-gray-900"
            >
              Women
            </label>
          </div>

          <div className="flex items-start items-center mb-4">
            <input
              id="checkbox-3"
              aria-describedby="checkbox-3"
              type="checkbox"
              className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
              onChange={()=>filterResult('International')}
            />
            <label
              for="checkbox-3"
              className="text-sm ml-3 font-medium text-gray-900"
            >
              International
            </label>
          </div>

          <div className="flex items-start items-center mb-4">
            <input
              id="checkbox-3"
              aria-describedby="checkbox-3"
              type="checkbox"
              className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
              onChange={()=>filterResult('Desi') }
            />
            <label
              for="checkbox-3"
              className="text-sm ml-3 font-medium text-gray-900"
            >
              Desi
            </label>
          </div>

          <div className="flex items-start items-center mb-4">
            <input
              id="checkbox-3"
              aria-describedby="checkbox-3"
              type="checkbox"
              className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
              onChange={()=>{setdata(Categories)}}
              i
            />
            <label
              for="checkbox-3"
              className="text-sm ml-3 font-medium text-gray-900"
            >
              All
            </label>
          </div>
        </fieldset>
      </div>

      {/* Card side */}
      <div className="flex flex-wrap md:col-span-4 justify-center mt-4">
        {data.map((values) => {
          return (
            <>
              <Cards
                key={values.id}
                title={values.title}
                description={values.description}
                link={`/proddesc/${values.id}`}
              />
            </>
          );
        })}
      </div>

    </div>
  );
}

export default AllProducts;
