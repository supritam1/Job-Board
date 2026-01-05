import { Box } from "@mui/material";

const PurplePulse = () => {
  return (
    <Box
      sx={{
        width: 14,
        height: 14,
        borderRadius: "50%",
        backgroundColor: "#7c3aed", // purple
        boxShadow: "0 0 0 0 rgba(124,58,237,0.7)",
        animation: "pulse 1.5s infinite",
        "@keyframes pulse": {
          "0%": {
            boxShadow: "0 0 0 0 rgba(124,58,237,0.7)",
          },
          "70%": {
            boxShadow: "0 0 0 10px rgba(124,58,237,0)",
          },
          "100%": {
            boxShadow: "0 0 0 0 rgba(124,58,237,0)",
          },
        },
      }}
    />
  );
};

export default PurplePulse;
