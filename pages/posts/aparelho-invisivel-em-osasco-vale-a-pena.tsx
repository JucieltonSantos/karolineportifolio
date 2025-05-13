// react
import * as React from "react";
// custom component
import MainLayout from "components/layout/MainLayout";
// type
import type { NextPage } from "next";
import { Card, CardContent, Container, Typography } from "@mui/material";
import dynamic from "next/dynamic";
const Image = dynamic(() => import("next/image"));

const Projects: NextPage = (props) => {
  return (
    <MainLayout>
      <Card
        sx={{
          boxShadow: "none",
          height: "100%",
          maxWidth: "md",
          margin: "0 auto",
          width: "100%",
          px: 2,
        }}
      >
        <Typography
          component="h2"
          variant="h3"
          textAlign="center"
          marginTop="150px"
        >
          Aparelho Invisível em Osasco Vale a Pena Investir?
        </Typography>
        <CardContent>
          <Image
            alt={"Aparelho Invisível em Osasco Vale a Pena Investir?"}
            src={"/posts/aparelho-invisivel-em-osasco-vale-a-pena.png"}
            layout="responsive"
            objectFit="cover"
            width={400}
            height={400}
            quality={100}
          />

          <Container maxWidth="md">
            <Typography textAlign="center" marginTop="3%">
              Pensando em endireitar os dentes deixar aquela forma mais
              alinhada, mas a ideia de um aparelho de metal te desanima? Talvez
              o aparelho invisível, também conhecido como alinhador
              transparente, seja uma boa resposta para você! Este tratamento já
              transformou milhares de sorrisos, tanto no Brasil quanto no mundo,
              e agora chegou a Osasco com tecnologia de ponta e supervisão de
              profissionais no meu consultório Dra Karoline Maria.
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              Mas, o que exatamente é esse aparelho invisível Dra. Karoline?
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="1%"
            >
              Bem, são umas placas transparentes, feitas sob medida, que
              gradualmente ajeitam os dentes. Quase impossíveis de serem vistas,
              removíveis, e muuuito mais confortáveis que o aparelho fixo, te
              garanto é “Top”.
            </Typography>

            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              As principais vantagens são muitas:
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="left"
              marginTop="1%"
            >
              <ul>
                <li>
                  Totalmente discreto, né? Ninguém nota que você tá usando ou
                  nota bem pouco viu.
                </li>
                <li>
                  Mais conforto, sem fios, menos machucados dentro da boca.
                </li>
                <li>
                  Removível pra comer, escovar e usar fio dental numa boa.
                </li>
                <li>
                  Facilidade na higiene bucal, diminuindo o risco de cáries
                  durante o tratamento.
                </li>
              </ul>
            </Typography>

            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              Mas pra quem é recomendado Dra?
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="left"
              marginTop="1%"
            >
              O aparelho invisível serve para diversos problemas: dentes tortos,
              mordida aberta, espaços entre os dentes e mais um monte de coisas.
              Mas, só uma avaliação com um dentista profissional, poderá
              confirmar, sabe, se é ideal p/ seu caso.
            </Typography>

            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              Aparelho invisível em Osasco com acompanhamento personalizado
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="1%"
            >
              Aqui no consultório, nós, oferecemos o tratamento com alinhadores
              transparentes com o cuidado que você merece, e muito. Além do
              conforto, você terá um acompanhamento profissional de perto e, ah,
              resultados reais. 👉 Agende sua consulta com nossa equipe… e
              descubra se o aparelho invisível é bom para você!
            </Typography>
          </Container>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default Projects;
