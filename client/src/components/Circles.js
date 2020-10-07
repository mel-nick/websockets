import React from 'react';
import CircleItem from './CircleItem';

const Circles = ({ circles }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      {circles &&
        circles.map((user, i) => {
          return <CircleItem key={i} {...user} />;
        })}
    </div>
  );
};

export default Circles;
