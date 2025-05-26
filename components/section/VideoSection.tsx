"use client";

import { Container, Typography, Box } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";

export default function VideoSection() {
  const YoutubeShort = () => {
    return (
      <Box display="flex" justifyContent="center" width="100%">
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "480px",
              md: "640px",
              lg: "960px",
            },
            aspectRatio: "16 / 9",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/zwdWuZicPdc?feature=share`}
            title="Tem medo do 'motorzinho' do dentista? Uma experiência nova te espera aqui na clínica!"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: 8 }}
          />
        </Box>
      </Box>
    );
  };

  return (
    <Container sx={{ py: 4, backgroundColor: "#f5e6d3" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "#8B4513", fontWeight: "bold" }}
      >
        A 1ª Clinica de Osasco e região a ulitizar fones de ouvido com
        cancelamento de ruído nível 5 para o conforto do paciente!
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        paragraph
        sx={{ color: "#8B4513" }}
      >
        Confira a baixo o vídeo sobre essa inovação que traz mais conforto e
        tranquilidade para nossos pacientes:
      </Typography>
      <YoutubeShort />
    </Container>
  );
}
