import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';


function ItemCardTermsAndDetail({expanded,calory,notes,deleveryTime,bigQtyRoles,terms}) {
  return (
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

  )
}

export default ItemCardTermsAndDetail