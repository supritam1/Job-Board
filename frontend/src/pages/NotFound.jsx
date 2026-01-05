import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box textAlign="center" mt={8}>
      <Typography variant="h4" gutterBottom>
        404
      </Typography>

      <Typography color="text.secondary" gutterBottom>
        Page not found
      </Typography>

      <Button component={Link} to="/" variant="contained" sx={{ mt: 2 }}>
        Go Home
      </Button>
    </Box>
  );
};

export default NotFound;
