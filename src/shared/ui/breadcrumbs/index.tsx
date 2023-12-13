import React, {FC} from 'react';
import styles from './breadcrumbs.module.scss'
import IconBreadcrumb from "../../../../public/images/menu/breadcrumbs-icon.svg";
import {Anchor, Breadcrumbs as BreadcrumbsCustom} from "@mantine/core";

interface BreadcrumbsIProps {
    items?: Array<{ title: string, href: string }>
}

export const Breadcrumbs: FC<BreadcrumbsIProps> = ({}) => {
    const items = [
        {title: 'Главная', href: '#'},
        {title: 'Смартфоны и гаджеты', href: '#'},
        {title: 'Смартфоны', href: '#'},
    ].map((item, index) => (
        <Anchor href={item.href} key={index}>
            {item.title}
        </Anchor>
    ));
    return (
        <>
            <BreadcrumbsCustom separator={<IconBreadcrumb/>} classNames={{
                separator: styles.breadcrumbsSeparator,
                breadcrumb: styles.breadcrumbsItem,
                root: styles.breadcrumbs
            }}>{items}</BreadcrumbsCustom>
        </>
    );
};
