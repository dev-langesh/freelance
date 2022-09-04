import { Title } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Form() {
  const [state, setState] = useState({ property: 0, amountOwing: 0 });
  const [prequalified, setPrequalified] = useState(false);
  const [netb, setNetbr] = useState(0);

  const router = useRouter();

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
    let prequalified;

    setNetbr(netbr);

    if (netbr < 20000 && netbr >= 0) prequalified = false;
    else if (netbr > 20000) prequalified = true;
    else prequalified = false;

    router.push(`prequalify/?qualified=${prequalified}&netbr=${netbr}`);
  }

  return (
    <form
      id="form"
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
