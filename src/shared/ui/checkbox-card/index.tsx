import React, {FC} from 'react';
import styles from "./checkbox-card.module.scss";
import cl from "classnames";
import {Flex, Text} from "@mantine/core";

interface CheckboxCardIProps {
    active?: boolean;
    label: string;
    className?: string;
}

export const CheckboxCard: FC<CheckboxCardIProps> = ({active, label, className}) => {
    return (
        <div className={styles.productViewsCheckbox}>
            <div className={cl(styles.checkbox, styles.active, [styles.active && active], className)}>
                <div className={styles.point}/>
                <Flex align={'center'}>
                    <Text component={'p'} className={styles.productViewsCheckboxTitle}>
                        {label}
                    </Text>
                </Flex>
            </div>
        </div>
    );
};
