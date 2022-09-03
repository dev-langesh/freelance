import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Form() {
  const [state, setState] = useState({});

  function changeHandler(event) {
    setState((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(state);
  }

  return (
    <form
      onSubmit={submitHandler}
      className="p-10 flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:justify-center sm:space-x-5"
    >
      <TextField
        onChange={changeHandler}
        name="property"
        type="number"
        variant="filled"
        label="Property/Value"
      />
      <TextField
        onChange={changeHandler}
        type="number"
        name="amountOwing"
        variant="filled"
        label="Amount Owing"
      />
      <Button type="submit" variant="outlined">
        See If I Pre Qualify!
      </Button>
    </form>
  );
}
