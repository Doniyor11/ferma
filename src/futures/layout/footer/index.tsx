import styles from "./footer.module.scss"
import {Text, Anchor, Flex, Grid, Button, Box} from '@mantine/core';
import {useMediaQuery,} from '@mantine/hooks';
import Link from 'next/link';
import Icon1 from "../../../../public/images/span.img-convert.png"
import Icon2 from "../../../../public/images/span.img-convert2.png"
import useTranslation from "next-translate/useTranslation";
import SvgIcon from "../../../shared/ui/svg";
import Image from "next/image";

export default function Footer() {
    const matches = useMediaQuery('(max-width: 1439px)');
    const {t} = useTranslation('common');
    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth',});
    }
    return (
        <Box className={styles.footer}>
            <Flex justify={'space-between'}>
                <Text component={'p'} className={styles.footerText}>
                    Vidpremium.uz
                </Text>
                <Flex gap={'2rem'}>
                    <Link href={'/'} className={styles.footerInfo}>
                        <Box>
                            <Image src={Icon1} alt={''}/>
                        </Box>
                        <Flex direction={'column'} gap={'0.25rem'}>
                            <Text component={'p'} className={styles.footerInfoText}>+99899 020-99-30</Text>
                            <Text component={'p'} className={styles.footerInfoText}>+99899 020-99-30</Text>
                        </Flex>
                    </Link>
                    <Link href={'/'} className={styles.footerInfo}>
                        <Box>
                            <Image src={Icon2} alt={''}/>
                        </Box>
                        <Text component={'p'} className={styles.footerInfoText}>
                            г.Ташкент, Мирзо-Улугбекский <br/>
                            район, улица Буюк Ипак Йули, дом 481, 100142
                        </Text>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    )
}
