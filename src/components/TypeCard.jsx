import React from 'react';

const TypeCard = ({ type }) => {
  return (
    <div
      id={type?.name}
      className={`w-[66px] h-[26px] flex justify-center items-center rounded-[4px] text-[12px] uppercase bg-${type?.name} text-white`}>
      {type?.name}
    </div>
  );
};

export default TypeCard;
