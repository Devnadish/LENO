import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Chip } from '@mui/material';
import { RiShoppingBasketFill } from "react-icons/ri";
import { Link } from 'react-router-dom';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  backgroundColor:"#93c93d83",
 
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ItemCard({productId,Xavatar,type,description,image,title,whight,price,calory,notes,deleveryTime,bigQtyRoles,terms}) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, minWidth: 345 }}>
      <CardHeader
        avatar={<Avatar src={Xavatar} aria-label="recipe" />}
       
        title={
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                flexDirection: "row",
                gap:1,
                width:"100%"
              }}
            >
              <Typography
                textAlign={"right"}
                sx={{ fontFamily: "NX", lineHeight: 1.5 }}
              >
                {whight}
              </Typography>
              <Chip
                size="small"
                variant="outlined"
                sx={{ color:"#94c93d"}}
                label={
                  <Typography
                    textAlign={"right"}
                    sx={{ fontFamily: "NX", lineHeight: 1.5,fontWeight:"bold" }}
                  >
                    {type}
                  </Typography>
                }
              />
            </Box>
          </>
        }
      />
      <Link to={`/order/${productId}`} >
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      </Link>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
       
      
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{  lineHeight: 1.5, fontFamily: "NX" }}
        >
          {title}
        </Typography>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>


      </CardContent>

      <CardActions disableSpacing>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <IconButton aria-label="add to favorites">
            <RiShoppingBasketFill />
          </IconButton>
          <Typography
          variant="h6"
          color="success.main"
          sx={{
            lineHeight: 1.5,
            fontFamily: "CB",
            // backgroundColor: "antiquewhite",
            p: 1,
            border:"1px solid #E7EBF0",
            borderRadius: 2,
          }}
        >
          <span>السعر </span> {price} <span>ر.س </span>
        </Typography>
        </Box>
        
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography  sx={{fontFamily: "NX",}} paragraph>القيمة الغذائية</Typography>
          <Typography sx={{fontFamily: "NX",textAlign:"right"}} paragraph>
          {calory}
          </Typography>
          <Typography paragraph>
           {notes}
          </Typography>
          <Typography paragraph>
          {deleveryTime}
          </Typography>
          <Typography>
           {bigQtyRoles}
          </Typography>
          <Typography>
           {terms}
          </Typography>
          
        </CardContent>


      </Collapse>
    </Card>
  );
}