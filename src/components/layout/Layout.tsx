import React, { ReactNode, useMemo, memo } from "react";
import { Box, Container, useTheme } from "@mui/material";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  hasHero?: boolean;
}

export const Layout: React.FC<LayoutProps> = memo(
  ({ children, hasHero = false }) => {
    const theme = useTheme();

    const paddingTop = useMemo(() => (hasHero ? "96px" : "64px"), [hasHero]);

    const mainContainerStyle = useMemo(
      () => ({
        pt: paddingTop,
        pb: 8,
        backgroundColor: theme.palette.background.default,
      }),
      [paddingTop, theme.palette.background.default],
    );

    const headerComponent = useMemo(() => <Header />, []);
    const footerComponent = useMemo(() => <Footer />, []);

    return (
      <>
        {headerComponent}
        <Box sx={mainContainerStyle}>
          <Container maxWidth="lg">{children}</Container>
        </Box>
        {footerComponent}
      </>
    );
  },
);

Layout.displayName = "Layout";
