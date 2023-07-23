import { Container } from '@/styles/Global';
import { Text } from '@/styles/Text';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

import {
  ContactCard,
  ContactCardContent,
  ContactCardImage,
  ContactSection,
  ContactSectionContent,
  ContactSectionText,
  ContactsCards,
} from './style';

import { userData } from '@/utils/userData';
import { useRef } from 'react';
import { FaEnvelopeOpen, FaLinkedin } from 'react-icons/fa';

export const Contacts = () => {
  const ref = useRef(null);

  const linkedInUrl = `https://www.linkedin.com/in/${userData.linkedinUser}`;

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 0.9]);

  return (
    <ContactSection id='contact'>
      <Container>
        <ContactSectionContent ref={ref}>
          <motion.div style={{ scale }}>
            <ContactSectionText>
              <Text type='heading2' color='grey4'>
                Vamos conversar e{' '}
                <Text as='span' type='heading2' color='brand1'>
                  desenvolver soluções para a sua empresa
                </Text>
                , juntos!
              </Text>
            </ContactSectionText>
          </motion.div>
          <ContactsCards>
            <ContactCard>
              <ContactCardImage className='email'>
                <FaEnvelopeOpen color='#fff' size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type='heading4' color='grey4'>
                  Email
                </Text>
                <Text color='grey2' type='body2'>
                  Feedbacks ou sugestões ?
                </Text>

                <Text
                  as='a'
                  color='grey2'
                  type='body2'
                  target='_blank'
                  href={`mailto:${userData.emailUser}`}>
                  Envie-me um email
                </Text>
              </ContactCardContent>
            </ContactCard>
            <ContactCard>
              <ContactCardImage className='linkedin'>
                <FaLinkedin color='#fff' size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type='heading4' color='grey4'>
                  LinkedIn
                </Text>
                <Text color='grey2' type='body2'>
                  Quer expandir suas conexões e ficar por dentro do meu
                  desenvolvimento ?
                </Text>
                <Text
                  as='a'
                  color='grey2'
                  type='body2'
                  target='_blank'
                  href={linkedInUrl}>
                  Encontre-me no LinkedIn
                </Text>
              </ContactCardContent>
            </ContactCard>
          </ContactsCards>
        </ContactSectionContent>
      </Container>
    </ContactSection>
  );
};
