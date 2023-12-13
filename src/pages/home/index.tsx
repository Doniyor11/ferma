import {useDisclosure, useMediaQuery, useWindowScroll} from '@mantine/hooks';
// import Head from 'next/head';
import {BigPlayButton, Player} from 'video-react';
import 'video-react/dist/video-react.css';
import styles from './index.module.scss';
import Image from 'next/image';

import {useRouter} from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import aboutImage from '../../../public/images/about.png';
import productImage1 from '../../../public/images/product1.png';
import productImage2 from '../../../public/images/product2.png';
import productImage3 from '../../../public/images/product3.png';
import productImage4 from '../../../public/images/product4.png';
import productImage5 from '../../../public/images/product5.png';
import productImage6 from '../../../public/images/product6.png';
import productImage7 from '../../../public/images/product7.png';
import productImage8 from '../../../public/images/product8.png';
import productImage9 from '../../../public/images/product9.png';
import productImage10 from '../../../public/images/product10.png';
import productImage11 from '../../../public/images/product11.png';
import productImage12 from '../../../public/images/product12.png';
import iconArrow from '../../../public/images/IconArrowRight.png';
import icon1 from '../../../public/images/icon1.png';
import icon2 from '../../../public/images/icon2.png';
import icon3 from '../../../public/images/icon3.png';
import iconClose from '../../../public/images/Icon.png';
import videoImg from '../../../public/images/videoBg.png';
// Core modules imports are same as usual
import {Pagination} from 'swiper/modules';
// Import Swiper React components
// import {Swiper, SwiperSlide,} from 'swiper/react';
// Import Bullet Navigation
// Import Swiper styles
import 'swiper/css';
import 'swiper/scss/pagination';
import {ActionIcon, Box, Button, Flex, Grid, Input, Modal, Text} from "@mantine/core";
import cl from "classnames";
import Link from "next/link";


