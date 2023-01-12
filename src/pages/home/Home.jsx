import React from 'react'
import ItemCard from '../../compnent/card/ItemCard';
import data from "../../data/all.json"


function Home() {
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
  );
}

export default Home