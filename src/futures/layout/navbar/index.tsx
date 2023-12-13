import styles from './navbar.module.scss';
import {useDisclosure, useMediaQuery} from '@mantine/hooks';
import {Box, Select,} from '@mantine/core';
import {usePathname} from 'next/navigation';
import {useRouter} from 'next/router';
import IconRu from '../../../../public/images/ru.svg';
import IconArrow from '../../../../public/images/IconArrowDown.svg';
// MenuList
import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';
import React from "react";
import Link from "next/link";

const data = [
    {
        label: 'Ru',
        value: 'ru',
    },
    {
        label: 'Uz',
        value: 'uz',
    },
    {
        label: 'En',
        value: 'en',
    },
];

export default function Navbar() {
    const matches = useMediaQuery('(max-width: 1550px)');
    const location = usePathname();
    const navigate = useRouter();
    const [opened, {open, close}] = useDisclosure(false);
    const {t, lang} = useTranslation('common');
    const handleBurgerOpen = () => {
        opened ? close() : open();
    };
    const changeLanguage = (lang: string) => {
        setLanguage(lang);
    };


    return (
        <>
            <Box className={styles.navbar}>
                <Link href={'/'} className={styles.navbarLogo}>Vidpremium.uz</Link>
                <Select
                    value={lang}
                    onChange={changeLanguage}
                    className={styles.languages}
                    data={data}
                    rightSection={ <IconArrow/>}
                    classNames={{
                        rightSection: styles.languagesRightSection,
                        icon: styles.languagesIcon,
                    }}
                    icon={(lang === 'ru' && <IconRu/>) || (lang === 'uz' &&
                        <IconRu/>) || (lang === 'en' && <IconRu/>)}

                />
            </Box>
        </>
    );
}

