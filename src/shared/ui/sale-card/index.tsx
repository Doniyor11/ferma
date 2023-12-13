import React, {FC} from 'react';
import styles from './sale-card.module.scss';
import {Anchor, Text} from '@mantine/core';
import IconLink from '../../../../public/images/home/arrow-right-red.svg';

import Image from 'next/image';
import cl from 'classnames';

interface SaleCardIProps {
    className?: string;
    title?: string;
    subTitle?: string;
    saleCarImg?: any
}

export const SaleCard: FC<SaleCardIProps> = ({
                                          className,
                                          title,
                                          subTitle,
                                          saleCarImg
                                      }) => {
    return (
        <div className={cl(styles.saleCard, className)}>
            <div className={styles.saleCardLeft}>
                <div className={styles.saleCardLeftTop}>
                    <Text component={'p'} className={styles.saleCardTitle}>
                        {title}
                    </Text>
                    <Text component={'p'} className={styles.saleCardSubTitle}>
                        {subTitle}
                    </Text>
                </div>
                <Anchor href={'/'} className={styles.saleCardLink}>
                    Подробнее
                    <IconLink/>
                </Anchor>
            </div>
            <div className={styles.saleCardRight}>
                <Image src={saleCarImg} alt={'phone'}/>
            </div>
        </div>
    );
};
