import React from 'react';
import styles from './subscribe.module.scss'
import {Button, Flex, Input, Modal, Text} from "@mantine/core";
import EmailIcon from '../../../../public/images/home/email-ver.png';
import {useDisclosure} from "@mantine/hooks";
import Image from "next/image";
export const Subscribe = () => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
       <>
           <section className={styles.subscribe}>
               <Text component={'p'} className={styles.subscribeTitle}>Выгода с доставкой</Text>
               <Text component={'p'} className={styles.subscribeSubTitle}>Подпишитесь и получайте промокоды, акции
                   и подборки
                   товаров на свою почту.</Text>
               <Flex className={styles.subscribeInputWrapper}>
                   <Input placeholder={'Введите e-mail'} className={styles.subscribeInput}/>
                   <Button className={styles.subscribeBtn} onClick={open}>
                       Подписаться
                   </Button>
               </Flex>
               <Text component={'p'} className={styles.subscribeDesc}>
                   Нажимая «Подписаться» вы соглашаетесь с <Text component={'span'}>
                   Условиями использования сайта и Политикой обработки персональных данных.
               </Text>
               </Text>
           </section>
           <Modal opened={opened} onClose={close} centered withCloseButton={false}
            classNames={{
                body: styles.modalBody,
            }}
           >
               <Flex direction={'column'} align={'center'}>
                   <Image src={EmailIcon} alt={'Email Icon'} className={styles.modalIcon}/>
                   <Text component={'p'} className={styles.modalTitle}>Вы успешно подписались</Text>
                   <Text component={'p'} className={styles.modalSubTitle}>Мы отправили вам на почту письмо </Text>
                   <Button className={styles.subscribeModalBtn} fullWidth>
                       На главную
                   </Button>
               </Flex>
           </Modal>
       </>
    );
};
