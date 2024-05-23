import React from 'react';

export const StatsBlock = ({title, stats}) => {
  return (
    <>
      <div className="modal__container-block-left-headline">{title}</div>
      <ul className="lists">
        {stats.map((stat, index) => (
          <li className="list" key={index}>
            {stat.label}: {stat.value}
          </li>
        ))}
      </ul>
    </>
  );
};
