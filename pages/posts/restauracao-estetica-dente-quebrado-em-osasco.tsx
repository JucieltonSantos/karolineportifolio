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
          Estética em Osasco: Recuperando Sorrisos e Autoestima com Dra.
          Karoline Maria
        </Typography>
        <CardContent>
          <Image
            alt={
              "Estética em Osasco: Recuperando Sorrisos e Autoestima com Dra. Karoline Maria"
            }
            src={"/posts/restauracao-estetica-dente-quebrado-em-osasco.png"}
            layout="responsive"
            objectFit="cover"
            width={400}
            height={400}
            quality={100}
          />

          <Container maxWidth="md">
            <Typography textAlign="center" marginTop="3%">
              Você já quebrou um dente da frente e se envergonha de sorrir ou de
              falar? Isso é mais frequente do que parece — e tem solução! Sou a
              Dra. Karoline Maria, dentista em Osasco, e trabalho com um dos
              serviços mais gratificantes da odontologia: a restauração
              estética.
            </Typography>
            <Typography textAlign="center" marginTop="3%">
              Neste post, eu gostaria de compartilhar como este processo
              restaura não só o sorriso, mas também a autoestima e a confiança
              de meus pacientes.
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              Antes e Depois: um sorriso que brilha novamente
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="1%"
            >
              A foto que acompanha este post é um exemplo real de um dente da
              frente que foi quebrado e restaurado com muita cautela, técnica e
              sensibilidade. É possível perceber a diferença, mas o efeito
              emocional é ainda maior.
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="1%"
            >
              Muitos pacientes chegam sem confiança, escondendo o sorriso, a
              fala ou até mesmo a saída da residência. Após a restauração, o
              brilho no olhar volta — e o sorriso volta também.
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              Qual é a restauração estética?
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="left"
              marginTop="1%"
            >
              A restauração estética é o procedimento que retifica dentes
              danificados, quebrados ou desgastados com materiais que imitam
              perfeitamente a cor e a forma do dente natural. Ela pode ser feita
              com resina composta de boa qualidade e precisa de habilidade para
              produzir um resultado natural, harmônico e durável.
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              Benefícios da restauração estética:
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="left"
              marginTop="1%"
            >
              <ul>
                <li>Restaura a forma e função do dente</li>
                <li>Restitui a naturalidade do sorriso</li>
                <li>Melhora a autoestima e segurança ao sorrir</li>
                <li>Evita desgastes futuros e infiltrações</li>
                <li>Procedimento rápido, seguro e acessível</li>
              </ul>
            </Typography>

            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              Restauração estética em Osasco com a Dra. Karoline Maria
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="1%"
            >
              Se você está com um dente quebrado, lascado ou sente que seu
              sorriso não representa mais quem você é, venha conversar comigo!
              Meu consultório está localizado em Osasco, com fácil acesso,
              estrutura moderna e atendimento humanizado. 👉 Agende sua consulta
              e volte a sorrir com confiança!
            </Typography>
          </Container>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default Projects;
