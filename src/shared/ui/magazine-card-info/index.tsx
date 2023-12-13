import React, {FC} from 'react';
import styles from './magazine-card-info.module.scss'
import IconLocation from "../../../../public/images/magzine/location.svg";
import IconTime from "../../../../public/images/magzine/clock.svg";
import IconCall from "../../../../public/images/magzine/call.svg";
import {Box, Flex, Text} from "@mantine/core";
import cl from "classnames";

interface MagazineCardInfoIProps {
    title: string
    time: string
    active?: boolean
    phone?: string
    onClick?: () => void
}

export const MagazineCardInfo: FC<MagazineCardInfoIProps> = ({title, time, phone, active, onClick}) => {
    return (
        <>
            <Box className={cl(styles.magazineMapCard, [active && styles.active])} onClick={onClick}>
                <Flex gap={'0 0.75rem'} align={'flex-start'}>
                    <Box>
                        <IconLocation/>
                    </Box>
                    <Flex direction={'column'} gap={'1rem 0'}>
                        <Text className={styles.magazineMapCardTitle}>
                            {title}
                        </Text>
                        <Flex gap={'0 1rem'}>
                            <Text className={styles.magazineMapCardSubTitle}>
                                <IconTime/>
                                {time}
                            </Text>
                            <Text className={styles.magazineMapCardSubTitle}>
                                <IconCall/>
                                {phone}
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
};
