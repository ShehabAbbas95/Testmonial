import styles from "./page.module.css";
import Testmonials from "./components/Testmonials";

const cards = [
  {
    img: "/pexels-italo-melo-2379004.png",
    author: "John Smith",
    description:
      ' " I was looking for a unique travel experience, and I found it on Ithaka. I booked a private tour of the Pyramids with a local guide, and it was amazing! The guide was knowledgeable and passionate about Egypt." ',
    job: "Travel Blogger",
  },
  {
    img: "/pexels-vlad-chețan-2923156.png",
    author: "John Smith",
    description:
      ' " I was looking for a unique travel experience, and I found it on Ithaka. I booked a private tour of the Pyramids with a local guide, and it was amazing! The guide was knowledgeable and passionate about Egypt." ',
    job: "Travel Blogger",
  },
  {
    img: "/pexels-andrea-piacquadio-846741.png",
    author: "John Smith",
    description:
      ' " I was looking for a unique travel experience, and I found it on Ithaka. I booked a private tour of the Pyramids with a local guide, and it was amazing! The guide was knowledgeable and passionate about Egypt." ',
    job: "Travel Blogger",
  },
];
export default function Home() {
  return (
    <main className={styles.main}>
      <Testmonials cards={cards} />
    </main>
  );
}
