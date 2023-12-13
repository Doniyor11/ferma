import React from 'react';
import ImageNotFound from 'public/images/favourite/not-found-image.png';
import Image404 from 'public/images/404/404.svg';
import Image505 from 'public/images/404/505.svg';
import styles from './error-pages.module.scss'
import {Box, Button, Text} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import SvgIcon from "../svg";

export const ErrorPages = () => {
    return (
        <>
            <Box className={styles.favouriteWrapperNotFound}>
                <Image src={ImageNotFound} alt={''}/>
                <Text component={'p'} className={styles.notFountTitle}>
                    У вас нет избранных товаров
                </Text>
                <Text component={'p'} className={styles.notFountSubTitle}>
                    У вас нет избранных товаров
                </Text>
                <Link href={'/'}>
                    <Button className={styles.notFountBtn}>
                        На главную
                    </Button>
                </Link>
            </Box>
            <Box className={styles.favouriteWrapperNotFound}>
                <SvgIcon Svg={Image404} className={styles.notFountImage}/>
                <Text component={'p'} className={styles.notFountTitle}>
                    Страница не найдена!
                </Text>
                <Text component={'p'} className={styles.notFountSubTitle}>
                    Страница, которую вы ищете не найдена. <br/> Вернитесь на главную
                </Text>
                <Link href={'/'}>
                    <Button className={styles.notFountBtn}>
                        На главную
                    </Button>
                </Link>
            </Box>
            <Box className={styles.favouriteWrapperNotFound}>
                <SvgIcon Svg={Image505} className={styles.notFountImage}/>
                <Text component={'p'} className={styles.notFountTitle}>
                    На сайте введутся <br/> технические работы
                </Text>
                <Text component={'p'} className={styles.notFountSubTitle}>
                    Страница, которую вы ищете не найдена. <br/> Вернитесь на главную
                </Text>
                <Link href={'/'}>
                    <Button className={styles.notFountBtn}>
                        На главную
                    </Button>
                </Link>
            </Box>
        </>
    );
};
