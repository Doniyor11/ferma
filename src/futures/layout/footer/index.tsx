import styles from "./footer.module.scss"
import {Text, Anchor, Flex, Grid, Button, Box} from '@mantine/core';
import {useMediaQuery,} from '@mantine/hooks';
import Link from 'next/link';
import Icon1 from "../../../../public/images/span.img-convert.png"
import Icon2 from "../../../../public/images/span.img-convert2.png"
import useTranslation from "next-translate/useTranslation";
import SvgIcon from "../../../shared/ui/svg";
import Image from "next/image";
import IconLogo from '../../../../public/images/LOGO.png';

export default function Footer() {
    const matchesM = useMediaQuery('(max-width: 992px)');
    const matchesS = useMediaQuery('(max-width: 576px)');
    const {t} = useTranslation('common');
    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth',});
    }
    return (
        <Box className={styles.footer}>
            <Flex justify={'space-between'} direction={
                matchesM ? 'column' : 'row'
            } gap={'2rem'} align={
                matchesM ? 'center' : 'flex-start'
            }>
                <Flex align={'center'} gap={'1rem'} direction={
                    matchesS ? 'column' : 'row'
                }>
                    <Text component={'p'} className={styles.footerText}>
                        Vidpremium.uz
                    </Text>
                    <Image src={IconLogo} alt={'Logo'} width={200}/>
                </Flex>
                <Flex gap={'2rem'} direction={
                    matchesS ? 'column' : 'row'
                } justify={"center"}>
                    <Box className={styles.footerInfo}>
                        <Box>
                            <Image src={Icon1} alt={''}/>
                        </Box>
                        <Flex direction={'column'} gap={'0.25rem'}>
                            <Link href={'tel:+99899 879-80-08'} className={styles.footerInfoText}>+99899 879-80-08</Link>
                            <Link href={'tel:+99897 120-33-22'} className={styles.footerInfoText}>+99897 120-33-22</Link>
                            <Link href={'tel:+99899 853-05-05'} className={styles.footerInfoText}>+99899 853-05-05</Link>
                        </Flex>
                    </Box>
                    <Link href={'/'} className={styles.footerInfo}>
                        <Box>
                            <Image src={Icon2} alt={''}/>
                        </Box>
                        <Text component={'p'} className={styles.footerInfoText}>
                            Гор.Ташкент. Мирзо-Улугбекский р-н, <br/> ул. Буюк-ипак йули дом 434.
                        </Text>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    )
}
