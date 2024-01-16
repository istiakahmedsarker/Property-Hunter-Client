import Link from 'next/link';
import React from 'react';

const PropertiesCard = ({ card }) => {
  const { title, body } = card;
  return (
    <div className="px-4 py-5 rounded-lg shadow-lg">
      <h3 className="font-bold">{card.title}</h3>
      <h3>{card.body}</h3>
      <Link href={`/cards/${card.id}`}>
        <button className="px-4 py-2 bg-blue-300 rounded-lg">
          See Details
        </button>
      </Link>
    </div>
  );
};

export default PropertiesCard;
