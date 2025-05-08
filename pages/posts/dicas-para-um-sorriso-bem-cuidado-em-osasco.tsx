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
          Dicas incríveis para um Sorriso Bem Cuidado: Grandes Conselhos de uma
          Dentista em Osasco
        </Typography>
        <CardContent>
          <Image
            alt={
              "Dicas incríveis para um Sorriso Bem Cuidado: Grandes Conselhos de uma Dentista em Osasco"
            }
            src={"/posts/dicas-para-um-sorriso-bem-cuidado-em-osasco.png"}
            layout="responsive"
            objectFit="cover"
            width={400}
            height={400}
            quality={100}
          />

          <Container maxWidth="md">
            <Typography textAlign="center" marginTop="3%">
              Sacou que sorrir bem não é só escovar? Eu Dra.Karoline Maria
              diretamente de Osasco vou passar dicas simples que passo no dia a
              dia para meus pacientes e que são sagradas para uma melhor saúde
              bucal. Se você quer um sorriso lindo e forte por mais tempo, pega
              esses toques que valem ouro
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              1. Limpe os dentes (escova e fio dental) sempre que comer (tipo,
              certinho, hein)
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="1%"
            >
              Use uma escova macia, com toques leves, sem pesar a mão demais.
              Fazer um carinho nos dentes por 2 minutos muda tudo.
            </Typography>

            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              2. Passe o fio “mágico”(fio dental) todo dia – sem falta nenhuma.
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="1%"
            >
              Ele entra onde a escova não vai: entre os dentes e perto da
              gengiva. Isso afasta bichinhos, doenças e cuida da sua boca.
            </Typography>

            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              3. Fuja do açúcar exagerado e coisas azedas
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="1%"
            >
              Refri, sucos prontos e balas, chamam as cáries. Se consumir, faça
              uma limpeza maneira dental ou beba água depois.
            </Typography>

            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              4. Tome muita água.
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="1%"
            >
              A água não só molha o corpo, mas também deixa a boca limpa na
              medida do possível e faz a saliva “jorrar”, o que espanta os
              bichinhos ruins.
            </Typography>

            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              5. Ver o dentista sempre é bom.
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="1%"
            >
              As pessoas só lembram do dentista quando está com dor e é muito
              ruim sentir dor, mas ir a cada seis meses é o plano que ajuda a
              previnir problemas graves. Cuidar antes sai mais em conta e sem
              tanto sofrimento.
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              Um cuidado especial com quem é de Osasco.
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="1%"
            >
              Atendo pacientes em Osasco e região com foco em prevenção,
              conforto e acolhimento. Meu objetivo e da minha equipe é que você
              se sinta bem, confiante e seguro para cuidar do seu sorriso em
              todas as fases da vida. 👉 Agende sua consulta e comece hoje uma
              nova rotina de cuidados com seu sorriso!
            </Typography>
          </Container>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default Projects;
