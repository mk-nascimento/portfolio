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
              Thank you! {/* <HandEffect /> */}
            </Text>
            <Text type='body1' color='grey2'>
              Me encontre nas redes e vamos bater um papo
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
