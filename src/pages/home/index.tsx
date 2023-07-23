// Styles
import { Button } from '@/styles/Buttons';
import { Container, Flex } from '@/styles/Global';
import { Text } from '@/styles/Text';

// Components
import { Contacts } from '@/components/Contacts';
import { Project } from '@/components/Project';
import { Stack } from '@/components/Stack';

// Data
import { stackData } from '@/utils/stackData';
import { userData } from '@/utils/userData';

import { FaGithub } from 'react-icons/fa';

// Page Style
import {
  Header,
  HeaderButtonsArea,
  HeaderContent,
  ProjectAreaWrapperColumns,
  ProjectsArea,
  ProjectsAreaContent,
  ProjectsAreaSocialMediaMessage,
  StackCards,
  UserImage,
} from './style';

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;

  return (
    <main id='home'>
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={'48px'}
                height={'48px'}
              />
              <Text color='grey4'>Olá, eu sou o {userData.nameUser} :)</Text>
            </Flex>
            <Text as='h1' type='heading1' color='grey5'>
              <Text as='span' type='heading1' color='brand1'>
                Full Stack
              </Text>{' '}
              Developer{' '}
            </Text>
            <Text type='body1' color='grey2'>
              Desenvolvedor Full Stack com habilidades front-end e back-end,
              capaz de criar aplicações completas e escaláveis para diversas
              plataformas.
            </Text>
            <HeaderButtonsArea>
              <Button as='a' type='primary' href='#projects'>
                Projetos
              </Button>
              <Button
                color='grey5'
                as='a'
                css={{ '&:hover': { color: '$grey1' } }}
                type='circle'
                target='_blank'
                href={gihubUrl}>
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id='projects'>
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as='h2' type='heading4' color='grey4'>
                My projects
              </Text>
              <Text as='p' type='body1' color='grey2'>
                Some of my{' '}
                <Text as='span' color='brand5'>
                  side projects
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
