"use client";

import styles from "./Talent.module.css";
import CarouselArtworks from "../../components/Carousel";
import DiscographyList from "@/app/components/DiscographyList";
import TalentHeader from "@/app/components/TalentHeader";
import VideoList from "@/app/components/VideoList";

export default function Page({ params }) {
  return (
    <>
      <div className={"content"}>
        <TalentHeader vtuberId={params.id} />
      </div>
      <div className={"content"}>
        {/* <VideoList listAll={false} vtuberId={params.id} /> */}
      </div>
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
