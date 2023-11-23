/* eslint-disable react/no-unescaped-entities */
import React, { FC } from "react";
import styles from "../styles/testmonials.module.css";
import Image from "next/image";
import Star from "./Icons/IconStar";

interface Card {
  author: string;
  description: string;
  job: string;
  img: string;
}

interface Props {
  cards: Card[];
}

function Testmonials({ cards }: Props) {
  return (
    <div className={styles.main}>
      <div>
        <p className={styles.header}>Clients' Testimonials</p>
        <p className={styles.title}>Unforgettable Travel Experiences</p>
      </div>
      <div className={styles.content}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.img}>
              <Image
                src={card.img}
                alt={card.author}
                width={140}
                height={140}
              />
            </div>
            <p>{card.description}</p>
            <p className={styles.author}>{card.author}</p>
            <span className={styles.job}> {card.job}</span>
            <div className={styles.rate}>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testmonials;
