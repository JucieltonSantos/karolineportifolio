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
          Ir ao dentista em Osasco nunca foi tão relaxante: conheça a nova
          experiência da Clínica Dra. Karoline Maria
        </Typography>
        <CardContent>
          <Image
            alt={
              "Ir ao dentista em Osasco nunca foi tão relaxante: conheça a nova experiência da Clínica Dra. Karoline Maria"
            }
            src={
              "/posts/dentista-em-osasco-com-fone-de-ouvido-e-cancelamento-de-ruido.png"
            }
            layout="responsive"
            objectFit="cover"
            width={400}
            height={400}
            quality={100}
          />

          <Container maxWidth="md">
            <Typography textAlign="center" marginTop="3%">
              Você já imaginou ir ao dentista e sair do consultório mais calmo
              do que entrou? Parece impossível, né? Mas na Clínica Odontológica
              da Dra. Karoline Maria, em Osasco, isso é realidade! Pensando
              sempre no bem-estar dos nossos pacientes, implementamos uma
              novidade exclusiva na região: agora você pode utilizar fones de
              ouvido com cancelamento de ruído nível 5 durante seus
              atendimentos.
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              Por que essa inovação faz tanta diferença?
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="1%"
            >
              Muitas pessoas evitam ir ao dentista por conta do medo, da
              ansiedade ou do incômodo com o som dos equipamentos. Sabemos disso
              e decidimos transformar essa experiência! Com os fones de ouvido
              com cancelamento de ruído nível 5, você:
            </Typography>

            <Typography
              component="p"
              variant="body1"
              textAlign="left"
              marginTop="1%"
            >
              <ul>
                <li>
                  Se desconecta dos ruídos de alta frequência, como brocas e
                  sugadores
                </li>
                <li>Reduz o estresse e a ansiedade durante o atendimento</li>
                <li>Torna a experiência mais tranquila e acolhedora</li>
                <li>
                  Sente-se mais confortável, mesmo em procedimentos mais longos
                </li>
              </ul>
            </Typography>

            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              Essa tecnologia já é usada em clínicas de referência ao redor do
              mundo — e agora você encontra aqui mesmo, em Osasco, com a
              qualidade e o cuidado da Dra. Karoline Maria.
            </Typography>

            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              Um cuidado além da odontologia
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="1%"
            >
              Aqui na clínica, acreditamos que o atendimento vai muito além do
              tratamento dentário. Criamos um espaço onde o paciente se sente
              acolhido, respeitado e tranquilo. A introdução dos fones com
              cancelamento de ruído é só mais uma forma de mostrar que você está
              no centro de tudo o que fazemos. Além disso, somos a única clínica
              odontológica em Osasco que oferece esse diferencial, mostrando
              nosso compromisso em trazer sempre o que há de melhor e mais
              moderno para a sua saúde bucal — e emocional.
            </Typography>

            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              Está em Osasco? Venha viver essa experiência!
            </Typography>

            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="1%"
            >
              Se você mora em Osasco ou na região e procura um atendimento
              odontológico humanizado, com tecnologia e inovação, agende uma
              consulta conosco. Experimente a diferença de um atendimento sem
              estresse e com muito mais conforto.
            </Typography>
          </Container>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default Projects;
