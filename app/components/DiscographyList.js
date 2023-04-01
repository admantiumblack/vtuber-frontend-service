import useSWR from "swr";
import AlbumList from "./AlbumList";

export default function DiscographyList({ vtuberId }) {
  const fetchAlbums = async () => {
    const res = await fetch(
      `http://localhost:8001/api/vtubers-albums/${vtuberId}?limit=5&offset=0&include_groups=album,single,compilation,appears_on`
    );
    const data = await res.json();
    // console.log(data)
    return data;
  };

  const { data: albums, error: albumError } = useSWR("albums", fetchAlbums);
  return (
    <>
      <div>
        <AlbumList albums={albums} />
      </div>
    </>
  );
}
