import React from 'react';

export default function Photo({ data }) {
  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div className='Photoimg'>
      <img src={data.coverImg} className='img' alt={data.title} />
      <p className='title'>{data.title}</p>
      <p className='price'>Rs. {data.price}</p>
      <p className='description'>{data.description}</p>
      <button className='btn'>Buy</button>
    </div>
    
  );
}
