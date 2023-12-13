import React from 'react';
import styles from './basket-card.module.scss'
import {ActionIcon, Box, Checkbox, Flex, Text} from "@mantine/core";
import Image from "next/image";
import ImageProduct from 'public/images/catalog/product.png';
import IconFavorite from 'public/images/home/card-favorite-icon.svg';
import IconTrash from 'public/images/basket/trash-card.svg';
import IconMinus from 'public/images/basket/icon-minus.svg';
import IconPulse from 'public/images/basket/icon-pulse.svg';
import cl from "classnames";
import {useMediaQuery} from "@mantine/hooks";

export const BasketCard = () => {
    const matches = useMediaQuery('(max-width: 845px)');
    return (
        <div className={styles.basketCardWrapper}>
            <Flex justify={"space-between"} className={styles.basketCardWrapperRow}>
                <Flex gap={'0 0.62rem'} align={'center'}>
                    <Flex gap={'0 0.62rem'} align={'center'}>
                        <Checkbox
                            className={styles.filterWrapperCheckbox}
                            classNames={{
                                label: styles.checkboxLabel,
                                inner: styles.filterWrapperInner,
                                body: styles.filterWrapperBody,
                            }}
                        />
                        <Box className={styles.basketCardImageWrapper}>
                            <Image src={ImageProduct} alt={'product'} className={styles.image}/>
                        </Box>
                    </Flex>
                    <Box className={styles.basketCardInfo}>
                        <Text component={'p'} className={styles.basketCardInfoTitle}>
                            Смартфон Apple Iphone 14 Pro...
                        </Text>
                        <Flex align={'center'} gap={'0 0.75rem'}>
                            <Text component={'span'} className={styles.basketCardInfoPrice}>
                                543 000 сум/месяц
                            </Text>
                            <ActionIcon className={styles.infoIcon}>
                                <IconFavorite/>
                            </ActionIcon>
                            <ActionIcon className={styles.infoIcon}>
                                <IconTrash/>
                            </ActionIcon>
                        </Flex>
                        <Flex direction={'column'} className={cl(styles.basketCardWrapperRowPriceMobile)}>
                            <Text component={'p'} className={styles.basketCardWrapperRightPrice}>
                                5 200 000 сум
                            </Text>
                            <Box className={styles.basketCardWrapperNumber}>
                                <ActionIcon>
                                    <IconMinus/>
                                </ActionIcon>
                                <Text className={styles.basketCardWrapperNumberInfo}>5</Text>
                                <ActionIcon>
                                    <IconPulse/>
                                </ActionIcon>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
                <Flex justify={"center"} align={"flex-end"} direction={'column'} className={styles.basketCardWrapperRowPrice}>
                    <Text component={'p'} className={styles.basketCardWrapperRightPrice}>
                        5 200 000 сум
                    </Text>
                    <Box className={styles.basketCardWrapperNumber}>
                        <ActionIcon>
                            <IconMinus/>
                        </ActionIcon>
                        <Text className={styles.basketCardWrapperNumberInfo}>5</Text>
                        <ActionIcon>
                            <IconPulse/>
                        </ActionIcon>
                    </Box>
                </Flex>
            </Flex>
        </div>
    );
};
