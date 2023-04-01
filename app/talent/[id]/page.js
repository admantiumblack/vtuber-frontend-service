"use client";

import styles from "./Talent.module.css";
import CarouselArtworks from "../../components/Carousel";
import Loading from "../../components/loading";
import DiscographyList from "@/app/components/DiscographyList";

export default function Page({ params }) {
  return (
    <>
      <div className={styles.title}>
        <b>{"Albums"}</b>
      </div>
      <DiscographyList vtuberId={params.id} />
      <br />
      <div className={styles.title}>
        <b>{"Recent Artwork"}</b>
      </div>
      <CarouselArtworks id={params.id} />
    </>
  );
}
