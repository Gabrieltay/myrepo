import React from 'react';
import Image from 'next/image';
import { NextPage } from 'next';
import pepe from '../../../public/pepe.png';

const Home: NextPage = () => {
  const textArray = [
    'Logic will get you from A to B. Imagination will take you everywhere.',
    "There are 10 kinds of people. Those who know binary and those who don't.",
    'There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.',
    "It's not that I'm so smart, it's just that I stay with problems longer.",
    'It is pitch dark. You are likely to be eaten by a grue.',
  ];
  return (
    <>
      <div>
        <Image src={pepe} alt="pepe" width="64" height="64" />
        <h1>{textArray[Math.floor(Math.random() * textArray.length)]}</h1>
      </div>
      <div>
        Repository
        <a href="https://github.com/Gabrieltay/myrepo">
          https://github.com/Gabrieltay/myrepo
        </a>
      </div>
    </>
  );
};

export default Home;
