import React from "react";
import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Fade,
  alpha,
  useTheme,
} from "@mui/material";
import {
  ExpandMore,
  InstallMobile,
  Shield,
  Info,
  Build,
} from "@mui/icons-material";
import { Layout } from "../components/layout/Layout";
import faqData from "../json/faq_page.json";

const FAQSection = ({ title, icon: Icon, children }: any) => {
  const theme = useTheme();
  return (
    <Box sx={{ mb: 6 }}>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1.5}
        sx={{ mb: 3, px: 2 }}
      >
        <Icon color="primary" />
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
      </Stack>
      <Box
        sx={{
          borderRadius: 6,
          overflow: "hidden",
          border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export const FAQPage: React.FC = () => {
  const theme = useTheme();
  const { sections, header } = faqData;
  const inst = sections.installation.questions;

  return (
    <Layout>
      <Box sx={{ py: { xs: 4, md: 10 }, bgcolor: "background.default" }}>
        <Container maxWidth="md">
          <Fade in timeout={600}>
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography
                variant="h2"
                sx={{ fontWeight: 800, mb: 2, letterSpacing: "-0.03em" }}
              >
                {header.title}
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "text.secondary", fontWeight: 400 }}
              >
                {header.subtitle}
              </Typography>
            </Box>
          </Fade>

          {/* Installation & Compatibility */}
          <FAQSection title={sections.installation.title} icon={InstallMobile}>
            <FaqItem
              question={inst.install.question}
              answer={
                <>
                  {inst.install.intro}
                  <ul>
                    <li>
                      <b>{inst.install.non_rooted_label}</b>{" "}
                      {inst.install.non_rooted_text}
                      <a
                        href={inst.install.manager_url}
                        style={{ color: theme.palette.primary.main }}
                      >
                        {inst.install.non_rooted_link_text}
                      </a>
                      {inst.install.non_rooted_suffix}
                    </li>
                    <li>
                      <b>{inst.install.rooted_label}</b>{" "}
                      {inst.install.rooted_text}
                      <a
                        href={inst.install.xposed_url}
                        style={{ color: theme.palette.primary.main }}
                      >
                        {inst.install.rooted_link_text}
                      </a>
                      {inst.install.rooted_suffix}
                    </li>
                  </ul>
                  <i>{inst.install.ios_note}</i>
                </>
              }
            />
            <FaqItem
              question={inst.version.question}
              answer={inst.version.answer}
            />
            <FaqItem
              question={inst.rooting.question}
              answer={
                <>
                  {inst.rooting.answer_prefix}
                  <a
                    href={inst.rooting.link_url}
                    style={{ color: theme.palette.primary.main }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {inst.rooting.link_label}
                  </a>
                  {inst.rooting.answer_suffix}
                </>
              }
            />
          </FAQSection>

          {/* About */}
          <FAQSection title={sections.about.title} icon={Info}>
            {sections.about.questions.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </FAQSection>

          {/* Legal */}
          <FAQSection title={sections.legal.title} icon={Shield}>
            <FaqItem
              question={sections.legal.question}
              answer={sections.legal.answer}
            />
          </FAQSection>

          {/* Other */}
          <FAQSection title={sections.other.title} icon={Build}>
            <FaqItem
              question={sections.other.question}
              answer={
                <>
                  {sections.other.answer_body}
                  <br />
                  <br />
                  <i>{sections.other.note}</i>
                </>
              }
            />
          </FAQSection>
        </Container>
      </Box>
    </Layout>
  );
};

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: React.ReactNode;
}) => {
  const theme = useTheme();
  return (
    <Accordion
      disableGutters
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        "&:not(:last-child)": {
          borderBottom: `1px solid ${alpha(theme.palette.divider, 0.05)}`,
        },
        "&:before": { display: "none" },
      }}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography sx={{ fontWeight: 600 }}>{question}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ pt: 0 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ lineHeight: 1.6 }}
        >
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
