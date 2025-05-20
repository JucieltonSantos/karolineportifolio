"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Card,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import dynamic from "next/dynamic";
const Image = dynamic(() => import("next/image"));

export default function KarolzinhaSection() {
  return (
    <Container sx={{ py: 10 }}>
      <Grid container spacing={6} alignItems="center">
        {/* Imagem da Karolzinha */}
        <Grid item xs={12} md={6}>
          <Image
            alt={"Karolzinha, assistente virtual"}
            src={"/home/karolzinha.png"}
            layout="responsive"
            objectFit="cover"
            width={400}
            height={800}
            quality={100}
          />
        </Grid>

        {/* Texto de Apresentação */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              backgroundColor: "#ffffff",
              boxShadow: 3,
              border: "2px solid #8B4513",
              p: 2,
              borderRadius: 3,
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "#8B4513", fontWeight: "bold" }}
            >
              Conheça a Karolzinha
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: "#5a3724" }}>
              Apresento a Karolzinha, minha assistente de trabalho! Ela é uma
              personagem criada com o apoio de várias Inteligências Artificiais,
              unindo inovação e carinho para transformar a nossa comunicação com
              todos os públicos.
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: "#5a3724" }}>
              Mas o que torna a Karolzinha tão especial? Ela não atua sozinha!
              Trabalha integrada a diversas tecnologias e nossa equipe,
              garantindo que a experiência de cada paciente seja mais acessível,
              interativa e informativa.
            </Typography>

            {/* Lista de diferenciais */}
            <List>
              {[
                "✅ Explicações didáticas para pacientes que querem entender melhor seus tratamentos.",
                "✅ Conteúdo educativo e personalizado para quem busca mais saúde bucal.",
                "✅ Informação validada por nossa equipe técnica, mesmo utilizando Inteligências Artificiais.",
                "✅ Acessível para todas as idades, com foco em levar informação clara e segura.",
                "✅ Crianças que realizarem tratamentos ganharão um Certificado de Coragem em nome da Karolzinha!",
              ].map((text, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#ffd702" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={text.replace("✅ ", "")}
                    sx={{ color: "#5a3724" }}
                  />
                </ListItem>
              ))}
            </List>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
