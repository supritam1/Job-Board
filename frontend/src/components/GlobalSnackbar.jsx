import { Snackbar, Alert } from "@mui/material";

const GlobalSnackbar = ({ open, message, severity = "error", onClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert severity={severity} onClose={onClose} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default GlobalSnackbar;


//This component handles temporary user feedback:
// Success (“Job added successfully”)
// Error (“Failed to fetch jobs”)
// Warning / info