import React from 'react';

const TypeCard = ({ type }) => {
  return (
    <div
      id={type?.name}
      className={`w-[66px] lg:w-[84px] h-[26px] lg:h-[34px] flex justify-center items-center rounded-[4px] text-[12px] lg:text-[13px] uppercase bg-${type?.name} text-white cursor-pointer hover:opacity-80`}>
      {type?.name}
    </div>
  );
};

export default TypeCard;
