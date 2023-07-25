import { UserImage } from '@/pages/home/style';
import { Button } from '@/styles/Buttons';
import { Box, Container, Flex } from '@/styles/Global';
import { Text } from '@/styles/Text';
import { userData } from '@/utils/userData';
import { FaLinkedinIn } from 'react-icons/fa';
import { Footer as FooterWrapper } from './style';
// import { HandEffect } from "../HandEffect";

export const Footer = (): JSX.Element => {
  return (
    <FooterWrapper id='social-media'>
      <Container>
        <Flex>
          <UserImage
            src={`https://github.com/${userData.githubUser}.png`}
            alt={userData.nameUser}
            title={userData.nameUser}
            width={'70px'}
            height={'70px'}
          />
          <Box css={{ marginLeft: '$2' }}>
            <Text type='heading4' color='grey5' css={{ marginBottom: '$2' }}>
              Sobre Mim! {/* <HandEffect /> */}
            </Text>
            <Text type='body1' color='grey2'>
              "Curioso nato, comecei desmontando brinquedos para saber como
              funcionavam.
              <br />
              Avancei para o hardware no meu primeiro computador, que fui logo
              desmontando, me aprofundando em hardware. <br />
              Desenvolvi a curiosidade também pelo mundo de software e
              desenvolvimento, e assim quis me tornar um desenvolvedor.
              <br />
              Como nem tudo é só conhecimento, nas horas livres gosto de jogar,
              desde jogos simples até FPS."
              <br />
              <br />
              Siga-me no LinkedIn e vamos expandir nossa rede!
            </Text>
          </Box>
        </Flex>
        <Flex
          css={{
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '$2',
          }}>
          <Button
            className='linkedin'
            type='circle'
            as='a'
            target='_blank'
            href={`https://linkedin.com/in/${userData.linkedinUser}`}>
            <FaLinkedinIn />
          </Button>
        </Flex>
      </Container>
    </FooterWrapper>
  );
};
