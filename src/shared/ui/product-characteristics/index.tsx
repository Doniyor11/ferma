import React, {FC} from 'react';
import styles from './product-characteristics.module.scss'
import {Flex, Text} from "@mantine/core";

interface ProductCharacteristicsIProps {
    title: string;
}

export const ProductCharacteristics: FC<ProductCharacteristicsIProps> = ({
                                                                             title,

                                                                         }) => {
    return (
        <div className={styles.productCharacteristicsWrapper}>
            <Text component={'p'} className={styles.productCharacteristicsTitle}>{title}</Text>
            <Flex align={'center'} justify={'space-between'}
                  className={styles.productCharacteristicsInfoRow}>
                <Text component={'p'}
                      className={styles.productCharacteristicsInfo}>Операционная система</Text>
                <Text component={'p'}
                      className={styles.productCharacteristicsInfoDesc}>IOS</Text>

            </Flex>
            <Flex align={'center'} justify={'space-between'}
                  className={styles.productCharacteristicsInfoRow}>
                <Text component={'p'}
                      className={styles.productCharacteristicsInfo}>Версия IOS</Text>
                <Text component={'p'}
                      className={styles.productCharacteristicsInfoDesc}>IOS 14.3</Text>

            </Flex>
        </div>
    );
};
