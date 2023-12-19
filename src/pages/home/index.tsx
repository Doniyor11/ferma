import {useDisclosure, useMediaQuery, useWindowScroll} from '@mantine/hooks';
// import Head from 'next/head';
import 'video-react/dist/video-react.css';
import styles from './index.module.scss';
import Image from 'next/image';

import {useRouter} from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import aboutImage from '../../../public/images/about.jpg';
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
import iconPhone from '../../../public/images/phone.png';
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
import {ActionIcon, Box, Button, Flex, Grid, Input, Modal, Table, Text} from "@mantine/core";
import cl from "classnames";
import Link from "next/link";

const elements = [
    {name: 'Состав',},
    {name: 'Кальций', symbol: '14,0', mass: '%'},
    {name: 'Фосфор', symbol: '3,2', mass: '%'},
    {name: 'Натрий', symbol: '9,0', mass: '%'},
    {name: 'Магний', symbol: '3,0', mass: '%'},
    {name: 'Продукт ферментации дрожжей Saccharomyces cerevisiae инактив.', },
    {name: 'Витамин А', symbol: '1 100 000', mass: 'мг'},
    {name: 'Витамин D3', symbol: '110 000', mass: 'мг'},
    {name: 'Витамин Е', symbol: '4 000', mass: 'мг'},
    {name: 'Витамины группы Б', symbol: 'да', mass: ''},
    {name: 'Марганец', symbol: '4 500', mass: 'мг'},
    {name: 'Цинк', symbol: '6 000', mass: 'мг'},
    {name: 'Медь', symbol: '600', mass: 'мг'},
    {name: 'Кобальт', symbol: '60', mass: 'мг'},
    {name: 'Йод', symbol: '150', mass: 'мг'},
    {name: 'Селен', symbol: '35', mass: 'мг'},
];


const rows = elements.map((element) => (
    <tr key={element.name}>
        <td>{element.name}</td>
        <td>{element.symbol}</td>
        <td>{element.mass}</td>
    </tr>
));


