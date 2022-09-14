import React from "react";

const LaunchCard = (props) => {
  const launchDate = new Date(props.date_local).getFullYear();

  return (
    <div className="flex flex-row my-4" key={props.id}>
      <div className="mr-5 w-1/3 flex justify-center text-center items-center">
        <img
          src={props.patch_image}
          style={{ width: "13rem" }}
          alt={props.name}
        />
      </div>
      <div className="mx-6 my-auto p-2 w-full">
        <h4 className="font-bold text-2xl my-4">
          <span>Flight {props.flight_number}: </span>
          <span>Mission {props.name} </span>
          <span>({launchDate})</span>
        </h4>
        <p className="text-sm">Details: {props.details}</p>
      </div>
    </div>
  );
};

export default LaunchCard;