export default function Home() {
    const navigate = useRouter();
    const matches = useMediaQuery('(max-width: 992px)');
    const matchesM = useMediaQuery('(max-width: 845px)');
    const matchesS = useMediaQuery('(max-width: 576px)');
    const {t} = useTranslation('common');
    const [scroll, scrollTo] = useWindowScroll();
    const [opened, {open, close}] = useDisclosure(false);

    return (
        <Box className={styles.container}>
            <Box className={styles.heroWrapper}>
                <Box className={styles.heroWrapperInfo}>
                    <Text component={'h1'} className={styles.heroWrapperTitle}>«ФЕРМА Технологии Кормления»</Text>
                    <Text component={'p'} className={styles.heroWrapperDesc}>Максимально раскрывает
                        генетический <br/> потенциал продуктивных животных</Text>
                </Box>
            </Box>

            <Box className={cl(styles.about, styles.box)}>
                <Grid gutter={50}>
                    <Grid.Col span={8}>
                        <Flex direction={'column'} gap={'1rem 0'} className={styles.aboutWrapper}>
                            <Text component={'h2'} className={styles.title}>О нас</Text>
                            <Text component={'p'} className={styles.subTitle}>OOO “AVORA BIOTECH” предоставляем вам
                                комплексные решения по выращиванию молочного скота</Text>
                            <Text component={'p'} className={styles.aboutDesc}>
                                Это стартерные корма для телят, разработанные нами и успешно испытанные в хозяйствах.
                                Это проверенное на практике энергетические, добавки и витаминно-минеральные премиксы,
                                которые помогают хозяйствам идти в ногу с мировой практикой. Это профессионально
                                сбалансированные рационы кормления скота по индивидуально составленным планам, схемы
                                выращивания телят и телок, программы откорма бычков. Мы всегда готовы поделиться своими
                                знаниями и опытом с вами с вами. Поэтому с помощью нашей дружной и компетентной команды
                                вы вырастите и поддержите на своей молочной ферме здоровое стадо, а кроме того, получите
                                максимальный надой молока.
                            </Text>
                        </Flex>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Box className={styles.aboutImage}>
                            <Image src={aboutImage} alt={''}/>
                        </Box>
                    </Grid.Col>
                </Grid>
            </Box>

            <Box className={cl(styles.product, styles.box)}>
                <Text component={'h2'} className={cl(styles.title, styles.productTitle)}>Наша продукция</Text>
                <Grid gutter={50}>
                    <Grid.Col span={4}>
                        <Box className={styles.productItem}>
                            <Flex justify={'center'}>
                                <Image src={productImage1} alt={''}/>
                            </Flex>
                            <Text component={'h3'} className={styles.productItemTitle}>Мегакорм</Text>
                            <Text component={'p'} className={styles.productItemDesc}>
                                Это стартерные корма для телят, разработанные нами и успешно испытанные в хозяйствах.
                                Это проверенное на практике энергетические, добавки и витаминно-минеральные премиксы,
                                которые помогают хозяйствам идти в ногу с мировой практикой. Это профессионально
                                сбалансированные рационы кормления скота по индивидуально составленным планам, схемы
                                выращивания телят и телок, программы откорма бычков. Мы всегда готовы поделиться своими
                                знаниями и опытом с вами с вами. Поэтому с помощью нашей дружной и компетентной команды
                                вы вырастите и поддержите на своей молочной ферме здоровое стадо, а кроме того, получите
                                максимальный надой молока.
                            </Text>
                            <Text component={'p'} className={styles.productItemPrice}>245 000 Сум</Text>
                            <Link href={'/product/1'} className={styles.productItemLink}>
                                Подробнее
                                <Image src={iconArrow} alt={''}/>
                            </Link>
                            <Button className={styles.productItemBtn} onClick={open}>
                                Заказать
                            </Button>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Box className={styles.productItem}>
                            <Flex justify={'center'}>
                                <Image src={productImage2} alt={''}/>
                            </Flex>
                            <Text component={'h3'} className={styles.productItemTitle}>К-корм</Text>
                            <Text component={'p'} className={styles.productItemDesc}>
                                Это стартерные корма для телят, разработанные нами и успешно испытанные в хозяйствах.
                                Это проверенное на практике энергетические, добавки и витаминно-минеральные премиксы,
                                которые помогают хозяйствам идти в ногу с мировой практикой. Это профессионально
                                сбалансированные рационы кормления скота по индивидуально составленным планам, схемы
                                выращивания телят и телок, программы откорма бычков. Мы всегда готовы поделиться своими
                                знаниями и опытом с вами с вами. Поэтому с помощью нашей дружной и компетентной команды
                                вы вырастите и поддержите на своей молочной ферме здоровое стадо, а кроме того, получите
                                максимальный надой молока.
                            </Text>
                            <Text component={'p'} className={styles.productItemPrice}>245 000 Сум</Text>
                            <Link href={'/product/1'} className={styles.productItemLink}>
                                Подробнее
                                <Image src={iconArrow} alt={''}/>
                            </Link>
                            <Button className={styles.productItemBtn} onClick={open}>
                                Заказать
                            </Button>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Box className={styles.productItem}>
                            <Flex justify={'center'}>
                                <Image src={productImage3} alt={''}/>
                            </Flex>
                            <Text component={'h3'} className={styles.productItemTitle}>Корм для целок</Text>
                            <Text component={'p'} className={styles.productItemDesc}>
                                Это стартерные корма для телят, разработанные нами и успешно испытанные в хозяйствах.
                                Это проверенное на практике энергетические, добавки и витаминно-минеральные премиксы,
                                которые помогают хозяйствам идти в ногу с мировой практикой. Это профессионально
                                сбалансированные рационы кормления скота по индивидуально составленным планам, схемы
                                выращивания телят и телок, программы откорма бычков. Мы всегда готовы поделиться своими
                                знаниями и опытом с вами с вами. Поэтому с помощью нашей дружной и компетентной команды
                                вы вырастите и поддержите на своей молочной ферме здоровое стадо, а кроме того, получите
                                максимальный надой молока.
                            </Text>
                            <Text component={'p'} className={styles.productItemPrice}>245 000 Сум</Text>
                            <Link href={'/product/1'} className={styles.productItemLink}>
                                Подробнее
                                <Image src={iconArrow} alt={''}/>
                            </Link>
                            <Button className={styles.productItemBtn} onClick={open}>
                                Заказать
                            </Button>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Box className={styles.productItem}>
                            <Flex justify={'center'}>
                                <Image src={productImage4} alt={''}/>
                            </Flex>
                            <Text component={'h3'} className={styles.productItemTitle}>Мегамикс</Text>
                            <Text component={'p'} className={styles.productItemDesc}>
                                Это стартерные корма для телят, разработанные нами и успешно испытанные в хозяйствах.
                                Это проверенное на практике энергетические, добавки и витаминно-минеральные премиксы,
                                которые помогают хозяйствам идти в ногу с мировой практикой. Это профессионально
                                сбалансированные рационы кормления скота по индивидуально составленным планам, схемы
                                выращивания телят и телок, программы откорма бычков. Мы всегда готовы поделиться своими
                                знаниями и опытом с вами с вами. Поэтому с помощью нашей дружной и компетентной команды
                                вы вырастите и поддержите на своей молочной ферме здоровое стадо, а кроме того, получите
                                максимальный надой молока.
                            </Text>
                            <Text component={'p'} className={styles.productItemPrice}>245 000 Сум</Text>
                            <Link href={'/product/1'} className={styles.productItemLink}>
                                Подробнее
                                <Image src={iconArrow} alt={''}/>
                            </Link>
                            <Button className={styles.productItemBtn} onClick={open}>
                                Заказать
                            </Button>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Box className={styles.productItem}>
                            <Flex justify={'center'}>
                                <Image src={productImage5} alt={''}/>
                            </Flex>
                            <Text component={'h3'} className={styles.productItemTitle}>СЕРА</Text>
                            <Text component={'p'} className={styles.productItemDesc}>
                                Это стартерные корма для телят, разработанные нами и успешно испытанные в хозяйствах.
                                Это проверенное на практике энергетические, добавки и витаминно-минеральные премиксы,
                                которые помогают хозяйствам идти в ногу с мировой практикой. Это профессионально
                                сбалансированные рационы кормления скота по индивидуально составленным планам, схемы
                                выращивания телят и телок, программы откорма бычков. Мы всегда готовы поделиться своими
                                знаниями и опытом с вами с вами. Поэтому с помощью нашей дружной и компетентной команды
                                вы вырастите и поддержите на своей молочной ферме здоровое стадо, а кроме того, получите
                                максимальный надой молока.
                            </Text>
                            <Text component={'p'} className={styles.productItemPrice}>245 000 Сум</Text>
                            <Link href={'/product/1'} className={styles.productItemLink}>
                                Подробнее
                                <Image src={iconArrow} alt={''}/>
                            </Link>
                            <Button className={styles.productItemBtn} onClick={open}>
                                Заказать
                            </Button>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Box className={styles.productItem}>
                            <Flex justify={'center'}>
                                <Image src={productImage6} alt={''}/>
                            </Flex>
                            <Text component={'h3'} className={styles.productItemTitle}>Комбикорм ПРО</Text>
                            <Text component={'p'} className={styles.productItemDesc}>
                                Это стартерные корма для телят, разработанные нами и успешно испытанные в хозяйствах.
                                Это проверенное на практике энергетические, добавки и витаминно-минеральные премиксы,
                                которые помогают хозяйствам идти в ногу с мировой практикой. Это профессионально
                                сбалансированные рационы кормления скота по индивидуально составленным планам, схемы
                                выращивания телят и телок, программы откорма бычков. Мы всегда готовы поделиться своими
                                знаниями и опытом с вами с вами. Поэтому с помощью нашей дружной и компетентной команды
                                вы вырастите и поддержите на своей молочной ферме здоровое стадо, а кроме того, получите
                                максимальный надой молока.
                            </Text>
                            <Text component={'p'} className={styles.productItemPrice}>245 000 Сум</Text>
                            <Link href={'/product/1'} className={styles.productItemLink}>
                                Подробнее
                                <Image src={iconArrow} alt={''}/>
                            </Link>
                            <Button className={styles.productItemBtn} onClick={open}>
                                Заказать
                            </Button>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Button className={styles.productItemBtnMore} variant={'outline'} fullWidth>
                            Загрузить ещё
                        </Button>
                    </Grid.Col>
                </Grid>
            </Box>

            <Box className={cl(styles.product, styles.box)}>
                <Text component={'h2'} className={cl(styles.title, styles.productTitle)}>Наши преимущества</Text>
                <Grid gutter={50}>
                    <Grid.Col span={4}>
                        <Box className={styles.productItem}>
                            <Flex justify={'center'}>
                                <Image src={productImage7} alt={''}/>
                            </Flex>
                            <Text component={'h3'} className={styles.productItemTitle}>Катозал</Text>
                            <Text component={'p'} className={styles.productItemDesc}>
                                Это стартерные корма для телят, разработанные нами и успешно испытанные в хозяйствах.
                                Это проверенное на практике энергетические, добавки и витаминно-минеральные премиксы,
                                которые помогают хозяйствам идти в ногу с мировой практикой. Это профессионально
                                сбалансированные рационы кормления скота по индивидуально составленным планам, схемы
                                выращивания телят и телок, программы откорма бычков. Мы всегда готовы поделиться своими
                                знаниями и опытом с вами с вами. Поэтому с помощью нашей дружной и компетентной команды
                                вы вырастите и поддержите на своей молочной ферме здоровое стадо, а кроме того, получите
                                максимальный надой молока.
                            </Text>
                            <Text component={'p'} className={styles.productItemPrice}>245 000 Сум</Text>
                            <Link href={'/product/1'} className={styles.productItemLink}>
                                Подробнее
                                <Image src={iconArrow} alt={''}/>
                            </Link>
                            <Button className={styles.productItemBtn} onClick={open}>
                                Заказать
                            </Button>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Box className={styles.productItem}>
                            <Flex justify={'center'}>
                                <Image src={productImage8} alt={''}/>
                            </Flex>
                            <Text component={'h3'} className={styles.productItemTitle}>Мастинол</Text>
                            <Text component={'p'} className={styles.productItemDesc}>
                                Это стартерные корма для телят, разработанные нами и успешно испытанные в хозяйствах.
                                Это проверенное на практике энергетические, добавки и витаминно-минеральные премиксы,
                                которые помогают хозяйствам идти в ногу с мировой практикой. Это профессионально
                                сбалансированные рационы кормления скота по индивидуально составленным планам, схемы
                                выращивания телят и телок, программы откорма бычков. Мы всегда готовы поделиться своими
                                знаниями и опытом с вами с вами. Поэтому с помощью нашей дружной и компетентной команды
                                вы вырастите и поддержите на своей молочной ферме здоровое стадо, а кроме того, получите
                                максимальный надой молока.
                            </Text>
                            <Text component={'p'} className={styles.productItemPrice}>245 000 Сум</Text>
                            <Link href={'/product/1'} className={styles.productItemLink}>
                                Подробнее
                                <Image src={iconArrow} alt={''}/>
                            </Link>
                            <Button className={styles.productItemBtn} onClick={open}>
                                Заказать
                            </Button>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Box className={styles.productItem}>
                            <Flex justify={'center'}>
                                <Image src={productImage9} alt={''}/>
                            </Flex>
                            <Text component={'h3'} className={styles.productItemTitle}>Mamifori</Text>
                            <Text component={'p'} className={styles.productItemDesc}>
                                Это стартерные корма для телят, разработанные нами и успешно испытанные в хозяйствах.
                                Это проверенное на практике энергетические, добавки и витаминно-минеральные премиксы,
                                которые помогают хозяйствам идти в ногу с мировой практикой. Это профессионально
                                сбалансированные рационы кормления скота по индивидуально составленным планам, схемы
                                выращивания телят и телок, программы откорма бычков. Мы всегда готовы поделиться своими
                                знаниями и опытом с вами с вами. Поэтому с помощью нашей дружной и компетентной команды
                                вы вырастите и поддержите на своей молочной ферме здоровое стадо, а кроме того, получите
                                максимальный надой молока.
                            </Text>
                            <Text component={'p'} className={styles.productItemPrice}>245 000 Сум</Text>
                            <Link href={'/product/1'} className={styles.productItemLink}>
                                Подробнее
                                <Image src={iconArrow} alt={''}/>
                            </Link>
                            <Button className={styles.productItemBtn} onClick={open}>
                                Заказать
                            </Button>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Box className={styles.productItem}>
                            <Flex justify={'center'}>
                                <Image src={productImage10} alt={''}/>
                            </Flex>
                            <Text component={'h3'} className={styles.productItemTitle}>Санофлай</Text>
                            <Text component={'p'} className={styles.productItemDesc}>
                                Это стартерные корма для телят, разработанные нами и успешно испытанные в хозяйствах.
                                Это проверенное на практике энергетические, добавки и витаминно-минеральные премиксы,
                                которые помогают хозяйствам идти в ногу с мировой практикой. Это профессионально
                                сбалансированные рационы кормления скота по индивидуально составленным планам, схемы
                                выращивания телят и телок, программы откорма бычков. Мы всегда готовы поделиться своими
                                знаниями и опытом с вами с вами. Поэтому с помощью нашей дружной и компетентной команды
                                вы вырастите и поддержите на своей молочной ферме здоровое стадо, а кроме того, получите
                                максимальный надой молока.
                            </Text>
                            <Text component={'p'} className={styles.productItemPrice}>245 000 Сум</Text>
                            <Link href={'/product/1'} className={styles.productItemLink}>
                                Подробнее
                                <Image src={iconArrow} alt={''}/>
                            </Link>
                            <Button className={styles.productItemBtn} onClick={open}>
                                Заказать
                            </Button>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Box className={styles.productItem}>
                            <Flex justify={'center'}>
                                <Image src={productImage11} alt={''}/>
                            </Flex>
                            <Text component={'h3'} className={styles.productItemTitle}>Лактобай</Text>
                            <Text component={'p'} className={styles.productItemDesc}>
                                Это стартерные корма для телят, разработанные нами и успешно испытанные в хозяйствах.
                                Это проверенное на практике энергетические, добавки и витаминно-минеральные премиксы,
                                которые помогают хозяйствам идти в ногу с мировой практикой. Это профессионально
                                сбалансированные рационы кормления скота по индивидуально составленным планам, схемы
                                выращивания телят и телок, программы откорма бычков. Мы всегда готовы поделиться своими
                                знаниями и опытом с вами с вами. Поэтому с помощью нашей дружной и компетентной команды
                                вы вырастите и поддержите на своей молочной ферме здоровое стадо, а кроме того, получите
                                максимальный надой молока.
                            </Text>
                            <Text component={'p'} className={styles.productItemPrice}>245 000 Сум</Text>
                            <Link href={'/product/1'} className={styles.productItemLink}>
                                Подробнее
                                <Image src={iconArrow} alt={''}/>
                            </Link>
                            <Button className={styles.productItemBtn} onClick={open}>
                                Заказать
                            </Button>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Box className={styles.productItem}>
                            <Flex justify={'center'}>
                                <Image src={productImage12} alt={''}/>
                            </Flex>
                            <Text component={'h3'} className={styles.productItemTitle}>Диеномаст</Text>
                            <Text component={'p'} className={styles.productItemDesc}>
                                Это стартерные корма для телят, разработанные нами и успешно испытанные в хозяйствах.
                                Это проверенное на практике энергетические, добавки и витаминно-минеральные премиксы,
                                которые помогают хозяйствам идти в ногу с мировой практикой. Это профессионально
                                сбалансированные рационы кормления скота по индивидуально составленным планам, схемы
                                выращивания телят и телок, программы откорма бычков. Мы всегда готовы поделиться своими
                                знаниями и опытом с вами с вами. Поэтому с помощью нашей дружной и компетентной команды
                                вы вырастите и поддержите на своей молочной ферме здоровое стадо, а кроме того, получите
                                максимальный надой молока.
                            </Text>
                            <Text component={'p'} className={styles.productItemPrice}>245 000 Сум</Text>
                            <Link href={'/product/1'} className={styles.productItemLink}>
                                Подробнее
                                <Image src={iconArrow} alt={''}/>
                            </Link>
                            <Button className={styles.productItemBtn} onClick={open}>
                                Заказать
                            </Button>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Button className={styles.productItemBtnMore} variant={'outline'} fullWidth>
                            Загрузить ещё
                        </Button>
                    </Grid.Col>
                </Grid>
            </Box>

            <Box className={cl(styles.product, styles.box)}>
                <Text component={'h2'} className={cl(styles.title, styles.productTitle)}>Наши препораты</Text>
                <Grid gutter={50}>
                    <Grid.Col span={4}>
                        <Box>
                            <Flex justify={'center'}>
                                <Image src={icon1} alt={''}/>
                            </Flex>
                            <Text className={styles.iconTitle}>
                                Низкая цена
                            </Text>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Box>
                            <Flex justify={'center'}>
                                <Image src={icon2} alt={''}/>
                            </Flex>
                            <Text className={styles.iconTitle}>
                                Качевство
                            </Text>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Box>
                            <Flex justify={'center'}>
                                <Image src={icon3} alt={''}/>
                            </Flex>
                            <Text className={styles.iconTitle}>
                                Увеличение молока
                            </Text>
                        </Box>
                    </Grid.Col>
                </Grid>
            </Box>

            <Box className={cl(styles.product, styles.box)}>
                <Text component={'h2'} className={cl(styles.title, styles.productTitle)}>Видео обзор</Text>

                <div className={styles.videoWrapper}>
                    <Player
                        playsInline={false}
                        poster={
                            'videoImg'
                        }
                        fluid={false}
                        src={'https://adm.buffalo.uz/videos/video_mq.mp4'}
                        height={400}
                        width={600}
                        aspectRatio={'16:9'}
                    >
                        <BigPlayButton position="center"/>
                    </Player>
                </div>

            </Box>

            <Modal opened={opened} onClose={close} withCloseButton={false} centered classNames={{
                root: styles.modalRoot,
                overlay: styles.modalOverlay,
                body: styles.modalBody
            }}
                   size={'35.81rem'}
            >
                <Flex className={styles.modalHeader} justify={'space-between'}>
                    <Text component={'p'} className={styles.modalHeaderTitle}>
                        Vidpremium.uz
                    </Text>
                    <ActionIcon onClick={
                        () => {
                            close()
                        }
                    }>
                        <Image src={iconClose} alt={''}/>
                    </ActionIcon>
                </Flex>
                <Flex direction={'column'} gap={'1rem'} className={styles.modalContent}>
                    <Input.Wrapper label="ФИО" required classNames={{
                        label: styles.modalInputLabel
                    }}>
                        <Input<any>
                            placeholder="Введите фио"
                            className={styles.modalInput}
                        />
                    </Input.Wrapper>
                    <Input.Wrapper label="Тел.номер" required>
                        <Input<any>
                            placeholder="+998"
                            className={styles.modalInput}
                        />
                    </Input.Wrapper>
                    <Button className={styles.productItemBtn}>
                        Заказать
                    </Button>
                </Flex>
            </Modal>

        </Box>
    );
}
