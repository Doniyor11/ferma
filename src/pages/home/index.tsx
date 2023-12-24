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
    {name: 'Продукт ферментации дрожжей Saccharomyces cerevisiae инактив.',},
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

const product = [
    {
        id: 1,
        img: productImage1,
        title: 'Витаминно-минеральный премикс для высокопродуктивных дойных коров',
        desc: 'Витаминно-минеральный премикс для высокопродуктивных дойных коров\n' +
            'Профессионально сбалансированный рецепт для высокопродуктивных дойных коров после\n' +
            'оттела. Использование продукта гарантирует всестороннее удовлетворение потребностей\n' +
            'животных в витаминах микро и макроэлементах, снижает вероятность заболеваний, связанные\n' +
            'с нарушением обмена веществ, улучшает рубцовое пищеварение и конверсию корма.',

    },
    {
        id: 2,
        img: productImage1,
        title: 'Витаминно-минеральный премикс для\n' +
            '                                высокопродуктивных дойных коров +копыта',
        desc: '   Витаминно-минеральный премикс для высокопродуктивных дойных коров+копыта\n' +
            '                                Профессионально сбалансированный рецепт для высокопродуктивных дойных коров после оттела\n' +
            '                                для профилактики и лечения коров с проблемными копытами. Использование продукта\n' +
            '                                гарантирует всестороннее удовлетворение потребностей животных в витаминах микро и\n' +
            '                                макроэлементах, снижает вероятность заболеваний, связанные с нарушением обмена веществ,\n' +
            '                                улучшает рубцовое пищеварение и конверсию корма, а также улучшает кровообращение в\n' +
            '                                копытах, тем самым улучшая их состояние.',

    },
    {
        id: 3,
        img: productImage1,
        title: 'Витаминно-минеральный премикс для\n' +
            '                                дойных коров в сухостое',
        desc: '   Витаминно-минеральный премикс для высокопродуктивных дойных коров+копыта\n' +
            '                                Профессионально сбалансированный рецепт для высокопродуктивных дойных коров после оттела\n' +
            '                                для профилактики и лечения коров с проблемными копытами. Использование продукта\n' +
            '                                гарантирует всестороннее удовлетворение потребностей животных в витаминах микро и\n' +
            '                                макроэлементах, снижает вероятность заболеваний, связанные с нарушением обмена веществ,\n' +
            '                                улучшает рубцовое пищеварение и конверсию корма, а также улучшает кровообращение в\n' +
            '                                копытах, тем самым улучшая их состояние.',

    },
    {
        id: 4,
        img: productImage1,
        title: 'Витаминно-минеральный премикс для\n' +
            '                                телят до 6 мес.',
        desc: ' Витаминно-минеральный премикс для телят до 6 мес.\n' +
            '                                Профессионально сбалансированный рецепт для телят. Использование продукта гарантирует\n' +
            '                                всестороннее развитие, удовлетворение потребностей в витаминах микро и макроэлементах,\n' +
            '                                способствует развитию рубца, увеличению потребления сухого вещества и рост телят.',
    },
    {
        id: 5,
        img: productImage1,
        title: 'Витаминно-минеральный премикс для\n' +
            '                                телок и нетелей',
        desc: ' Витаминно-минеральный премикс для телок и нетелей\n' +
            '                                Профессионально сбалансированный рецепт для телек и нетелей гарантирует всестороннее\n' +
            '                                удовлетворение потребностей животных в витаминах микро и макроэлементах, быстрый рост и\n' +
            '                                нормативные кондиции тела телок, своевременное и качественное развитие репродуктивных\n' +
            '                                функций.',
    },
    {
        id: 6,
        img: productImage1,
        title: 'Витаминно-минеральный премикс для\n' +
            '                                бычков на откорме',
        desc: '  Витаминно-минеральный премикс для бычков на откорме\n' +
            '                                Профессионально сбалансированный рецепт для бычков на откорме гарантирует всестороннее\n' +
            '                                удовлетворение потребностей животных в витаминах микро и макроэлементах, снижает\n' +
            '                                вероятность ацидоза при откорме с большим количеством зерновых, улучшает рубцовое\n' +
            '                                пищеварение, увеличивает потребление сухого вещества, обеспечивает большие привесы.',
    },
    {
        id: 7,
        img: productImage1,
        title: 'Стартерные корма для телят',
        desc: ' Стартерные корма для телят до 90 дня\n' +
            '                                Профессионально сбалансированные рецептуры гарантируют всестороннее удовлетворение\n' +
            '                                потребностей телят в питательных веществах, способствуют хорошему развитию рубца и всего\n' +
            '                                пищеварительного тракта. Использование стартерных кормов помогает раньше и легче\n' +
            '                                перевести телята от выпойки молока к основным рационам при это достигая веса телят не\n' +
            '                                менее 110–120 кг на 90 день.',
    },
    {
        id: 8,
        img: productImage1,
        title: 'Кормовая энергетическая добавка «Энерго Байпас»',
        desc: 'Кормовая энергетическая добавка с защищенным жиром, белком и прекурсором глюкозы «Энерго Байпас»\n' +
            '\n' +
            'Суть действия добавки заключается в том, что защищенные белки, жиры и сахара минуя рубец попадает в тонкие кишки, где сахара усваиваются как глюкоза, увеличивается количество неперевариваемого в рубце белка, а жир не затрудняя работу рубцовой микрофлоры увеличивает энергию лактации. Это очень актуально для коров 15 дней до отела и в первые 3 месяца после оттела, так как у них рубец не может переваривать большие количества крахмала, грубых и сочных кормов. Добавка также уменьшает риск кетоза.\n',
    },
    {
        id: 9,
        img: productImage1,
        title: 'Кормовая энергетическая добавка «Рубец»',
        desc: 'Кормовая энергетическая добавка для профилактики и лечения кетоза «Рубец»\n' +
            '\n' +
            'Добавка состоит из смеси солей пропионовой кислоты. Применяется для профилактики и лечения кетоза в период после оттела и в период отрицательной энергетики у дойных коров. Данная добавка восполняют в организме коровы необходимый уровень обменной энергии. Применяя ее в рационы у коров повышается молочная продуктивность, нормализуется обмен веществ, увеличивается количество глюкозы в организме, повышается оплодотворяемость животных, идет сокращение сервис периода. Она также способствует увеличению потребления сухого вещества\n'
    },
]


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
                    <Text component={'h2'} className={cl(styles.title,)}>Кормовые добавки</Text>
                    <Link href={'tel:+99898 879 80 08'} className={styles.productLink}>
                        <Image src={iconPhone} alt={''}/>
                        Консультации по кормлению
                    </Link>
                </Flex>
                {/*<Grid gutter={50}>*/}
                {/*    {*/}
                {/*        product.map((item, index) => (*/}
                {/*            <Grid.Col span={4} key={index}>*/}
                {/*                <Box className={styles.productItem}>*/}
                {/*                    <Flex justify={'center'}>*/}
                {/*                        <Image src={item.img} alt={''} width={130}/>*/}
                {/*                    </Flex>*/}
                {/*                    <Text component={'h3'} className={styles.productItemTitle}>{item.title}</Text>*/}
                {/*                    <Text component={'p'}*/}
                {/*                          className={styles.productItemDesc}>{item.desc}</Text>*/}
                {/*                    <Text className={styles.productItemLink} onClick={openMore}>*/}
                {/*                        Подробнее*/}
                {/*                        <Image src={iconArrow} alt={''}/>*/}
                {/*                    </Text>*/}
                {/*                    <Button className={styles.productItemBtn} onClick={open}>*/}
                {/*                        Заказать*/}
                {/*                    </Button>*/}
                {/*                </Box>*/}
                {/*            </Grid.Col>*/}
                {/*        ))*/}
                {/*    }*/}
                {/*    <Grid.Col span={12}>*/}
                {/*        <Button className={styles.productItemBtnMore} variant={'outline'} fullWidth>*/}
                {/*            Загрузить ещё*/}
                {/*        </Button>*/}
                {/*    </Grid.Col>*/}
                {/*</Grid>*/}
                <Text component={'p'} className={styles.noData}>в разработке</Text>
            </Box>

            <Box className={cl(styles.product, styles.box,)}>
                <Text component={'h2'} className={cl(styles.title, styles.productTitle)}>Ветеринарные препараты </Text>
                <Text component={'p'} className={styles.noData}>в разработке</Text>
            </Box>

            <Box className={cl(styles.product, styles.box)}>
                <Text component={'h2'} className={cl(styles.title, styles.productTitle)}>Наши сервисные услуги</Text>
                <Grid gutter="xl">
                    <Grid.Col span={6}>
                        <Box>
                            <Flex justify={'center'}>
                                <Image src={icon1} alt={''} width={300}/>
                            </Flex>
                            <Text className={styles.iconTitle}>
                                Составление рационов кормления
                            </Text>
                        </Box>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Box>
                            <Flex justify={'center'}>
                                <Image src={icon2} alt={''} width={300}/>
                            </Flex>
                            <Text className={styles.iconTitle}>
                                Подготовка схемы выращивания телят до нетелей
                            </Text>
                        </Box>
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
                                    {
                                        product.map((item, index) => (
                                            <Image src={
                                                // если id совпадает с id в url, то показываем эту картинку
                                                item.id === Number(navigate.query.id) ? item.img : ''
                                            } alt={''} width={130}/>
                                        ))
                                    }
                                </Flex>
                                <Text component={'h3'} className={styles.productMoreTitle}>{
                                    // если id совпадает с id в url, то показываем этот title
                                    product.map((item, index) => (
                                        item.id === Number(navigate.query.id) ? item.title : ''
                                    ))
                                }</Text>
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
                                <Box className={styles.productModeTable}>
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
                <Box p={'0.75rem 1.25rem'}>
                    <Grid>
                        <Grid.Col span={4}></Grid.Col>
                        <Grid.Col span={8}>
                            <Flex justify={'space-between'} align={'stretch'} gap={'0.5rem'}>
                                <Box className={styles.productMoreBtnItem}>
                                    <Link href={'tel:+99898 879 80 08'} className={styles.productItemPhone}>
                                        <Image src={iconPhone} alt={''}/>
                                        Консультации по кормлению
                                    </Link>
                                </Box>
                                <Box className={styles.productMoreBtnItem}>
                                    <Button className={styles.productItemBtn} fullWidth>
                                        Заказать
                                    </Button>
                                </Box>
                            </Flex>
                        </Grid.Col>
                    </Grid>
                </Box>

            </Modal>


        </Box>
    );
}
