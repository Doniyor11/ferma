import React from 'react';
import styles from './bestseller-card.module.scss';
import BestsellerImg from '../../../../public/images/home/rekalama-img.png';
import Image from 'next/image';
import { Button, Text } from '@mantine/core';

export const BestsellerCard = () => {
  return (
    <div className={styles.bestsellerCard}>
      <div className={styles.bestsellerCardImage}>
        <Image src={BestsellerImg} alt={'watch'} />
      </div>
      <div>
        <Text component={'span'} className={styles.bestsellerCardRedTitle}>Хит продаж</Text>
        <Text component={'p'} className={styles.bestsellerCardTitle}>Iphone 14 pro</Text>
        <Text component={'p'} className={styles.bestsellerCardSubTitle}>Получите яркие эмоции от съемки видео</Text>
        <Button className={styles.bestsellerCardBtn}>Купить</Button>
      </div>
    </div>
  );
};
