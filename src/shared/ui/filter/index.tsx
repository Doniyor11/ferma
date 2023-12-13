import React, {FC} from 'react';
import styles from './filter.module.scss'
import {Anchor, Button, Checkbox, Flex, Input, RangeSlider, Spoiler, Text} from "@mantine/core";
import IconSearch from 'public/images/catalog/search-normal.svg';
import cl from "classnames";

interface FilterIProps {
    search?: boolean;
    rangeSlider?: boolean;
    title?: string;
}

export const Filter: FC<FilterIProps> = ({search, rangeSlider, title}) => {

    const [show, setShow] = React.useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    // valueLabelFormat function user for product price range slider

    const valueLabelFormat = (v: any) => {
        return `$${v}`;
    }

    return (
        <div className={styles.filterWrapper}>
            <div className={styles.filterWrapperHeader}>
                <Text component={'p'} className={styles.filterWrapperTitle}>{title}</Text>
                {
                    search && <Input placeholder={'Найти'} icon={<IconSearch/>} className={styles.filterWrapperInput}/>
                }
            </div>

            <div className={cl(styles.filterWrapperCheckboxContainer, [show && styles.show])}>
                <div className={styles.filterWrapperCheckboxWrapper}>
                    <Checkbox label={'Apple'} className={styles.filterWrapperCheckbox} classNames={{
                        label: styles.filterWrapperLabel,
                        inner: styles.filterWrapperInner,
                        body: styles.filterWrapperBody,
                    }}/>
                    <Text className={styles.filterWrapperNumber}>
                        145
                    </Text>
                </div>
                <div className={styles.filterWrapperCheckboxWrapper}>
                    <Checkbox label={'Samsung'} className={styles.filterWrapperCheckbox} classNames={{
                        label: styles.filterWrapperLabel,
                        inner: styles.filterWrapperInner,
                        body: styles.filterWrapperBody,
                    }}/>
                    <Text className={styles.filterWrapperNumber}>
                        145
                    </Text>
                </div>
                <div className={styles.filterWrapperCheckboxWrapper}>
                    <Checkbox label={'Apple'} className={styles.filterWrapperCheckbox} classNames={{
                        label: styles.filterWrapperLabel,
                        inner: styles.filterWrapperInner,
                        body: styles.filterWrapperBody,
                    }}/>
                    <Text className={styles.filterWrapperNumber}>
                        145
                    </Text>
                </div>
                <div className={styles.filterWrapperCheckboxWrapper}>
                    <Checkbox label={'Samsung'} className={styles.filterWrapperCheckbox} classNames={{
                        label: styles.filterWrapperLabel,
                        inner: styles.filterWrapperInner,
                        body: styles.filterWrapperBody,
                    }}/>
                    <Text className={styles.filterWrapperNumber}>
                        145
                    </Text>
                </div>
                <div className={styles.filterWrapperCheckboxWrapper}>
                    <Checkbox label={'Apple'} className={styles.filterWrapperCheckbox} classNames={{
                        label: styles.filterWrapperLabel,
                        inner: styles.filterWrapperInner,
                        body: styles.filterWrapperBody,
                    }}/>
                    <Text className={styles.filterWrapperNumber}>
                        145
                    </Text>
                </div>
                <div className={styles.filterWrapperCheckboxWrapper}>
                    <Checkbox label={'Samsung'} className={styles.filterWrapperCheckbox} classNames={{
                        label: styles.filterWrapperLabel,
                        inner: styles.filterWrapperInner,
                        body: styles.filterWrapperBody,
                    }}/>
                    <Text className={styles.filterWrapperNumber}>
                        145
                    </Text>
                </div>
                <div className={styles.filterWrapperCheckboxWrapper}>
                    <Checkbox label={'Apple'} className={styles.filterWrapperCheckbox} classNames={{
                        label: styles.filterWrapperLabel,
                        inner: styles.filterWrapperInner,
                        body: styles.filterWrapperBody,
                    }}/>
                    <Text className={styles.filterWrapperNumber}>
                        145
                    </Text>
                </div>
                <div className={styles.filterWrapperCheckboxWrapper}>
                    <Checkbox label={'Samsung'} className={styles.filterWrapperCheckbox} classNames={{
                        label: styles.filterWrapperLabel,
                        inner: styles.filterWrapperInner,
                        body: styles.filterWrapperBody,
                    }}/>
                    <Text className={styles.filterWrapperNumber}>
                        145
                    </Text>
                </div>
            </div>

            <Anchor className={styles.filterWrapperShowText} onClick={handleShow}>
                {show ? 'Скрыть' : 'Показать все'}
            </Anchor>

            {
                rangeSlider && <>
                    <Text component={'p'} className={styles.filterWrapperPrice}>
                        Емкость аккумлятора, мАч
                    </Text>
                    <Flex justify={'space-between'} align={'center'} gap={'0 0.38rem'}>
                        <Input placeholder={'От'} className={styles.filterWrapperPriceInput}/>
                        <Text component={'span'} className={styles.filterWrapperPriceLine}/>
                        <Input placeholder={'До'} className={styles.filterWrapperPriceInput}/>
                    </Flex>
                    <RangeSlider
                        py="xl"
                        step={1}
                        min={2}
                        max={30}
                        label={valueLabelFormat}
                        classNames={{
                            root: styles.filterWrapperRangeSlider,
                            bar: styles.filterWrapperRangeSliderBar,
                            thumb: styles.filterWrapperRangeSliderThumb,
                        }}
                    />
                </>
            }

            <Button variant={'outline'} className={styles.filterOutline}>
                Сбросить фильтры
            </Button>
        </div>
    );
};
