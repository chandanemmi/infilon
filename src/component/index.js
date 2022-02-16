import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { dataStore } from "../action";
import Table from "./Table";
import Container from "@mui/material/Container";
export default function Index() {
  const [users, setUsers] = useState([]);
  const fetchData = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);
  dispatch(dataStore(users.data));
  if (users.data) localStorage.setItem("names", JSON.stringify(users.data));

  return (
    <>
      <Container maxWidth="md" className="Container">
        <h1> Welcome to Infilon</h1>
        <Table />
      </Container>
    </>
  );
}
