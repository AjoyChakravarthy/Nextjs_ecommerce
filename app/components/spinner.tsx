import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularSpinner() {
   return (
      <Box sx={{ display: "flex" }}>
         <CircularProgress />
      </Box>
   );
}
