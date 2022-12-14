import React, { useState } from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

import UpperBanner from "../../components/UpperBanner";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";

import PodcastsFilterBar from "../../components/PodcastsFilterBar";
import PodcastsCard from "../../components/PodcastsCard";
import PodcastRadio from "../../components/PodcastsRadio";

export default function Podcasts() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [podcastContent, setPodcastContent] = useState("PODCASTS");

  return (
    <div className={styles.container}>
      <Head>
        <title>Podcasts - Awesome Morocco UI</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/site-icon.svg" />
      </Head>

      <div className={styles.main}>
        <UpperBanner />
        <Navbar />
        <Header
          headerTitle={"Podcasts"}
          haederDescription={"Find your favorite Moroccan Podcasts"}
        />
        <PodcastsFilterBar
          filterOpen={filterOpen}
          setFilterOpen={setFilterOpen}
          podcastContent={podcastContent}
          setPodcastContent={setPodcastContent}
        />
        {podcastContent == "PODCASTS" ? (
          <PodcastsCard />
        ) : podcastContent == "RADIO" ? (
          <PodcastRadio />
        ) : null}
      </div>
    </div>
  );
}