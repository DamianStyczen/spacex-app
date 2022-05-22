import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: "1",
        minHeight: "100vh",
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            <Link href="/">SpaceX App</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main">
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {children}
        </Container>
      </Box>
      <Box
        component="footer"
        sx={{
          minHeight: "4rem",
        }}
        data-testid="footer"
      >
        <Box
          sx={{
            margin: "2rem auto",
            maxWidth: "25ch",
            textAlign: "center",
          }}
        >
          Created by{" "}
          <a
            href="https://linkedin.com/damianstyczen"
            target="_blank"
            rel="noopener noreferrer"
          >
            Damian Styczeń
          </a>{" "}
          for{" "}
          <a
            href="https://www.omnicalculator.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Omni Calculator
          </a>
        </Box>
      </Box>
    </Box>
  );
}
