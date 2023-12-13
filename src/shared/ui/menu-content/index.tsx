import React from 'react';
import styles from './menu-content.module.scss'
import {Text} from "@mantine/core";
import Link from "next/link";

export const MenuContent = () => {
    return (
        <div className={styles.menuContentWrapper}>
            <Text component={'p'} className={styles.menuContentWrapperTitle}>Смартфоны</Text>
            <ul className={styles.menuContentWrapperUl}>
                <li className={styles.menuContentWrapperLi}>
                    <Link href={'/catalog'} className={styles.menuContentWrapperLink}>
                        Смартфоны
                    </Link>
                </li>
            </ul>
        </div>
    );
};
