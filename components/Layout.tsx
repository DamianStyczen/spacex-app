import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box sx={{ flexGrow: "1" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            SpaceX Launches
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {children}
        </Container>
        <footer>
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
        </footer>
      </Box>
    </Box>
  );
}
