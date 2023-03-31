'use client'

import styles from "./Talent.module.css";
import AlbumList from "../../components/AlbumList";
import AlbumButton from "../../components/AlbumButton";
import CarouselArtworks from "../../components/Carousel";
import Loading from "../../components/loading";
import useSWR from "swr";

export default function Page({params}) {
  const fetchAlbums = async () => {
    const res = await fetch(
      `http://localhost:8001/api/vtubers-albums/${params.id}?limit=5&offset=0&include_groups=album,single,compilation,appears_on`
    );
    const data = await res.json();
  
    // console.log(data)
  
    return data;
  };

  const { data: albums, error: albumError } = useSWR(
    "albums",
    fetchAlbums
  );

  return (
    <>
      <div className={styles.title}><b>{"Albums"}</b></div>
      <AlbumList
        albums={albums}
      />
      <br/>
      <div className={styles.title}><b>{"Recent Artwork"}</b></div>
      <CarouselArtworks
        id = {params.id}
      />
    </>
  );
}
