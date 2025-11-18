const api = import.meta.env.VITE_API_URL;
export async function fetchDescription() {
    const res = await fetch(`${api}/description`);
    if (!res.ok) {
      throw new Error("Erreur lors du chargement de la description");
    }
    return res.json();
}

export default fetchDescription;