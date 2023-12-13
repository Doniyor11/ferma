import React from 'react';
import styles from './payment-card.module.scss';
import { Anchor, Text } from '@mantine/core';
import IconLink from '../../../../public/images/home/arrow-right-red.svg';

export const PaymentCard = () => {
  return (
    <div className={styles.paymentCard}>
      <Text component={'p'} className={styles.paymentCardTitle}>
        Способ оплаты
      </Text>
      <Text component={'p'} className={styles.paymentCardSubTitle}>
        Удобная платежная система только у нас. Купите технику и получите бонусы
      </Text>
      <Anchor href={'/'} className={styles.paymentCardLink}>
        Подробнее
        <IconLink />
      </Anchor>
    </div>
  );
};

