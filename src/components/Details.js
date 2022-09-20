import React from "react";
import { useParams } from "react-router-dom";

const Details = (props) => {
  console.log(props);
  const { id } = useParams();
  const listing = props.listings.find((l) => l.Name == id);
  console.log({ id });

  return (
    <div
      style={{
        marginTop: "20px",
        color: "black",
        border: "2px solid black",
        marginLeft: "auto",
        marginRight: "auto",
        width: "50vw",
        textAlign: "center",
      }}
    >
      <h1>{listing.Name}</h1>
      <h3>{listing.Address}</h3>
      <h3>{listing.Hours}</h3>
      <p>{listing.Description}</p>
    </div>
  );
};

export default Details;
