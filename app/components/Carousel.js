import React, { Component } from "react";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Loading from "./loading";
import useSWR from "swr";

export default function CarouselArtworks({ id }) {
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
    fetchArtworks
  );

  // console.log(artworks);

  return (
    <div>
      <Carousel>
        {artworks ? (
          artworks.post.map((item) => (
            <div>
              <img
                src={item["file-url"][0]}
                alt={item["tag-string-artist"][0]}
              />
            </div>
          ))
        ) : (
          <Loading />
        )}
      </Carousel>
    </div>
  );
}
