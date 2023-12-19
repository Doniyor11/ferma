import styles from './navbar.module.scss';
import {useDisclosure, useMediaQuery} from '@mantine/hooks';
import {Box, Flex, Select, Text,} from '@mantine/core';
import {usePathname} from 'next/navigation';
import {useRouter} from 'next/router';
// import IconRu from '../../../../public/images/iconru.svg';
// import IconUz from '../../../../public/images/iconuz.svg';
// import IconArrow from '../../../../public/images/IconArrowDown.svg';
import IconLogo from '../../../../public/images/LOGO.png';
// MenuList
import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Icon1 from "../../../../public/images/span.img-convert.png";

const data = [
    {
        label: 'Ru',
        value: 'ru',
    },
    {
        label: 'Uz',
        value: 'uz',
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
                <Flex align={'center'} gap={'1rem'}>
                    <Link href={'/'} className={styles.navbarLogo}>Vidpremium.uz</Link>
                    <Image src={IconLogo} alt={'Logo'} width={200}/>
                </Flex>
                {/*<Select*/}
                {/*    value={lang}*/}
                {/*    onChange={changeLanguage}*/}
                {/*    className={styles.languages}*/}
                {/*    data={data}*/}
                {/*    rightSection={<IconArrow/>}*/}
                {/*    classNames={{*/}
                {/*        rightSection: styles.languagesRightSection,*/}
                {/*        icon: styles.languagesIcon,*/}
                {/*    }}*/}
                {/*    icon={(lang === 'ru' && <IconRu/>) || (lang === 'uz' &&*/}
                {/*        <IconUz/>) || (lang === 'en' && <IconRu/>)}*/}

                {/*/>*/}
                <Box className={styles.footerInfo}>
                    <Box>
                        <Image src={Icon1} alt={''}/>
                    </Box>
                    <Flex direction={'column'} gap={'0.25rem'}>
                        <Link href={'tel:+99899 853-05-05'} className={styles.footerInfoText}>+99899 853-05-05</Link>
                    </Flex>
                </Box>
            </Box>
        </>
    );
}

