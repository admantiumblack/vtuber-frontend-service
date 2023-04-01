import React, { Component } from "react";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Loading from "./loading";
import useSWR from "swr";

export default function CarouselArtworks({ id }) {
  const fetchArtworks = async () => {
    console.log("halo");

    try {
      const res = await fetch(`${process.env.ART_API}/art?id=${id}&limit=5`);
    } catch (error) {
      console.log(error);
    }

    console.log(res);

    const data = await res.json();

    console.log(data);

    return data;
  };

  const { data: artworks, error: artworkError } = useSWR(
    "artworks",
    fetchArtworks
  );

  return (
    <div>
      <Carousel>
        <div>
          {artworks ? (
            albums.post.map((item) => (
              <img src={item.file - url} alt={item.tag - string - artist} />
              // <p>{item.source}</p>
            ))
          ) : (
            <Loading />
          )}
        </div>
      </Carousel>
    </div>
  );
}
