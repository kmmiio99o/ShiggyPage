import React, { ReactNode } from "react";
import { Box, Container, useTheme } from "@mui/material";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  hasHero?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  hasHero = false,
}) => {
  const theme = useTheme();
  const paddingTop = hasHero ? "96px" : "64px";

  return (
    <>
      <Header />
      <Box
        sx={{
          pt: paddingTop,
          pb: 8,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Container maxWidth="lg">{children}</Container>
      </Box>
      <Footer />
    </>
  );
};
