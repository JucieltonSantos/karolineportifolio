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
          Top 5 tratamentos Dentais Mais Buscados em Osasco – Qual Combina Com
          Você?
        </Typography>
        <CardContent>
          <Image
            alt={
              "Top 5 tratamentos Dentais Mais Buscados em Osasco – Qual Combina Com Você?"
            }
            src={"/posts/top-5-tratamentos-dentais-mais-buscados-em-osasco.png"}
            layout="responsive"
            objectFit="cover"
            width={400}
            height={400}
            quality={100}
          />

          <Container maxWidth="md">
            <Typography textAlign="center" marginTop="3%">
              Se você mora em Osasco ou perto e busca um dentista e quer saber
              quais cuidados podem deixar seu sorriso incrível, este texto é pra
              você ver. Aqui, eu, Dra.Karoline Maria, dentista que ama deixar os
              dentes bonitos e saudáveis, vou te contar os 5 jeitos mais famosos
              em Osasco e como cada um muda seu sorriso.
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              1. Limpeza nos Dentes
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="1%"
            >
              A limpeza dental é bem comum aqui, ela não é só escovar: tira o
              que gruda no dente e bactérias que dão um bafo e até feridas na
              gengiva. O ideal é fazer sempre de seis em seis meses.
            </Typography>

            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              2. Clareamento Dental
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="1%"
            >
              Quer um dente tipo neve e um sorriso brilhando? O clareamento é o
              que o povo mais pede. Dá para fazer aqui ou em casa, fazemos com
              produtos de alta qualidade para entregar o melhor para vocês
              pacientes, nas primeiras semanas já dá para ver a diferença.
            </Typography>

            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              3.Aparelho nos dentes
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="1%"
            >
              Os aparelhos, fixos ou aqueles que chamamos de alinhadores
              invisíveis, melhoram muito o alinhamento dos dentes e da mordida.
              Além de dar um tapa no visual, ajudam a boca a ficar mais saudável
              e na hora de comer.
            </Typography>

            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              4. Implante Dentários
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="1%"
            >
              Se perdeu um dente (ou alguns), o implante é a saída mais firme e
              que dura mais. Com a tecnologia de hoje, dá para ter o dente de
              volta, bonitão e sem complicação.
            </Typography>

            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              5. Lentes nos Dentes
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="1%"
            >
              As lentes dão um show pra quem busca um sorriso top rapidinho.
              Elas dão um jeito nas imperfeições tipo dentes separados, gastos
              ou meio amarelos, e o resultado fica super bonito.
            </Typography>
          </Container>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default Projects;
