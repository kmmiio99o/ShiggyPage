import React from "react";
import { Box, Button, useTheme, alpha, Tooltip } from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";
import { Link } from "react-router-dom";
import content from "../../json/layout.json";

interface DesktopNavProps {
  activePath: string;
}

export const DesktopNav: React.FC<DesktopNavProps> = ({ activePath }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        bgcolor: alpha(theme.palette.background.paper, 0.4),
        p: 0.5,
        borderRadius: "100px",
        border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        backdropFilter: "blur(8px)",
      }}
    >
      <Box sx={{ display: "flex", gap: 0.5 }}>
        {content.navigation.map((link) => {
          const isActive = activePath === link.href;
          return (
            <Button
              key={link.href}
              component={Link}
              to={link.href}
              variant="text"
              sx={{
                fontWeight: isActive ? 800 : 600,
                color: isActive
                  ? theme.palette.primary.main
                  : theme.palette.text.secondary,
                px: 2.5,
                borderRadius: "100px",
                textTransform: "none",
                position: "relative",
                transition: "all 0.2s ease-in-out",

                "&:hover": {
                  color: theme.palette.primary.main,
                  bgcolor: alpha(theme.palette.primary.main, 0.04),
                },

                // The indicator bar
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 6,
                  left: "50%",
                  width: "16px",
                  height: "3px",
                  borderRadius: "2px",
                  bgcolor: "primary.main",
                  transform: isActive
                    ? "translateX(-50%) scaleY(1)"
                    : "translateX(-50%) scaleY(0)",
                  opacity: isActive ? 1 : 0,
                  transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                },

                "&:hover::after": {
                  transform: "translateX(-50%) scaleY(1)",
                  opacity: isActive ? 1 : 0.5,
                },
              }}
            >
              {link.text}
            </Button>
          );
        })}
      </Box>

      <Box
        sx={{
          width: "1px",
          height: "24px",
          bgcolor: alpha(theme.palette.divider, 0.2),
          mx: 1,
        }}
      />

      <Tooltip title={content.brand.github_button_text} arrow>
        <Button
          component="a"
          href={content.links.github_project}
          target="_blank"
          variant="contained"
          disableElevation
          startIcon={<GitHub sx={{ fontSize: "1.1rem !important" }} />}
          endIcon={
            <Launch sx={{ fontSize: "0.8rem !important", opacity: 0.7 }} />
          }
          sx={{
            borderRadius: "100px",
            textTransform: "none",
            bgcolor: alpha(theme.palette.primary.main, 0.1),
            color: theme.palette.primary.main,
            fontWeight: 600,
            transition: "all 0.2s ease",
            "&:hover": {
              bgcolor: theme.palette.primary.main,
              color: "white",
              transform: "translateY(-1px)",
            },
          }}
        >
          {content.brand.github_button_text}
        </Button>
      </Tooltip>
    </Box>
  );
};
