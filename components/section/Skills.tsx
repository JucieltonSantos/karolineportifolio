// react
import * as React from "react";
// @mui
import {
  Container,
  ContainerProps,
  Grid,
  GridProps,
  Typography,
  styled,
} from "@mui/material";
// custom component
import ContainerGrid from "components/common/ContainerGrid";
import SkillProgress from "components/common/SkillProgress";
// custom icons

import PlaceIcon from "@mui/icons-material/Place";
// context
import ComponentsContext from "context/componentsContext";
// type
interface SkillsProps {}

const CustomContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  marginBottom: "5rem",
  marginTop: "5rem",
  scrollMarginTop: "2rem",
}));

const CustomGridItem = styled(Grid)<GridProps>(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  marginBottom: "2rem",
}));

const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  const { containerMaxWidth } = React.useContext(ComponentsContext);

  const skills = [
    {
      Icon: <PlaceIcon sx={{ color: "#ffd700", fontSize: 40 }} />,
      title: "Vila Aurora",
      subTitle: "Rua: Acaricuara, nº 210",
    },
    {
      Icon: <PlaceIcon sx={{ color: "#ffd700", fontSize: 40 }} />,
      title: "Tatuapé",
      subTitle: "Rua: Apucarana, n°326",
    },
    {
      Icon: <PlaceIcon sx={{ color: "#ffd700", fontSize: 40 }} />,
      title: "Osasco",
      subTitle: "Avenida Narciso Stulini 302, Sala 407 - Atrás da prefeitura",
    },
  ];

  return (
    <>
      <CustomContainer id="locais" maxWidth={containerMaxWidth}>
        <Typography component="h2" variant="h4" textAlign="center">
          Locais de Atendimento
        </Typography>
        <ContainerGrid marginTop="2rem">
          {skills.map((skill, index) => (
            <CustomGridItem
              item
              key={`${skill.title} - ${skill.subTitle} - ${index}`}
              xs={12}
              sm={6}
              md={4}
            >
              <SkillProgress
                size={100}
                value={100}
                Icon={skill.Icon}
                subtitle={`${skill.title} | ${skill.subTitle}`}
              />
            </CustomGridItem>
          ))}
        </ContainerGrid>
      </CustomContainer>
    </>
  );
};

export default Skills;
