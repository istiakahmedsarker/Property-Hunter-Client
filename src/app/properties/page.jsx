import Link from 'next/link';
import getAllCard from '../../../lib/getAllCard';

export default async function BuildingCard() {
  const cards = await getAllCard();
  console.log(cards);
  return (
    <div>
      <h3>All card is here</h3>
      <h4>{cards.length}</h4>
      <div className="grid grid-cols-3 gap-5">
        {cards.map(card => (
          <div className="px-4 py-5 rounded-lg shadow-lg" key={card.id}>
            <h3 className="font-bold">{card.title}</h3>
            <h3>{card.body}</h3>
            <Link href={`/cards/${card.id}`}>
              <button className="px-4 py-2 bg-blue-300 rounded-lg">
                See Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
