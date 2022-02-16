import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

function createData(email, Name, id, avatar) {
  return { email, Name, id, avatar };
}

export default function BasicTable() {
  // const data = useSelector((state) => state.TableData.data);
  const [user, setUser] = React.useState();
  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("names")));
  }, [user]);

  // console.log(data);
  const onDelete = (id) => {
    const updateUser = user.filter((user) => {
      return user.id != id;
    });

    if (updateUser) localStorage.setItem("names", JSON.stringify(updateUser));
  };
  const onEdit = (id) => {
    alert(`${id} not edited due to time Short`);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell align="right">first_name</TableCell>

            <TableCell align="right">last_name&nbsp;</TableCell>
            <TableCell align="right"> avatar&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user ? (
            <>
              {" "}
              {user.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {user.email}
                  </TableCell>
                  <TableCell align="right">{user.first_name}</TableCell>
                  <TableCell align="right">{user.last_name}</TableCell>
                  <TableCell align="right">{user.avatar}</TableCell>
                  <TableCell align="right">
                    <button onClick={() => onEdit(user.id)}>Edit</button>&nbsp;
                    <button onClick={() => onDelete(user.id)}>Delete</button>
                  </TableCell>
                </TableRow>
              ))}
            </>
          ) : (
            <>User not persent</>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
