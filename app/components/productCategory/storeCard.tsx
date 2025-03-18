import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

interface StoreCardProps {
   name: string;
   image: string;
   description: string;
}
const StoreCard: React.FC<StoreCardProps> = ({ name, image, description }) => {
   return (
      <Card
         sx={{
            maxWidth: 345,
            background: "#526D82",
         }}
      >
         <CardActionArea>
            <CardMedia
               component="img"
               image={image || "images/default.png"}
               alt="green iguana"
               className="h-40 object-cover"
            />
            <CardContent className="h-40 text-[#F3EEEA] ">
               <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
               >
                  {name}
               </Typography>
               <Typography
                  variant="body2"
                  className="text-[#F3EEEA]"
               >
                  {description}
               </Typography>
            </CardContent>
         </CardActionArea>
      </Card>
   );
};
export default StoreCard;
