import React, {FC} from 'react';
import styles from './contact-form.module.scss'
import {Grid, Input, Text, Textarea} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";

interface ContactFormIProps {
    title?: string,
    subTitle?: string
}

export const ContactForm: FC<ContactFormIProps> = ({
                                                       title,
                                                       subTitle
                                                   }) => {
    const matches = useMediaQuery('(max-width: 845px)');
    return (
        <>
            <Text component={'p'} className={styles.contactWrapperFormTitle}>{title}</Text>
            {
                subTitle && <Text component={'p'} className={styles.contactWrapperFormSubTitle}>{subTitle}</Text>
            }
            <Grid>
                <Grid.Col span={
                    matches ? 12 : 6
                }>
                    <Input.Wrapper
                        id="input-demo"
                        withAsterisk
                        label="Имя"
                        error=""
                        classNames={{
                            label: styles.contactWrapperFormInputLabel,
                        }}
                    >
                        <Input id="input-demo" placeholder="Имя" className={styles.contactWrapperFormInput}/>
                    </Input.Wrapper>
                </Grid.Col>
                <Grid.Col span={
                    matches ? 12 : 6
                }>
                    <Input.Wrapper
                        id="input-demo"
                        withAsterisk
                        label="Фамилия"
                        error=""
                        classNames={{
                            label: styles.contactWrapperFormInputLabel,
                        }}
                    >
                        <Input id="input-demo" placeholder="Фамилия" className={styles.contactWrapperFormInput}/>
                    </Input.Wrapper>
                </Grid.Col>
                <Grid.Col span={
                    matches ? 12 : 6
                }>
                    <Input.Wrapper
                        id="input-demo"
                        withAsterisk
                        label="Номер телефона"
                        error=""
                        classNames={{
                            label: styles.contactWrapperFormInputLabel,
                        }}
                    >
                        <Input id="input-demo" placeholder="+998" className={styles.contactWrapperFormInput}/>
                    </Input.Wrapper>
                </Grid.Col>
                <Grid.Col span={
                    matches ? 12 : 6
                }>
                    <Input.Wrapper
                        id="input-demo"
                        withAsterisk
                        label="Email"
                        error=""
                        classNames={{
                            label: styles.contactWrapperFormInputLabel,
                        }}
                    >
                        <Input id="input-demo" placeholder="Email" className={styles.contactWrapperFormInput}/>
                    </Input.Wrapper>
                </Grid.Col>
                <Grid.Col span={12}>
                    <Textarea
                        placeholder="Текст"
                        label="Комментарии"
                        withAsterisk
                        className={styles.contactWrapperFormInput}
                        classNames={{
                            label: styles.contactWrapperFormInputLabel,
                        }}
                    />
                </Grid.Col>
            </Grid>
        </>
    );
};
