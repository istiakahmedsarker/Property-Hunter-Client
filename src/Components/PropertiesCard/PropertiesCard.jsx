import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PropertiesCard = ({ card }) => {
  // const { title, body } = card;
  const { propertyTitle, propertyImages } = card;
  return (
    <div className="px-4 py-5 rounded-lg shadow-lg">
      <h3 className="font-bold my-2">{card.propertyTitle}</h3>
      <div className=" w-full">
        {propertyImages && propertyImages.length > 0 && (
          <img
            src={propertyImages[0]}
            alt={propertyTitle}
            className="w-11/12 mx-auto h-56  rounded-lg "
          ></img>
          // <Image
          //   src={propertyImages[0]}
          //   alt={propertyTitle}
          //   width={400}
          //   height={200}
          // />
        )}
      </div>

      <Link href={`/cards/${card.id}`}>
        <button className="px-4 py-2 my-2 bg-blue-300 rounded-lg">
          See Details
        </button>
      </Link>
    </div>
  );
};

export default PropertiesCard;
