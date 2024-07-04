export const detailFetch = async (id: string) => {
  const apiUrl = "http://localhost:3000";
  const res = await fetch(`${apiUrl}/api/pokemons/${id}`);
  return res.json();
};
