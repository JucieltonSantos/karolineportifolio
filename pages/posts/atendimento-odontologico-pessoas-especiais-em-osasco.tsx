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
          Atendimento Humanizado para Pessoas Especiais em Osasco: Um
          Compromisso meu Dra. Karoline Maria
        </Typography>
        <CardContent>
          <Image
            alt={
              "Atendimento Humanizado para Pessoas Especiais em Osasco: Um Compromisso meu Dra. Karoline Maria"
            }
            src={
              "/posts/atendimento-odontologico-pessoas-especiais-em-osasco.png"
            }
            layout="responsive"
            objectFit="cover"
            width={400}
            height={400}
            quality={100}
          />

          <Container maxWidth="md">
            <Typography textAlign="center" marginTop="3%">
              Tratar de sorrisos vai muito além da técnica — é sobre respeitar,
              acolher e compreender a individualidade de cada paciente. Eu sou a
              Dra. Karoline Maria, cirurgiã-dentista pós-graduada em Saúde da
              Família, e quero compartilhar com você o quanto é especial para
              mim atender pessoas com deficiência e necessidades especiais aqui
              em Osasco e região.
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              Um atendimento feito com empatia e preparo
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="1%"
            >
              Desde o início da minha trajetória como dentista, desenvolvi um
              carinho especial por pacientes que muitas vezes são esquecidos ou
              subestimados em ambientes clínicos: pessoas com deficiência
              intelectual, física, sensorial ou múltipla.
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="1%"
            >
              Além de amor pela profissão, tenho formação especializada em Saúde
              da Família, o que me permite enxergar cada paciente em seu
              contexto, respeitando não só suas condições clínicas, mas também
              emocionais e sociais e conhecer um pouco da historia de cada
              paciente, faz com que eu possa me conectar a eles e dar todo o
              amor e cuidado que eles merecem.
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="1%"
            >
              Por que o atendimento odontológico para pessoas especiais exige
              atenção diferenciada? Muitos pacientes com necessidades especiais
              enfrentam desafios para manter a higiene bucal sozinhos, têm
              dificuldades motoras, sensoriais ou mesmo emocionais que tornam o
              atendimento tradicional mais difícil. Por isso, um bom dentista
              precisa mais do que técnica — precisa de paciência, escuta ativa e
              acolhimento, e não só ao paciente especial, mas a Família também
              precisa ser ouvida para que possamos entender como é a dinâmica no
              dos cuidados a higiene bucal no dia a dia nesses pacientes e assim
              eu consiga dar a melhor orientação possivel.
            </Typography>

            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              Aqui no consultório, ofereço:
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="left"
              marginTop="1%"
            >
              <ul>
                <li>Ambiente tranquilo</li>
                <li>Tempo de consulta adequado ao paciente</li>
                <li>Abordagem individualizada e cuidadosa</li>
                <li>Acompanhamento com a família ou responsável</li>
                <li>Atenção especial ao conforto e à segurança do paciente</li>
              </ul>
            </Typography>

            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              Odontologia com foco na saúde da família
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="left"
              marginTop="1%"
            >
              Como profissional com pós-graduação em Saúde da Família, acredito
              que cuidar de um sorriso é cuidar de toda uma rede de apoio: a
              mãe, o pai, os cuidadores e até os profissionais da saúde que
              acompanham aquele paciente.
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="left"
              marginTop="1%"
            >
              Por esse motivo, meu atendimento extrapola o consultório. Sempre
              que preciso, dou orientação sobre higiene bucal domiciliar, adapto
              instrumentos e desenvolvo estratégias em conjunto com a família
              para que o cuidado seja seguido em casa.
            </Typography>

            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              Atendimento especializado em Osasco e região
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="1%"
            >
              Se você está procurando um dentista em Osasco que atenda com
              carinho e preparo pessoas com necessidades especiais, saiba que
              está no lugar certo. Tenho orgulho de oferecer um atendimento
              acolhedor, técnico e respeitoso a todos os pacientes, com atenção
              especial àqueles que mais precisam.
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="1%"
            >
              👉 Agende sua consulta comigo Dra. Karoline Maria e tenha uma
              experiência de cuidado completa!
            </Typography>
          </Container>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default Projects;
