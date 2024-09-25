import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BasicButtons from "./Btn.jsx";

export default function BasicTable() {
  const [rows, setRows] = React.useState([]);

  const handleDelete = (id) => {
    fetch("http://localhost:4001/data/" + id, {
      method: "delete",
    }).then(() => {
      fetch("http://localhost:4001/data")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setRows(data);
        });
    });
  };

  React.useEffect(() => {
    fetch("http://localhost:4001/data")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setRows(data);
      });
  }, []);

  return (
    <>
      <BasicButtons route={"/"} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.des}</TableCell>
                <TableCell align="right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    onClick={() => handleDelete(row.id)}
                  >
                    <path
                      fill="currentColor"
                      d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"
                    />
                  </svg>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
