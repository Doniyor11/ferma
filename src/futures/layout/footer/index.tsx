import styles from "./footer.module.scss"
import {Text, Anchor, Flex, Grid, Button} from '@mantine/core';
import {useMediaQuery,} from '@mantine/hooks';
import Link from 'next/link';
// import Logo from "../../../../public/images/logo-footer.svg"
// import IconInstagram from "../../../../public/images/instagram.svg"
// import IconTelegram from "../../../../public/images/telegram.svg"
// import IconFacebook from "../../../../public/images/facebook.svg"
// import IconScroll from "../../../../public/images/home/sroll-top.svg";
import useTranslation from "next-translate/useTranslation";

export default function Footer() {
    const matches = useMediaQuery('(max-width: 1439px)');
    const {t} = useTranslation('common');
    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth',});
    }
    return (
        <>
            Footer
        </>
    )
}
