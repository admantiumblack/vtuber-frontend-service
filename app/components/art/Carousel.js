import styles from "@/app/components/Components.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carouselStyles.css";

import useSWR from "swr";

import { Carousel } from "react-responsive-carousel";

import Loading from "../loading";
import { useState } from "react";

export default function CarouselArtworks({ id }) {
  const [artworkReady, setArtworkReady] = useState(false);

  const fetchArtworks = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_ART_API}/art?id=${id}&limit=10`
    );

    const data = await res.json();

    // console.log(data);

    return data.data;
  };

  const { data: artworks, error: artworkError } = useSWR(
    "artworks",
    fetchArtworks,
    {
      onSuccess: () => {
        setArtworkReady(true);
      },
    }
  );

  // console.log(artworks);

  return (
    <>
      {artworkReady && artworks ? (
        <Carousel infiniteLoop={true} stopOnHover={true}>
          {artworks.post.map((artwork) => (
            <div>
              <img
                src={artwork["file-url"][0]}
                alt={artwork["tag-string-artist"][0]}
              />
            </div>
          ))}
        </Carousel>
      ) : (
        <Loading />
      )}
    </>
  );
}
