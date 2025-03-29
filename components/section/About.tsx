// react
import * as React from 'react';
// next
import Image from 'next/image';
// @mui
import {
  Box,
  BoxProps,
  Card,
  CardActions,
  CardActionsProps,
  CardProps,
  Grid,
  Skeleton,
  Typography,
  styled,
  CardContent,
  Collapse,
  useMediaQuery,
  useTheme,
} from '@mui/material';
// custom component
import FacebookIconLink from 'components/common/FacebookIconLink';
import InstagramIconLink from 'components/common/InstagramIconLink';
import ContainerGrid from 'components/common/ContainerGrid';
import ExpandMoreIconButton from 'components/common/ExpandMoreIconButton';
// type
interface AboutProps {}

const ImageWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '21rem',
  [theme.breakpoints.up(350)]: {
    height: '26rem',
  },
  [theme.breakpoints.up('sm')]: {
    height: '50vh',
  },
  [theme.breakpoints.up('md')]: {
    height: '100%',
  },
}));

const CustomContainer = styled(Box)<BoxProps>(({ theme }) => ({
  scrollMarginTop: '1rem',
  [theme.breakpoints.up('sm')]: {
    scrollMarginTop: '2rem',
  },
}));

const CustomCard = styled(Card)<CardProps>(({ theme }) => ({
  margin: '1rem',
  overflow: 'hidden',
  [theme.breakpoints.up('sm')]: {
    margin: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    height: 'fit-content',
  },
  [theme.breakpoints.up('lg')]: {
    height: '90vh',
  },
}));

const CustomCardActions = styled(CardActions)<CardActionsProps>(
  ({ theme }) => ({
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
    [theme.breakpoints.up('lg')]: {
      position: 'absolute',
      bottom: 0,
    },
  })
);

const About: React.FunctionComponent<AboutProps> = (props) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false);

  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'));

  React.useEffect(() => {
    if (isUpMd) setShowMore(true);
    else setShowMore(false);
  }, [isUpMd]);

  return (
    <CustomContainer id="sobre" mt={{ xs: 8, md: 0 }}>
      <CustomCard>
        <ContainerGrid sx={{ marginTop: 0, height: "100%" }}>
          <Grid item xs={12} md={6} style={{ padding: 0 }}>
            <ImageWrapper>
              <Image
                alt="Dra Karoline Maria"
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
                onLoad={() => setIsLoaded(true)}
                src="/home/karol_perfil_3.png"
              />
              {!isLoaded && (
                <Skeleton
                  variant="rectangular"
                  sx={{
                    backgroundColor: "currentcolor",
                    height: "100%",
                    position: "absolute",
                    width: "100%",
                  }}
                />
              )}
            </ImageWrapper>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{ padding: "2rem", position: "relative" }}
          >
            <Card
              sx={{ boxShadow: "none", height: "100%", position: "relative" }}
            >
              <Typography component="h2" variant="h5" fontWeight="bold">
                Sobre a Dra. Karoline Maria
              </Typography>
              <CardContent>
                <Typography component="p" variant="body1" fontSize="1.25rem">
                  A odontologia sempre foi minha paixão, e ao longo dos anos,
                  desenvolvi uma abordagem humanizada, focada no conforto e na
                  segurança dos meus pacientes. Minha especialização em Saúde da
                  Família me permitiu enxergar cada sorriso de forma única,
                  proporcionando não apenas tratamentos, mas também experiências
                  acolhedoras e personalizadas.
                </Typography>
                <Typography
                  fontSize="1.25rem"
                  component="p"
                  variant="body1"
                  sx={{
                    p: {
                      marginTop: "0.5rem",
                    },
                  }}
                >
                  Com ampla experiência em procedimentos estéticos e
                  restauradores, realizo extrações simples, próteses fixas
                  (pino, coroa, onlay) e removíveis (prótese total, PPR com
                  grampo, ponte móvel e flex). Também atuo com emergências
                  endodônticas, periodontia (raspagem comum e subgengival),
                  profilaxia, clareamento dental e avaliações clínicas
                  detalhadas.
                </Typography>
                <Collapse
                  in={showMore}
                  sx={{
                    p: {
                      marginTop: "0.5rem",
                    },
                  }}
                  timeout="auto"
                  unmountOnExit
                >
                  <Typography component="p" variant="body1" fontSize="1.25rem">
                    Meu compromisso é aliar técnica, inovação e um atendimento
                    próximo e cuidadoso, sempre buscando soluções que realcem a
                    beleza natural do sorriso e promovam a saúde bucal. Tenho
                    facilidade em trabalhar em equipe, me comunico com empatia e
                    acredito que um sorriso bem cuidado transforma não apenas a
                    estética, mas também a autoestima e a qualidade de vida.
                    <br />
                    Se deseja um atendimento profissional e personalizado,
                    ficarei feliz em cuidar do seu sorriso!
                  </Typography>
                </Collapse>
              </CardContent>
              <CustomCardActions disableSpacing>
                {!isUpMd && (
                  <Box onClick={() => setShowMore(!showMore)}>
                    <ExpandMoreIconButton
                      open={showMore}
                      sx={{
                        justifySelf: "flex-start",
                      }}
                    />
                    Ver Mais
                  </Box>
                )}
                <div>
                  <InstagramIconLink href="https://www.instagram.com/dra.karoline_maria_/" />
                </div>
              </CustomCardActions>
            </Card>
          </Grid>
        </ContainerGrid>
      </CustomCard>
    </CustomContainer>
  );
};

export default About;
