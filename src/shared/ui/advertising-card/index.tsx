import React, {FC} from 'react';
import styles from './advertising.module.scss';
import {Text} from '@mantine/core';
import Image from "next/image";
import cl from "classnames";


interface MostViewedIProps {
    className?: string;
    image?: any;
    title?: string | boolean;
    catalogTitle?: boolean;
    catalogInfo?: string;
    catalogSubTitle?: boolean;
    catalogDesc?: string;
    advertisingBg?: string;
}

export const AdvertisingCard: FC<MostViewedIProps> = ({
                                                          className,
                                                          image,
                                                          title = false,
                                                          catalogTitle = false,
                                                          catalogInfo,
                                                          catalogSubTitle,
                                                          catalogDesc = false,
                                                          advertisingBg = false
                                                      }) => {
    return (
        <div className={cl(styles.advertising, [advertisingBg === 'black' && styles.advertisingCatalog,], className)}>
            {
                title && <Text className={styles.advertisingTitle}>
                    {title}
                </Text>
            }
            {
                catalogTitle && <Text className={styles.advertisingTitleCatalog}>
                    {catalogInfo}
                </Text>
            }
            {
                catalogSubTitle && <Text className={styles.advertisingSubTitleCatalog}>
                    {catalogDesc}
                </Text>
            }
            <div className={styles.advertisingImage}>
                <Image src={image} alt={'phone'}/>
            </div>
        </div>
    );
};

