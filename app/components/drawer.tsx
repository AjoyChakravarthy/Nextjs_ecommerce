import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import { Button } from "@mui/material";

export default function MenuDrawer() {
   const [open, setOpen] = React.useState(false);

   const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
   };

   const DrawerList = (
      <Box
         sx={{ width: 250, padding: 2 }}
         role="presentation"
         onClick={toggleDrawer(false)}
      >
         <List>
            {["NEW RELEASE", "MEN", "WOMEN", "ACCESSORIES"].map((text) => (
               <ListItem
                  key={text}
                  disablePadding
               >
                  <ListItemButton>
                     <ListItemText primary={text} />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
         <Divider />
         <List>
            {["WishList", "Shop Outlet", "Cart"].map((text) => (
               <ListItem
                  key={text}
                  disablePadding
               >
                  <ListItemButton>
                     <ListItemText primary={text} />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
         <Button
            variant="outlined"
            color="inherit"
            fullWidth
            onClick={toggleDrawer(false)}
         >
            Close
         </Button>
      </Box>
   );

   return (
      <>
         <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
         >
            <MenuOpenRoundedIcon sx={{ fontSize: "24px" }} />
         </IconButton>

         {/* Drawer */}
         <Drawer
            open={open}
            onClose={toggleDrawer(false)}
         >
            {DrawerList}
         </Drawer>
      </>
   );
}
