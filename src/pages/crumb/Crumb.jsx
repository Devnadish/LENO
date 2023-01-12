import React from 'react'
import { getType } from '../../logic/itemControl';
import ItemCard from '../../compnent/card/ItemCard';


function Crumb() {
  const data=getType(2)
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

export default Crumb