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
          Mas mais do que Dentista: Dra. Karoline Maria e o Engajamento com a
          Comunidade
        </Typography>
        <CardContent>
          <Image
            alt={
              "Mas mais do que Dentista: Dra. Karoline Maria e o Engajamento com a Comunidade"
            }
            src={
              "/posts/dra-karoline-maria-trabalho-voluntario-e-compromisso-social.png"
            }
            layout="responsive"
            objectFit="cover"
            width={400}
            height={400}
            quality={100}
          />

          <Container maxWidth="md">
            <Typography textAlign="center" marginTop="3%">
              Afirmar-se do sorriso é também afirmar-se do ser. Sou a Dra.
              Karoline Maria, dentista em exercício na cidade de Osasco, e penso
              que a odontologia vá muito além da clínica: é um instrumento de
              mutação social, cuidado e compreensão. Por isso, já além da minha
              profissional atividade de trabalho, sinto um grande afeto pelas
              ações de voluntariado que faço regularmente, sobretudo ao lado de
              instituições de acolhimento de pessoas com deficiência.
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              Voluntariado na FIC – Fraternidade Irmã Clara
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="1%"
            >
              Uma das coisas mais valiosas da minha vida se dá nas visitas
              recorrentes que faço à FIC (Fraternidade Irmã Clara), instituição
              que acolhe com muito carinho pessoas com paralisia cerebral e
              deficiências múltiplas. Embora a FIC não esteja localizada em
              Osasco, ela ocupa um espaço enorme no meu coração. Lá, participo
              com doações de cremes dentais, levo sobremesas para o almoço, e,
              acima de tudo, ofereço tempo e atenção a quem mais precisa.
              Conversar, brincar, escutar e simplesmente estar presente com
              essas pessoas é um dos momentos mais humanos da minha rotina.
              Acredito que pequenas atitudes como essas têm um impacto
              imensurável.
            </Typography>

            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              A vista social para o futuro também em Osasco
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="left"
              marginTop="1%"
            >
              Trabalhando a diariamente em Osasco, bem sei de perto a condição
              de muitas famílias que carecem de atenção, mas não sempre se tem
              facilitado o acesso à saúde bucal. É por isso que tenho um projeto
              muito especial para o futuro imediato:
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="left"
              marginTop="1%"
            >
              → fornecer atendimento odontológico social às pessoas de baixa
              renda diretamente no meu consultório. Eu gostaria de criar uma
              ponte entre a comunidade e o consultório, com um atendimento de
              qualidade, com empatia e respeito, para quem muitas vezes é
              descartado pelo sistema, em breve quero poder dedicar 1 a 2 dias
              por mes para atender esse público com tratamentos de limpeza e
              prevenção a problemas de saúde bucal de forma totalmente gratuita,
              podendo orientar e entregar um kit de higiene bucal, é um projeto
              que está no meu coração e sei que Deus vai me ajudar nessa missão.
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              A odontologia como instrumento de amor
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="left"
              marginTop="1%"
            >
              A odontologia é profissão minha, mas também é meu propósito. Ao
              juntar técnica, acolhimento e responsabilidade social, acredito
              que posso fazer mais do que reparar dentes — posso ajudar pessoas
              a se sentirem valorizadas, cuidadas e mais vistas perante a
              sociedade que tanto exclui os menos favorecidos.
            </Typography>

            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="2%"
            >
              Atendimento humano e com propósito em Osasco
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="center"
              marginTop="1%"
            >
              Se você procura uma dentista em Osasco que acredita em um
              atendimento próximo, acolhedor e transformador, estou aqui para te
              receber com carinho e profissionalismo. 👉 Agende uma consulta e
              faça parte dessa corrente de cuidado!
            </Typography>
          </Container>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default Projects;
