import React, {FC, ReactNode} from 'react';
import styles from './menu-list.module.scss'
import IconArrow from '../../../../public/images/menu/arrow-right.svg'
import {Text} from "@mantine/core";

interface MenuListProps {
    label: string;
    icon: ReactNode;
    onclickList?: () => void;
}

export const MenuList: FC<MenuListProps> = ({
                                                label,
                                                icon,
                                                onclickList
                                            }) => {
    return (
        <div className={styles.menuListWrapper} onClick={onclickList}>
            <div className={styles.menuListWrapperInfo}>
                {icon}
                <Text component={'p'} className={styles.menuListWrapperLabel}>{label}</Text>
            </div>
            <IconArrow/>
        </div>
    );
};
