export default async function getAllCard() {
  try {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=6',
      {
        next: {
          revalidate: 10,
        },
      }
    );

    return res.json();
  } catch (error) {
    console.error('Something went wrong for fetching card:', error.message);
    throw new Error('Something went wrong');
  }
}
