import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Brand */}
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                textDecoration: "none",
                color: "inherit",
                fontWeight: 700,
                letterSpacing: 0.3,
              }}
            >
              JobBoard
            </Typography>

            {/* Nav */}
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                component={Link}
                to="/"
                color="inherit"
                sx={{
                  textTransform: "none",
                  fontWeight: 500,
                }}
              >
                Jobs
              </Button>

              <Button
                component={Link}
                to="/add-job"
                variant="outlined"
                color="inherit"
                sx={{
                  textTransform: "none",
                  fontWeight: 500,
                  borderColor: "rgba(255,255,255,0.6)",
                }}
              >
                Add Job
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Page content */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;