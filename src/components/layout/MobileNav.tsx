import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  useTheme,
  alpha,
  Button,
  Typography,
} from "@mui/material";
import {
  GitHub,
  Home,
  Download,
  Build,
  People,
  HelpOutline,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import content from "../../json/layout.json";

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home />,
  Install: <Download />,
  Build: <Build />,
  FAQ: <HelpOutline />,
  Contributors: <People />,
};

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  activePath: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  open,
  onClose,
  activePath,
}) => {
  const theme = useTheme();

  return (
    <Drawer
      anchor="top"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: "100%",
          backgroundColor: alpha(theme.palette.background.paper, 0.95),
          backdropFilter: "blur(16px)",
          borderRadius: "0 0 32px 32px",
          pt: 10,
          pb: 4,
        },
      }}
    >
      <Box sx={{ px: 2 }}>
        <Typography
          variant="overline"
          sx={{ px: 2, fontWeight: 800, color: "primary.main", opacity: 0.6 }}
        >
          Navigation
        </Typography>
        <List sx={{ mt: 1 }}>
          {content.navigation.map((link, index) => (
            <ListItem
              key={link.href}
              disablePadding
              sx={{
                animation: open
                  ? `dropIn 0.4s ease-out forwards ${index * 0.05}s`
                  : "none",
                opacity: 0,
                transform: "translateY(-10px)",
                "@keyframes dropIn": {
                  to: { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              <ListItemButton
                component={Link}
                to={link.href}
                selected={activePath === link.href}
                onClick={onClose}
                sx={{ borderRadius: "16px", mb: 0.5, mx: 1, py: 1.8 }}
              >
                <ListItemIcon sx={{ minWidth: 44 }}>
                  {iconMap[link.text] || <Home />}
                </ListItemIcon>
                <ListItemText
                  primary={link.text}
                  primaryTypographyProps={{
                    fontWeight: activePath === link.href ? 800 : 600,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ px: 4, mt: 2 }}>
        <Divider sx={{ mb: 3, opacity: 0.5 }} />
        <Button
          component="a"
          href={content.links.github_project}
          target="_blank"
          variant="contained"
          fullWidth
          disableElevation
          startIcon={<GitHub />}
          sx={{
            py: 1.8,
            borderRadius: "100px",
            textTransform: "none",
            fontWeight: 700,
          }}
        >
          {content.brand.github_tooltip_text}
        </Button>
      </Box>
    </Drawer>
  );
};
