import { useState } from "react";
import * as React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import cookie from "cookie";

const Home = (props) => {
  const { listings, user, removeListing } = props;
  console.log("props", props);
  let cookies = cookie.parse(document.cookie);
  let loggedInBool = cookies.loggedIn;

  if (!props.listings) {
    return "loading";
  }

  return (
    <>
      {user && (
        <div className="userTable">Welcome {user.userName}</div>
      )}

      <div className="table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className="tableHeader" color="secondary">
                <TableCell align="left">Business Name</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="left">Hours</TableCell>
                <TableCell align="left">Address</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listings.map((list, idx) => (
                <TableRow
                  key={list.Date}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">
                    <Link to={`/Details/${list.Name}`}>{list.Name}</Link>
                  </TableCell>
                  <TableCell align="right">{list.Description}</TableCell>
                  <TableCell align="right">{list.Hours}</TableCell>
                  <TableCell align="right">{list.Address}</TableCell>

                  {loggedInBool && (
                    <TableCell align="center">
                      <DeleteIcon
                        onClick={() => removeListing(idx)}
                        sx={{ cursor: "pointer" }}
                      ></DeleteIcon>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Home;
