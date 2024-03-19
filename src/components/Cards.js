import React from "react";

const Cards = ({ data }) => {
  return (
    <>
      {data.map((element, key) => {
        return (
          /// card
          <>
            <div className="w-[22rem] border-[1px] mb-4 rounded-md hover:shadow-xl duration-200" key={key}>
              <div className="flex justify-center items-center">
                <img
                  src={element.imgdata}
                  alt=""
                  className="w-[20rem] h-[15rem] rounded-md mt-2"
                />
              </div>
              <div>
                <div className="flex  justify-between items-center px-3 py-1">
                  <h3 className="text-[1.2rem] font-semibold">
                    {element.rname}
                  </h3>
                  <span className="bg-green-600 px-1 rounded-md text-white">
                    {element.rating} &nbsp;⭐
                  </span>
                </div>
                <div className="flex justify-between items-center px-3 py-1 text-gray-400">
                  <h5>{element.address}</h5>
                  <span>{element.price}</span>
                </div>
              </div>
              <hr />

              <div className="flex justify-between items-center px-2 py-2">
                <img src={element.arrimg} alt="" className="w-[1.3rem]" />
                <p>{element.somedata}</p>
                <img src={element.delimg} alt="" className="w-[2rem]" />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Cards;
