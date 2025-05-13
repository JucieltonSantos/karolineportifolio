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
          O Momento Ideal para a Primeira Consulta: Orientações de um Dentista
          para crianças em Osasco
        </Typography>
        <CardContent>
          <Image
            alt={
              "O Momento Ideal para a Primeira Consulta: Orientações de um Dentista para crianças em Osasco"
            }
            src={"/posts/primeira-consulta-dentista-infantil-em-osasco.png"}
            layout="responsive"
            objectFit="cover"
            width={400}
            height={400}
            quality={100}
          />

          <Container maxWidth="md">
            <Typography textAlign="center" marginTop="3%">
              É comum que os pais se questionem sobre o momento certo de levar
              seus filhos ao dentista pela primeira vez. A boa notícia é que,
              com o cuidado e a atenção certos, a visita ao dentista pode ser
              uma experiência agradável e benéfica para a criança. Como eu Dra.
              Karoline Maria dentista e minha “assistente” de crianças
              Karolzinha em Osasco, com foco no atendimento infantil,
              gostariamos de compartilhar algumas dicas importantes sobre a
              odontopediatria e a saúde bucal infantil.
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              Qual é o momento ideal para a primeira consulta?
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="1%"
            >
              O recomendado é que a criança seja levada ao dentista assim que o
              primeiro dente nascer, geralmente por volta dos seis meses de
              idade. Nessa primeira consulta, o dentista orienta os pais sobre
              os cuidados básicos, a higiene e a alimentação. Mesmo que você
              tenha perdido essa janela de tempo, não se preocupe: nunca é tarde
              para começar. O importante é estabelecer o hábito e construir
              confiança o mais cedo possível.
            </Typography>

            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              Por que ir ao dentista cedo é tão importante?
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="left"
              marginTop="1%"
            >
              <ul>
                <li>Para prevenir cáries e problemas nas gengivas.</li>
                <li>Para aprender hábitos saudáveis desde a infância.</li>
                <li>
                  Para acompanhar o desenvolvimento dos dentes e da mandíbula.
                </li>
                <li>
                  Para evitar sustos com tratamentos emergenciais. Crianças que
                  vão ao dentista com frequência desde pequenas tendem a ter
                  menos medo e mais cuidado com a saúde bucal ao longo da vida.
                </li>
              </ul>
            </Typography>

            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              Como tornar a ida ao dentista mais tranquila?
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="left"
              marginTop="1%"
            >
              <ul>
                <li>
                  Escolha clínicas com profissionais que entendam de
                  odontopediatria ou saúde da família que é a minha
                  especialização.
                </li>
                <li>Explique à criança o que vai acontecer, de forma suave.</li>
                <li>
                  Evite frases como "se não escovar, o dentista vai te dar
                  bronca".
                </li>
                <li>Encare a consulta como algo normal e bom.</li>
                <li>
                  Aqui em nosso consultório temos um certificado de coragem
                  emitidos pela nossa personagem Karolzinha, uma personagem que
                  foi criada para dar dicas e se comunicar com o público mais
                  novo também.
                </li>
              </ul>
            </Typography>

            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              Cuidado especial para crianças em Osasco
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="1%"
            >
              Se você procura um dentista em Osasco especializado em cuidar de
              sorrisos desde cedo que terá um ambiente diferenciado com tablete
              para entreter a criança com fone para diminuir o barulho do famoso
              “motorzinho”, estamos aqui para ajudar com afeto, calma e
              profissionalismo. Aqui, cada criança é tratada com todo o cuidado
              e respeito que merece e de quebra leva seu certificado de
              “coragem” para casa. 👉 Marque uma consulta para seu filho(a) e
              invista no futuro do sorriso e da saúde dele(a)!
            </Typography>
          </Container>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default Projects;
