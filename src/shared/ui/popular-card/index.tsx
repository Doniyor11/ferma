import React, {FC} from 'react';
import styles from './popular-card.module.scss';
import {Badge, Text} from '@mantine/core';
import Image from 'next/image';
import cl from 'classnames';


interface PopularCardIProps {
    badge?: string[];
    title?: string;
    cardImage?: any;
    smallCard?: boolean;
}

export const PopularCard: FC<PopularCardIProps> = ({
                                                badge, title, cardImage, smallCard,
                                            }) => {
    return (
        <div className={styles.popularCard}>
            <div className={styles.popularCardLeft}>
                <div>
                    <Text component={'p'} className={styles.leftTitle}>
                        {title}
                    </Text>
                </div>
                <div>
                    {
                        badge?.map((item, index) => {
                            return (
                                <span key={index} className={styles.badge}>{item}</span>
                            );
                        })
                    }
                </div>
            </div>
            <div className={cl(styles.popularCardRight, [smallCard && styles.popularCardRightSmall])}>
                <Image src={cardImage} alt={'telefon'}/>
            </div>
        </div>
    );
};
