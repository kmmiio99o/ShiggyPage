import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Button, Box } from "@mui/material";
import { theme } from "./theme/theme";

// Pages
import { LoadingPage } from "./pages/LoadingPage";
import { HomePage } from "./pages/HomePage";
import { InstallPage } from "./pages/InstallPage";
import { BuildPage } from "./pages/BuildPage";
import { ContributePage } from "./pages/ContributePage";
import { FAQPage } from "./pages/FAQPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import NotFoundPage from "./pages/NotFoundPage";

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    const criticalImages = [
      "https://avatars.githubusercontent.com/u/164557248?v=4", //kmmiio99o
      "https://codeberg.org/avatars/1da9dd14678eb2b6b45ec37fec1e68b74da49348cacd9a798154eed2a6e834ac", //cocobo1
      "https://avatars.githubusercontent.com/u/159218871?v=4", //revenge-mod
      "https://avatars.githubusercontent.com/u/82711525?v=4", //pylix
      "https://avatars.githubusercontent.com/u/112445065?v=4", //vendetta-mod
      "https://avatars.githubusercontent.com/u/78881422?v=4", //Aliucord
      "https://avatars.githubusercontent.com/u/162631015?v=4", //Jonatanktk
      "https://cdn.kmmiio99o.dev/shiggycord/xguhyl.png",
      "https://cdn.kmmiio99o.dev/shiggycord/c1hl8n.webp",
      "https://cdn.kmmiio99o.dev/shiggycord/ss-list.jpg",
      "https://cdn.kmmiio99o.dev/shiggycord/sh-category.jpg",
      "https://cdn.kmmiio99o.dev/shiggycord/sh-settings.jpg",
      "https://cdn.kmmiio99o.dev/shiggycord/l4exhy.gif",
    ];
    const skipTimer = setTimeout(() => setShowSkip(true), 3000);
    const forceLoadTimer = setTimeout(() => {
      setLoading(false);
    }, 10000);

    if (criticalImages.length === 0) {
      setLoading(false);
      return;
    }

    let loadedCount = 0;
    const total = criticalImages.length;

    criticalImages.forEach((url) => {
      const img = new Image();
      img.src = url;

      const handleImageComplete = () => {
        loadedCount++;
        setProgress((loadedCount / total) * 100);
        if (loadedCount === total) {
          setTimeout(() => setLoading(false), 600);
        }
      };

      img.onload = handleImageComplete;
      img.onerror = handleImageComplete;
    });

    return () => {
      clearTimeout(skipTimer);
      clearTimeout(forceLoadTimer);
    };
  }, []);

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* We wrap LoadingPage to position the skip button over it */}
        <Box sx={{ position: "relative" }}>
          <LoadingPage progress={progress} />

          {showSkip && (
            <Button
              variant="text"
              onClick={() => setLoading(false)}
              sx={{
                position: "fixed",
                bottom: 40,
                left: "50%",
                transform: "translateX(-50%)",
                color: "text.secondary",
                fontSize: "0.75rem",
                textDecoration: "underline",
                "&:hover": { textDecoration: "none", bgcolor: "transparent" },
              }}
            >
              Taking too long? Click here to continue
            </Button>
          )}
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/install" element={<InstallPage />} />
          <Route path="/build" element={<BuildPage />} />
          <Route path="/contribute" element={<ContributePage />} />
          <Route path="/FAQ" element={<FAQPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};
