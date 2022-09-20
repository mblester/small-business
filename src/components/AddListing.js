import React, { useState } from "react";
import { Button, TextField, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddListing = (props) => {
  const { user, addListing, listings } = props;
  const [listingInfo, setListingInfo] = useState({
    Name: "",
    Description: "",
    Hours: "",
    Address: "",
  });

  const navigate = useNavigate();

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setListingInfo((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const createNewListing = (e) => {
    e.preventDefault();
    let listObj = {
      id: listings.length + 1,
      Name: listingInfo.Name,
      Description: listingInfo.Description,
      Hours: listingInfo.Hours,
      Address: listingInfo.Address,
    };
    addListing(listObj);
    navigate("/");
  };

  return (
    <>
      {user && (
        <div className="userTable">Welcome {user.userName}</div>
      )}
      <Container maxWidth="sm">
        <form className="listing-form" onSubmit={createNewListing}>
          <TextField
            required
            fullWidth
            margin="normal"
            onChange={handleTextChange}
            value={listingInfo.Name}
            name="Name"
            label="Name"
            type="text"
            variant="standard"
          />
          <TextField
            required
            fullWidth
            margin="normal"
            onChange={handleTextChange}
            value={listingInfo.Description}
            name="Description"
            label="Description"
            type="text"
            variant="standard"
          />
          <TextField
            required
            fullWidth
            margin="normal"
            onChange={handleTextChange}
            value={listingInfo.Hours}
            name="Hours"
            label="Hours"
            type="text"
            variant="standard"
          />
          <TextField
            required
            fullWidth
            margin="normal"
            onChange={handleTextChange}
            value={listingInfo.Address}
            name="Address"
            label="Address"
            type="text"
            variant="standard"
          />

          <Button
            type="submit"
            className="listing-button"
            variant="contained"
            color="primary"
            sx={{ backgroundColor: "green", width: "10vw", margin: "10px" }}
          >
            Save Listing
          </Button>
        </form>
      </Container>
    </>
  );
};

export default AddListing;
