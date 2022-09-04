import { Title } from "@mui/icons-material";
import { Button, Dialog, DialogTitle, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Form() {
  const [state, setState] = useState({ property: 0, amountOwing: 0 });
  const [dialog, setDialog] = useState(false);
  const [prequalified, setPrequalified] = useState(false);

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
    const { property, amountOwing } = state;

    let c = property * 0.75 - amountOwing;

    let estab;
    //establishment costs need to be a min of 2500
    if (c * 0.04 < "2500") {
      estab = 2500;
    } else {
      estab = 0.04 * c;
    }

    let netbr = c - c * 0.0195 * 1 - estab - 3300 - 0.01 * c;

    if (netbr < 20000 && netbr >= 0) setPrequalified(false);
    else if (netbr > 20000) setPrequalified(true);
    else setPrequalified(false);

    setDialog(true);
  }

  return (
    <form
      id="form"
      onSubmit={submitHandler}
      className="p-10 flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:justify-center sm:space-x-5"
    >
      <Dialog open={dialog} onClose={() => setDialog(false)}>
        <DialogTitle>Status</DialogTitle>

        <h1 className="p-4 text-center bg-indigo-700 text-white">
          {prequalified
            ? "Congratulations You are pre-qualified"
            : "You are not pre-Qualified"}
        </h1>
      </Dialog>

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
