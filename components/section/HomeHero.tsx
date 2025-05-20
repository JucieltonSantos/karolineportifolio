// react
import * as React from "react";

import dynamic from "next/dynamic";
const Image = dynamic(() => import("next/image"));

// next
import { useRouter } from "next/router";
// @mui
import { Box, Button, Typography, useTheme } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// custom components
import CenterBox from "components/common/CenterBox";
import TypingEffect from "components/common/TypingEffect";
import ScrollDown from "components/common/ScrollDown";
// type
interface HomeHeroProps {}

const HomeHero: React.FunctionComponent<HomeHeroProps> = (props) => {
  const {
    palette: { info },
  } = useTheme();
  const router = useRouter();

  return (
    <CenterBox>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={4}
        alignItems="center"
      >
        <Box mt={{ xs: "240px", md: "0px" }}>
          <Image
            priority
            alt="Foto da dra.karoline Maria"
            width={740}
            height={490}
            quality={100}
            src="/home/karol_foto_consultorio_2.webp"
          />
        </Box>
        <Box>
          <Typography component="p" variant="h5" color="text.secondary">
            Bem-vindos(as), eu sou a
          </Typography>
          <Typography
            component="h1"
            variant="h2"
            fontWeight="bold"
            color="text.primary"
          >
            Dra. Karoline Maria
          </Typography>
          <Box color="text.secondary">
            <TypingEffect
              staticText="Transformando"
              text={["sua estética", "seu sorriso"]}
            />
          </Box>
          <Box display="flex" justifyContent="center" mt={4} mb={10}>
            <Button
              variant="contained"
              startIcon={<WhatsAppIcon />}
              href="https://wa.me/5511958169432?text=Quero%20saber%20sobre%20o%20Atendimento%20Odontológico"
              target="_blank"
            >
              Agende sua consulta - Whatsapp
            </Button>
          </Box>
          <ScrollDown
            color={info.main}
            onClick={() => router.push("/#sobre")}
            sx={{
              bottom: "10%",
              cursor: "pointer",
              position: "absolute",
              justifyContent: "space-between",
            }}
          />
        </Box>
      </Box>
    </CenterBox>
  );
};

export default HomeHero;
