import React, {FC} from 'react';
import styles from './new-card.module.scss';
import cl from 'classnames';
import Image from 'next/image';
import CardImag1 from '../../../../public/images/home/new-card-1.png';
import CardIcon1 from '../../../../public/images/home/card-favorite-icon.svg';
import CardIcon2 from '../../../../public/images/home/card-comparison-icon.svg';
import IconStar from '../../../../public/images/home/icon-star.svg';
import IconBasket from '../../../../public/images/navbar/basket.svg';
import {ActionIcon, Button, Skeleton, Text} from '@mantine/core';
import Link from "next/link";


interface NewCardIProps {
    className?: string
    skeleton?: boolean
}

export const NewCard: FC<NewCardIProps> = ({
                                               className, skeleton
                                           }) => {
    return (
        <>
            {
                skeleton && (
                    <div className={cl(styles.newCard, className)}>
                        <div className={cl(styles.newCardTop)}>
                            <span className={styles.newCardTopBadge}><Skeleton height={20} width={20}
                                                                               radius={'50%'}/></span>
                            <Skeleton height={120} width={120} radius={'50%'}/>
                            <div className={styles.newCardTopFavorite}>
                                <ActionIcon size={'lg'} className={styles.favoriteIcon}>
                                    <Skeleton height={20} width={20} radius={'50%'}/>
                                </ActionIcon>
                                <ActionIcon size={'lg'} className={styles.favoriteIcon}>
                                    <Skeleton height={20} width={20} radius={'50%'}/>
                                </ActionIcon>
                            </div>
                        </div>
                        <div className={cl(styles.newCardBottom)}>
                            <div className={styles.newCardBottomTop}>
                                <span className={styles.newCardBottomBadge}><Skeleton height={20} width={40}/></span>
                                <span className={styles.bottomStarTitle}>
                            <Skeleton height={20} width={40}/>
                        </span>
                            </div>
                            <Text component={'span'} className={styles.newCardTitle}>
                                <Skeleton height={30} width={180} mt={10}/>
                            </Text>

                            <Text component={'span'} className={cl(styles.newCardSalePrice, styles.skeletonSalePrice)}>
                                <Skeleton height={15} width={80} mt={10}/>
                            </Text>
                            <Text component={'span'} className={cl(styles.newCardPrice, styles.skeletonCardPrice)}>
                                <Skeleton height={25} width={130}/>
                            </Text>
                            <Text component={'span'} className={styles.newCardInstallmentNumber}>
                                <Skeleton height={10} width={80} mt={10} mb={10}/>
                            </Text>
                            <div className={styles.newCardButtons}>
                                <Skeleton height={30} width={'80%'} className={styles.newCardButtonsSkeleton}/>
                                <Skeleton height={30} width={'20%'} className={styles.newCardButtonsSkeleton}/>

                            </div>
                        </div>
                    </div>
                ) || (
                    <Link href={'/product'} className={cl(styles.newCard, className)}>
                        <div className={cl(styles.newCardTop)}>
                            <span className={styles.newCardTopBadge}>-10%</span>
                            <Image src={CardImag1} alt={'watch'}/>
                            <div className={styles.newCardTopFavorite}>
                                <ActionIcon size={'lg'} className={styles.favoriteIcon}>
                                    <CardIcon1/>
                                </ActionIcon>
                                <ActionIcon size={'lg'} className={styles.favoriteIcon}>
                                    <CardIcon2/>
                                </ActionIcon>
                            </div>
                        </div>
                        <div className={cl(styles.newCardBottom)}>
                            <div className={styles.newCardBottomTop}>
                                <span className={styles.newCardBottomBadge}>Смартфон</span>
                                <span className={styles.bottomStarTitle}>
            <IconStar/>
            (4.5)
          </span>
                            </div>
                            <Text component={'p'} className={styles.newCardTitle}>
                                Apple Iwatch SE 2 32 Гб (MGYN3RU/A)
                            </Text>
                            <Text component={'span'} className={styles.newCardSalePrice}>
                                5 450 000 сум
                            </Text>
                            <Text component={'p'} className={styles.newCardPrice}>
                                5 200 000 сум
                            </Text>
                            <Text component={'p'} className={styles.newCardInstallmentNumber}>
                                от <Text component={'span'}>354 000 сум</Text>
                            </Text>
                            <div className={styles.newCardButtons}>
                                <Button className={styles.buttonBuy}>
                                    Купить сейчас
                                </Button>
                                <Button className={styles.buttonBasket}>
                                    <IconBasket/>
                                    <Text component={'p'} className={styles.buttonBasketText}>
                                        В корзину
                                    </Text>
                                </Button>
                            </div>
                        </div>
                    </Link>
                )
            }

        </>
    );
};
