import React from 'react';

const ListAppear = ({count, next}) => {
  const renderAppear = () => {
    const end = new URLSearchParams(next.split('?')[1]).get('offset');
    const itemAppear = 20;
    const start = Number(end) - itemAppear + 1;

    return `${start} - ${end}`;
  };

  return (
    <div className="column is-6 has-text-right">
      Menampilkan
      <strong> {renderAppear()} </strong>
      dari
      <strong> {count}</strong>
    </div>
  );
};

export default ListAppear;