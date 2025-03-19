import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { BasicSelectProps } from "../lib/definition";

const BasicSelect: React.FC<BasicSelectProps> = ({
   label,
   value,
   options,
   onChange,
}) => {
   const handleChange = (event: SelectChangeEvent) => {
      onChange(event.target.value as string);
   };
   return (
      <Box sx={{ minWidth: 120 }}>
         <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={String(value)}
               label={label}
               onChange={handleChange}
            >
               {options.map((option) => {
                  return (
                     <MenuItem
                        key={option.value}
                        value={option.value}
                     >
                        {option.label}
                     </MenuItem>
                  );
               })}
            </Select>
         </FormControl>
      </Box>
   );
};
export default BasicSelect;
