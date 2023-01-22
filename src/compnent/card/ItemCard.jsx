import React,{useState} from 'react';

import Card from '@mui/material/Card';



import ItemCardHeader from './ItemCardHeader';
import ItemCardMedia from './ItemCardMedia';
import ItemCardContent from './ItemCardContent';
import ItemCardAction from './ItemCardAction';
import ItemCardTermsAndDetail from './ItemCardTermsAndDetail';


export default function ItemCard({productId,Xavatar,type,description,image,title,whight,price,calory,notes,deleveryTime,bigQtyRoles,terms}) {
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] =  useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleonload=()=>{
    setLoading(true)
  }

  return (
    <Card sx={{ maxWidth: 345, minWidth: 345 }}>
    
    <ItemCardHeader Xavatar={Xavatar} whight={whight} type={type} />
    <ItemCardMedia  productId={productId} image={image} handleonload={handleonload} loading={loading} />
    <ItemCardContent title={title} expand={expanded} handleExpandClick={handleExpandClick}/>
    <ItemCardAction price={price} />
    <ItemCardTermsAndDetail expanded={expanded}  calory={calory}
    notes={notes}
    deleveryTime={deleveryTime}
    bigQtyRoles={bigQtyRoles}
    terms={terms}  />
      

     
    </Card>
  );
}