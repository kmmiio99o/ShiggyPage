import { createTheme } from "@mui/material/styles";

export const mochaDarkPalette = {
  mode: "dark" as const,
  primary: {
    main: "#D7B9AE",
    light: "#EAD9D2",
    dark: "#A57865",
    contrastText: "#2D2A26",
  },
  secondary: {
    main: "#B29685",
    light: "#D1C0B4",
    dark: "#8A6A56",
    contrastText: "#FFFFFF",
  },
  background: {
    default: "#1B1917",
    paper: "#24211E",
  },
  text: {
    primary: "#F2EFEA",
    secondary: "#B5AFA8",
  },
  divider: "#3D3834",
};

export const theme = createTheme({
  palette: mochaDarkPalette,
  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.5rem",
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: "2rem",
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.75rem",
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.5,
    },
    body1: {
      fontSize: "1.1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: "100px",
          padding: "10px 24px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "24px",
          backgroundImage: "none",
          backgroundColor: "#24211E",
          boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 12px 40px rgba(0,0,0, 0.4)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "24px",
          backgroundImage: "none",
        },
      },
    },
  },
});