export default function Home() {
    const navigate = useRouter();
    const matches = useMediaQuery('(max-width: 992px)');
    const matchesM = useMediaQuery('(max-width: 845px)');
    const matchesS = useMediaQuery('(max-width: 576px)');
    const {t} = useTranslation('common');
    const [scroll, scrollTo] = useWindowScroll();
    const [opened, {open, close}] = useDisclosure(false);

    const [openedMore, {open: openMore, close: closeMore}] = useDisclosure(false);

    return (
        <Box className={styles.container}>
            <Box className={styles.heroWrapper}>
                <Box className={styles.heroWrapperInfo}>
                    <Text component={'h1'} className={styles.heroWrapperTitle}>«Кормовые добавки и Технологии
                        Кормления»</Text>
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
                <Flex align={'center'} justify={'space-between'} className={styles.productTitleHead}>
                    <Text component={'h2'} className={cl(styles.title,)}>Наша продукция</Text>
                    <Link href={'tel:+998712000000'} className={styles.productLink}>
                        <Image src={iconPhone} alt={''}/>
                        Консультации по кормлению
                    </Link>
                </Flex>
                <Grid gutter={50}>
                    <Grid.Col span={4}>
                        <Box className={styles.productItem}>
                            <Flex justify={'center'}>
                                <Image src={productImage1} alt={''} width={130}/>
                            </Flex>
                            <Text component={'h3'} className={styles.productItemTitle}>Витаминно-минеральный премикс для
                                высокопродуктивных дойных коров</Text>
                            <Text component={'p'} className={styles.productItemDesc}>
                                Витаминно-минеральный премикс для высокопродуктивных дойных коров
                                Профессионально сбалансированный рецепт для высокопродуктивных дойных коров после
                                оттела. Использование продукта гарантирует всестороннее удовлетворение потребностей
                                животных в витаминах микро и макроэлементах, снижает вероятность заболеваний, связанные
                                с нарушением обмена веществ, улучшает рубцовое пищеварение и конверсию корма.

                            </Text>
                            <Text className={styles.productItemLink} onClick={openMore}>
                                Подробнее
                                <Image src={iconArrow} alt={''}/>
                            </Text>
                            <Button className={styles.productItemBtn} onClick={open}>
                                Заказать
                            </Button>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Box className={styles.productItem}>
                            <Flex justify={'center'}>
                                <Image src={productImage1} alt={''} width={130}/>
                            </Flex>
                            <Text component={'h3'} className={styles.productItemTitle}>Витаминно-минеральный премикс для
                                высокопродуктивных дойных коров +копыта</Text>
                            <Text component={'p'} className={styles.productItemDesc}>
                                Витаминно-минеральный премикс для высокопродуктивных дойных коров+копыта
                                Профессионально сбалансированный рецепт для высокопродуктивных дойных коров после оттела
                                для профилактики и лечения коров с проблемными копытами. Использование продукта
                                гарантирует всестороннее удовлетворение потребностей животных в витаминах микро и
                                макроэлементах, снижает вероятность заболеваний, связанные с нарушением обмена веществ,
                                улучшает рубцовое пищеварение и конверсию корма, а также улучшает кровообращение в
                                копытах, тем самым улучшая их состояние.
                            </Text>
                            <Text className={styles.productItemLink}>
                                Подробнее
                                <Image src={iconArrow} alt={''}/>
                            </Text>
                            <Button className={styles.productItemBtn} onClick={open}>
                                Заказать
                            </Button>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Box className={styles.productItem}>
                            <Flex justify={'center'}>
                                <Image src={productImage1} alt={''} width={'130'}/>
                            </Flex>
                            <Text component={'h3'} className={styles.productItemTitle}>Витаминно-минеральный премикс для
                                дойных коров в сухостое</Text>
                            <Text component={'p'} className={styles.productItemDesc}>
                                Витаминно-минеральный премикс для дойных коров в сухостое
                                Профессионально сбалансированный рецепт для высокопродуктивных дойных коров в период
                                сухостоя. Использование продукта гарантирует всестороннее удовлетворение потребностей
                                животных в витаминах микро и макроэлементах, снижает вероятность заболеваний, связанные
                                с нарушением обмена веществ в период до оттела и в момент оттела. Обеспечивает качество
                                приплода и высокие уровни надоев во время лактации
                            </Text>
                            <Text className={styles.productItemLink}>
                                Подробнее
                                <Image src={iconArrow} alt={''}/>
                            </Text>
                            <Button className={styles.productItemBtn} onClick={open}>
                                Заказать
                            </Button>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Box className={styles.productItem}>
                            <Flex justify={'center'}>
                                <Image src={productImage1} alt={''} width={130}/>
                            </Flex>
                            <Text component={'h3'} className={styles.productItemTitle}>Витаминно-минеральный премикс для
                                телят до 6 мес.</Text>
                            <Text component={'p'} className={styles.productItemDesc}>
                                Витаминно-минеральный премикс для телят до 6 мес.
                                Профессионально сбалансированный рецепт для телят. Использование продукта гарантирует
                                всестороннее развитие, удовлетворение потребностей в витаминах микро и макроэлементах,
                                способствует развитию рубца, увеличению потребления сухого вещества и рост телят.
                            </Text>
                            <Text className={styles.productItemLink}>
                                Подробнее
                                <Image src={iconArrow} alt={''}/>
                            </Text>
                            <Button className={styles.productItemBtn} onClick={open}>
                                Заказать
                            </Button>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Box className={styles.productItem}>
                            <Flex justify={'center'}>
                                <Image src={productImage1} alt={''} width={130}/>
                            </Flex>
                            <Text component={'h3'} className={styles.productItemTitle}>Витаминно-минеральный премикс для
                                телок и нетелей</Text>
                            <Text component={'p'} className={styles.productItemDesc}>
                                Витаминно-минеральный премикс для телок и нетелей
                                Профессионально сбалансированный рецепт для телек и нетелей гарантирует всестороннее
                                удовлетворение потребностей животных в витаминах микро и макроэлементах, быстрый рост и
                                нормативные кондиции тела телок, своевременное и качественное развитие репродуктивных
                                функций.
                            </Text>
                            <Text className={styles.productItemLink}>
                                Подробнее
                                <Image src={iconArrow} alt={''}/>
                            </Text>
                            <Button className={styles.productItemBtn} onClick={open}>
                                Заказать
                            </Button>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Box className={styles.productItem}>
                            <Flex justify={'center'}>
                                <Image src={productImage1} alt={''} width={130}/>
                            </Flex>
                            <Text component={'h3'} className={styles.productItemTitle}>Витаминно-минеральный премикс для
                                бычков на откорме</Text>
                            <Text component={'p'} className={styles.productItemDesc}>
                                Витаминно-минеральный премикс для бычков на откорме
                                Профессионально сбалансированный рецепт для бычков на откорме гарантирует всестороннее
                                удовлетворение потребностей животных в витаминах микро и макроэлементах, снижает
                                вероятность ацидоза при откорме с большим количеством зерновых, улучшает рубцовое
                                пищеварение, увеличивает потребление сухого вещества, обеспечивает большие привесы.
                            </Text>
                            <Text className={styles.productItemLink}>
                                Подробнее
                                <Image src={iconArrow} alt={''}/>
                            </Text>
                            <Button className={styles.productItemBtn} onClick={open}>
                                Заказать
                            </Button>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Box className={styles.productItem}>
                            <Flex justify={'center'}>
                                <Image src={productImage1} alt={''} width={130}/>
                            </Flex>
                            <Text component={'h3'} className={styles.productItemTitle}>Стартерные корма для телят</Text>
                            <Text component={'p'} className={styles.productItemDesc}>
                                Стартерные корма для телят до 90 дня
                                Профессионально сбалансированные рецептуры гарантируют всестороннее удовлетворение
                                потребностей телят в питательных веществах, способствуют хорошему развитию рубца и всего
                                пищеварительного тракта. Использование стартерных кормов помогает раньше и легче
                                перевести телята от выпойки молока к основным рационам при это достигая веса телят не
                                менее 110–120 кг на 90 день.
                            </Text>
                            <Link href={''} className={styles.productItemLink}>
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
                <Text component={'h2'} className={cl(styles.title, styles.productTitle)}>Наши сервисные услуги</Text>
                <Grid gutter="xl">
                    <Grid.Col span={6}>
                        <Box>
                            <Flex justify={'center'}>
                                <Image src={icon1} alt={''}/>
                            </Flex>
                            <Text className={styles.iconTitle}>
                                Составление расходные кормление
                            </Text>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Box>
                            <Flex justify={'center'}>
                                <Image src={icon2} alt={''}/>
                            </Flex>
                            <Text className={styles.iconTitle}>
                                Подготовка схема выращивания телят до нитья
                            </Text>
                        </Box>
                    </Grid.Col>
                </Grid>
            </Box>

            <Box className={cl(styles.product, styles.box,)}>
                <Text component={'h2'} className={cl(styles.title, styles.productTitle)}>ветеринарный препараты</Text>
                <Grid gutter={50} className={styles.opacity}>
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
                            <Link href={''} className={styles.productItemLink}>
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
                            <Link href={''} className={styles.productItemLink}>
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
                            <Link href={''} className={styles.productItemLink}>
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
                            <Link href={''} className={styles.productItemLink}>
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
                            <Link href={''} className={styles.productItemLink}>
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
                            <Link href={''} className={styles.productItemLink}>
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

            <Box className={cl(styles.product, styles.box,)}>
                <Text component={'h2'} className={cl(styles.title, styles.productTitle)}>Ветеринарный препарат
                    кормовые</Text>
                <Grid gutter={50} className={styles.opacity}>
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
                            <Link href={''} className={styles.productItemLink}>
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
                            <Link href={''} className={styles.productItemLink}>
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
                            <Link href={''} className={styles.productItemLink}>
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
                            <Link href={''} className={styles.productItemLink}>
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
                            <Link href={''} className={styles.productItemLink}>
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
                            <Link href={''} className={styles.productItemLink}>
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

            //

            <Modal opened={openedMore} onClose={closeMore} withCloseButton={false} centered classNames={{
                root: styles.modalRoot,
                overlay: styles.modalOverlay,
                body: styles.modalBody
            }}
                   size={'75rem'}
            >
                <Flex className={styles.modalHeader} justify={'space-between'}>
                    <Text component={'p'} className={styles.modalHeaderTitle}>
                        Vidpremium.uz
                    </Text>
                    <ActionIcon onClick={closeMore}>
                        <Image src={iconClose} alt={''}/>
                    </ActionIcon>
                </Flex>
                <Box p={'0.75rem 1.25rem'}>
                    <Grid>
                        <Grid.Col span={4}>
                            <Flex direction={'column'} gap={'1.5rem'} className={styles.productMoreImage} pb={'1.5rem'}>
                                <Flex justify={'center'}>
                                    <Image src={productImage1} alt={''} width={130}/>
                                </Flex>
                                <Text component={'h3'} className={styles.productMoreTitle}>Кормовая энергетическая
                                    добавка <br/>
                                    «Катозол»</Text>
                                <Box>
                                    <Text component={'p'} className={styles.productMoreInfo}>
                                        Производитель:
                                    </Text>
                                    <Text component={'p'} className={styles.productMoreInfoDesc}>
                                        ООО “AVORA BIOTECH”,Узбекистан
                                    </Text>
                                </Box>
                            </Flex>
                        </Grid.Col>
                        <Grid.Col span={8}>
                            <Flex direction={'column'} gap={'0.75rem'}>
                                <Text component={'p'} className={styles.productMoreBodyTitle}>
                                    Витаминно-минеральный премикс для высокопродуктивных дойных коров
                                </Text>
                                <Text component={'p'} className={styles.productMoreBodyDesc}>
                                    Профессионально сбалансированный рецепт для высокопродуктивных дойных коров после
                                    оттела. Использование продукта гарантирует всестороннее удовлетворение потребностей
                                    животных в витаминах микро и макроэлементах, снижает вероятность заболеваний,
                                    связанные с нарушением обмена веществ, улучшает рубцовое пищеварение и конверсию
                                    корма.
                                </Text>
                                <Box>
                                    <Text component={'p'} className={styles.productMoreBodyTableTitle}>
                                        Показатели
                                    </Text>
                                    <Table withBorder>
                                        <tbody>{rows}</tbody>
                                    </Table>
                                </Box>
                            </Flex>
                        </Grid.Col>
                    </Grid>
                </Box>
            </Modal>

        </Box>
    );
}
