async function GetArt() {
  const res = await fetch("http://localhost:3001/art?id=1");
  const data = await res.json();
  return data;
}

export default async function Page() {
  const data = await GetArt();
  return <>Hello</>;
}
