"use client";

import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import BrushIcon from "@mui/icons-material/Brush";
import OpacityIcon from "@mui/icons-material/Opacity";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import HealingIcon from "@mui/icons-material/Healing";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import ConstructionIcon from "@mui/icons-material/Construction";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

const services = [
  {
    title: "Emergências",
    description:
      "Atendimento rápido para dor intensa, fraturas e traumas dentários.",
    icon: <LocalHospitalIcon />,
  },
  {
    title: "Extrações dentárias",
    description: "Remoção segura e cuidadosa de dentes comprometidos.",
    icon: <RemoveCircleOutlineIcon />,
  },
  {
    title: "Restaurações estéticas",
    description:
      "Reconstrução de dentes com materiais que imitam a cor natural.",
    icon: <BrushIcon />,
  },
  {
    title: "Limpeza com aplicação de flúor",
    description: "Higienização profunda e fortalecimento dos dentes.",
    icon: <OpacityIcon />,
  },
  {
    title: "Harmonização facial",
    description: "Procedimentos estéticos para equilibrar a beleza facial.",
    icon: <FaceRetouchingNaturalIcon />,
  },
  {
    title: "Facetas",
    description: "Correção de imperfeições e melhorias estéticas no sorriso.",
    icon: <FilterVintageIcon />,
  },
  {
    title: "Clareamento dental",
    description: "Devolva o brilho e a brancura natural dos seus dentes.",
    icon: <WbSunnyIcon />,
  },
  {
    title: "Tratamento de canal",
    description:
      "Tratamento eficaz para salvar dentes comprometidos por cáries.",
    icon: <HealingIcon />,
  },
  {
    title: "Ortodontia (aparelhos)",
    description: "Alinhamento dos dentes com aparelhos fixos ou alinhadores.",
    icon: <SettingsInputComponentIcon />,
  },
  {
    title: "Implantes dentários",
    description: "Reposição de dentes perdidos com naturalidade e segurança.",
    icon: <ConstructionIcon />,
  },
  {
    title: "Prótese fixa e removível",
    description: "Soluções personalizadas para reabilitação oral completa.",
    icon: <InsertEmoticonIcon />,
  },
];

export default function ServicesSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container sx={{ py: 4, backgroundColor: "#f5e6d3" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "#8B4513", fontWeight: "bold" }}
      >
        Nossos Serviços
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        paragraph
        sx={{ color: "#8B4513" }}
      >
        Cuidamos da sua saúde e estética bucal com excelência.
      </Typography>

      {isMobile ? (
        // Mobile: Carrossel
        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          style={{ padding: "20px 0" }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <ServiceCard service={service} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        // Desktop: Grid
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {services.map((service, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

function ServiceCard({
  service,
}: {
  service: { title: string; description: string; icon: JSX.Element };
}) {
  return (
    <Card
      sx={{
        height: "178px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        p: 2,
        borderRadius: 3,
        backgroundColor: "#ffffff",
        boxShadow: 3,
        border: "2px solid #8B4513",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 8px 20px rgba(139, 69, 19, 0.4)",
        },
      }}
    >
      <Box sx={{ color: "#8B4513" }}>{service.icon}</Box>
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="h2"
          sx={{ color: "#8B4513", fontWeight: "bold" }}
        >
          {service.title}
        </Typography>
        <Typography sx={{ color: "#5a3724" }}>{service.description}</Typography>
      </CardContent>
    </Card>
  );
}
