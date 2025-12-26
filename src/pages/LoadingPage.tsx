import React from "react";
import { Box, CircularProgress, Typography, keyframes } from "@mui/material";
import loadingData from "../json/loading_page.json";

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
`;

export interface LoadingPageProps {
  progress: number;
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ progress }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "background.default",
        animation: `${fadeIn} 0.8s cubic-bezier(0.4, 0, 0.2, 1)`,
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
          mb: 3,
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: "50%",
            boxShadow: "0 0 20px rgba(25, 118, 210, 0.2)",
            animation: `${pulse} 2s infinite ease-in-out`,
          },
        }}
      >
        {/* Background Track */}
        <CircularProgress
          variant="determinate"
          sx={{
            color: "action.hover",
          }}
          size={100}
          thickness={4}
          value={100}
        />

        {/* Active Progress Circle */}
        <CircularProgress
          variant="determinate"
          sx={{
            color: "primary.main",
            position: "absolute",
            left: 0,
            transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
            [`& .MuiCircularProgress-circle`]: {
              strokeLinecap: "round",
            },
          }}
          size={100}
          thickness={4}
          value={progress}
        />
      </Box>

      {/* Loading Text */}
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: "text.primary",
            letterSpacing: "0.1rem",
            mb: 0.5,
          }}
        >
          {loadingData.status.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 400,
            color: "text.secondary",
            fontFamily: "monospace",
          }}
        >
          {Math.round(progress)}
          {loadingData.status.progress_suffix}
        </Typography>
      </Box>
    </Box>
  );
};
