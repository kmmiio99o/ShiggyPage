import React from "react";
import {
  Typography,
  Button,
  Box,
  Stack,
  alpha,
  useTheme,
  Chip,
  Grid,
} from "@mui/material";
import { ArrowForward, Computer, Apps } from "@mui/icons-material";
import data from "../../json/install.json";

export const PCSection: React.FC<{ isRecommended?: boolean }> = ({
  isRecommended,
}) => {
  const theme = useTheme();
  const color = theme.palette.primary.main;
  const { clients, apps, ui } = data.pcSection;

  const userAgent = navigator.userAgent;
  const isWindows = userAgent.indexOf("Win") !== -1;
  const isLinux = userAgent.indexOf("Linux") !== -1;
  const isMac = userAgent.indexOf("Mac") !== -1;

  const renderGrid = (items: { name: string; url: string }[]) => (
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid item xs={12} sm={6} key={item.name}>
          <Button
            variant="outlined"
            fullWidth
            href={item.url}
            target="_blank"
            endIcon={<ArrowForward />}
            sx={{
              borderRadius: "50px",
              py: 1.2,
              px: 3,
              textTransform: "none",
              fontWeight: 700,
              color,
              borderColor: alpha(color, 0.3),
              justifyContent: "space-between",
            }}
          >
            {item.name}
          </Button>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {isRecommended && (
        <Chip
          label={ui.recommendation_label}
          color="primary"
          size="small"
          sx={{
            mb: 2,
            fontWeight: 700,
            borderRadius: "8px",
            alignSelf: "flex-start",
          }}
        />
      )}

      {/* Client Mods Section */}
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Box
          sx={{
            p: 1,
            borderRadius: "8px",
            display: "flex",
            bgcolor: alpha(color, 0.1),
          }}
        >
          <Computer sx={{ color, fontSize: 24 }} />
        </Box>
        <Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="h6" fontWeight={700}>
              {ui.client_mods_title}
            </Typography>
            {isWindows && (
              <Chip
                label={ui.windows_recommendation}
                size="small"
                variant="outlined"
                color="primary"
                sx={{ height: 20, fontSize: "0.65rem", fontWeight: 800 }}
              />
            )}
          </Stack>
          <Typography variant="caption" color="text.secondary">
            {ui.client_mods_subtitle}
          </Typography>
        </Box>
      </Stack>
      <Box sx={{ mb: 4 }}>{renderGrid(clients)}</Box>

      {/* Standalone Apps Section */}
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Box
          sx={{
            p: 1,
            borderRadius: "8px",
            display: "flex",
            bgcolor: alpha(color, 0.1),
          }}
        >
          <Apps sx={{ color, fontSize: 24 }} />
        </Box>
        <Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="h6" fontWeight={700}>
              {ui.standalone_apps_title}
            </Typography>
            {(isLinux || isMac) && (
              <Chip
                label={ui.os_recommendation}
                size="small"
                variant="outlined"
                color="primary"
                sx={{ height: 20, fontSize: "0.65rem", fontWeight: 800 }}
              />
            )}
          </Stack>
          <Typography variant="caption" color="text.secondary">
            {ui.standalone_apps_subtitle}
          </Typography>
        </Box>
      </Stack>
      <Box sx={{ mb: 2 }}>{renderGrid(apps)}</Box>
    </Box>
  );
};
