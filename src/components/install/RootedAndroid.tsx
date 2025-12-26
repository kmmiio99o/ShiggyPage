import React from "react";
import {
  Typography,
  Button,
  Box,
  alpha,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  useTheme,
} from "@mui/material";
import {
  ArrowForward,
  Terminal,
  CheckCircle,
  Warning,
} from "@mui/icons-material";
import data from "../../json/install.json";

export const RootedAndroid: React.FC = () => {
  const theme = useTheme();
  const color = theme.palette.primary.main;
  const { features, requirements, downloadUrl, ui } = data.rootedAndroid;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
        <Box
          sx={{
            p: 1.5,
            borderRadius: "12px",
            display: "flex",
            bgcolor: alpha(color, 0.1),
          }}
        >
          <Terminal sx={{ color: color, fontSize: 28 }} />
        </Box>
        <Box>
          <Typography variant="h6" fontWeight={700}>
            {ui.platform_title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {ui.platform_subtitle}
          </Typography>
        </Box>
      </Stack>

      <Box
        sx={{
          p: 1.5,
          mb: 2,
          borderRadius: 3,
          bgcolor: alpha(theme.palette.error.main, 0.05),
          border: `1px solid ${alpha(theme.palette.error.main, 0.1)}`,
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <Warning color="error" sx={{ fontSize: 20 }} />
        <Typography variant="caption" color="error.main" fontWeight={700}>
          {ui.warning_text}
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1, mb: 4 }}>
        <Typography
          variant="overline"
          fontWeight={700}
          color="text.secondary"
          sx={{ ml: 1 }}
        >
          {ui.list_header}
        </Typography>
        <Box
          sx={{
            p: 1.5,
            borderRadius: 3,
            bgcolor: alpha(color, 0.05),
            border: `1px solid ${alpha(color, 0.1)}`,
          }}
        >
          <List dense disablePadding>
            {[...features, ...requirements].map((text, i) => (
              <ListItem key={i} disableGutters sx={{ px: 1 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircle sx={{ fontSize: 18, color }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {text}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      <Button
        variant="contained"
        fullWidth
        disableElevation
        href={downloadUrl}
        target="_blank"
        endIcon={<ArrowForward />}
        sx={{
          borderRadius: "50px",
          py: 1.5,
          textTransform: "none",
          fontWeight: 700,
        }}
      >
        {ui.button_text}
      </Button>
    </Box>
  );
};
