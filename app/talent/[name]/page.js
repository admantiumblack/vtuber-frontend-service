async function fetchVideos(vtuber_id) {}

async function fetchImages(vtuber_id) {}

async function fetchAlbums(vtuber_id) {
  // const res = await fetch(
  //   `http://localhost:8002/api/vtubers-albums/${vtuber_id}`
  // );
  // const data = await res.json();
  // // console.log(data);
  // return data;
}

export default async function Page() {
  const videos = await fetchAlbums();
  return <></>;
}
