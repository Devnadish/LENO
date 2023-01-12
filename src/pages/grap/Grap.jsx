import React from 'react'
import styled  from "styled-components";
import { getType } from '../../logic/itemControl';
import ItemCard from '../../compnent/card/ItemCard';


function Grap() {
  const data=getType(1)
  return (
    
      <>
        {data.map((el) => {
          return (
            <React.Fragment key={el.id}>
              <ItemCard 
              productId={el.productId}
              Xavatar={el.avatar}
              type={el.type}
              title={el.title}
              description={el.description}
              image={el.image}
              whight={el.whight}
              price={el.price}
              calory={el.calory}
              />
            </React.Fragment>
          );
        })}
      </>
    
  )
}

export default Grap