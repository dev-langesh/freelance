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
    console.log(state);

    let c = property * 0.75 - amountOwing;

    let estab;
    //establishment costs need to be a min of 2500
    if (c * 0.04 < "2500") {
      estab = 2500;
    } else {
      estab = 0.04 * c;
    }

    let netbr = c - c * 0.0195 * 1 - estab - 3300 - 0.01 * c;

    console.log(netbr);

    if (netbr < 20000 && netbr >= 0) setPrequalified(false);
    else if (netbr > 20000) setPrequalified(true);
    else setPrequalified(false);

    console.log(prequalified);
    setDialog(true);
  }

  return (
    <form
      onSubmit={submitHandler}
      className="p-10 flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:justify-center sm:space-x-5"
    >
      <Dialog open={dialog} onClose={() => setDialog(false)}>
        <DialogTitle>Pre Qualify Verification</DialogTitle>

        {prequalified ? (
          <h1>Congratulations You are pre-qualified</h1>
        ) : (
          <h2>You are not pre-Qualified</h2>
        )}
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
