import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      dark: "#115293",
    },
    background: {
      default: "#f9fafb",
      paper: "#ffffff",
    },
    text: {
      primary: "#111827",
      secondary: "#6b7280",
    },
    divider: "#e5e7eb",
  },

  typography: {
    fontFamily: "Inter, Roboto, sans-serif",

    h6: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    body1: {
      fontSize: "0.95rem",
    },
    body2: {
      fontSize: "0.85rem",
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export default theme;
      