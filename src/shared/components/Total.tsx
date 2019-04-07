import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Total(props: { total: number }) {
  return (
    <Typography variant="h6" color="inherit" gutterBottom>
      Total: ${props.total.toFixed(2)}
    </Typography>
  );
}
