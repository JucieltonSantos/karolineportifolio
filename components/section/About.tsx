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
                alt="John Doe profile image"
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
                onLoad={() => setIsLoaded(true)}
                src="/home/karol_foto_2.png"
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
                  Tenho dois anos de experiência em técnicas odontológicas e
                  possuo uma especialização em Saúde da Família, o que me
                  permitiu desenvolver uma abordagem humanizada e focada no
                  bem-estar dos pacientes.
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
                  Ao longo da minha trajetória profissional, adquiri expertise
                  em procedimentos estéticos e restauradores, incluindo
                  extrações simples, próteses dentárias fixas (pino, coroa,
                  onlay) e removíveis (prótese total, PPR com grampo, ponte
                  móvel e flex).
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
                    Além disso, possuo experiência em emergências endodônticas,
                    periodontia (raspagem comum e subgengival), profilaxia,
                    avaliação clínica e clareamento dental. Minha metodologia de
                    trabalho é pautada na excelência técnica, no atendimento
                    personalizado e na busca por soluções inovadoras que
                    garantam conforto e segurança aos pacientes. Tenho
                    facilidade em trabalhar em equipe, boa comunicação e um
                    olhar atento às necessidades individuais de cada pessoa que
                    atendo.
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
