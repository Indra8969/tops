import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
export default function BasicButtons({route}) {
  const navigate = useNavigate();
  return (
    <Stack spacing={2} direction="row">
      {route == '/' ? (
        <Button variant="contained" onClick={() => navigate("/add")}>
          Add 
        </Button>
      ) : (
        <Button variant="contained" onClick={() => navigate("/")}>
          Home
        </Button>
      )}
    </Stack>
  );
}
