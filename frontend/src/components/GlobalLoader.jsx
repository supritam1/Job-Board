import { Backdrop, CircularProgress } from "@mui/material";

const GlobalLoader = ({ open }) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default GlobalLoader;

//This component do:
//Block the UI and show loading while something async is happening