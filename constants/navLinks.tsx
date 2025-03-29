// react
import React from 'react';
// mui icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PlaceIcon from "@mui/icons-material/Place";
import Person3Icon from "@mui/icons-material/Person3";
import HomeIcon from "@mui/icons-material/Home";
// type
import { ButtonProps, IconProps } from '@mui/material';
export interface NavLink {
  buttonProps?: ButtonProps;
  href: string;
  Icon: React.ReactNode;
  label: string;
  order: number;
  sidebarOrder?: number;
  sidebarVisible?: boolean;
}

const navLinks: NavLink[] = [
  {
    buttonProps: { color: "info" },
    href: "/#inicio",
    Icon: <HomeIcon color="inherit" fontSize="inherit" />,
    label: "Inicio",
    order: 1,
    sidebarVisible: false,
  },
  {
    buttonProps: { color: "info" },
    href: "/#sobre",
    Icon: <Person3Icon color="inherit" fontSize="inherit" />,
    label: "Sobre",
    order: 1,
    sidebarVisible: false,
  },
  {
    buttonProps: { color: "info" },
    href: "/#locais",
    Icon: <PlaceIcon color="inherit" fontSize="inherit" />,
    label: "Locais de Atendimento",
    order: 2,
    sidebarVisible: false,
  },
  {
    buttonProps: { color: "info" },
    href: "/#fotos",
    Icon: <CameraAltIcon color="inherit" fontSize="inherit" />,
    label: "Fotos",
    order: 3,
    sidebarOrder: 2,
    sidebarVisible: true,
  },
  {
    buttonProps: { color: "info", variant: "outlined" },
    href: "https://wa.me/11958169432?text=Quero%20saber%20sobre%20o%20Atendimento%20Odontológico",
    Icon: <WhatsAppIcon color="inherit" fontSize="inherit" />,
    label: "Whatsapp",
    order: 4,
    sidebarOrder: 3,
    sidebarVisible: true,
  },
];

export default navLinks;
