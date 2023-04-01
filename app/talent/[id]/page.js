"use client";

import styles from "./Talent.module.css";
import CarouselArtworks from "../../components/Carousel";
import DiscographyList from "@/app/components/DiscographyList";

export default function Page({ params }) {
  return (
    <>
      <div className={"content"}>
        <h1>{"Albums"}</h1>
        <DiscographyList vtuberId={params.id} />
      </div>
      <div className={"content"}>
        <h1>{"Recent Artwork"}</h1>
      </div>
      <div className={"content"}>
        <CarouselArtworks id={params.id} />
      </div>
    </>
  );
}
