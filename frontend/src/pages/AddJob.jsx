import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  MenuItem,
  Paper,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { jobSchema } from "./jobValidation";
import { createJob } from "../services/jobService";
import GlobalSnackbar from "../components/GlobalSnackbar";
import GlobalLoader from "../components/GlobalLoader";
import { useState } from "react";

const AddJob = () => {
  const today = new Date().toISOString().split("T")[0];
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(jobSchema),
    defaultValues: {
      title: "",
      company: "",
      jobType: "",
      workMode: "",
      location: "",
      description: "",
      applyLink: "",
      applyEmail: "",
      applyPhone: "",
      deadline: "",
    },
  });

  const jobType = watch("jobType");
  const workMode = watch("workMode");

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await createJob(data);
      setSnackbar({
        open: true,
        message: "Job created successfully",
        severity: "success",
      });

      reset({
        title: "",
        company: "",
        jobType: "",
        workMode: "",
        location: "",
        description: "",
        applyLink: "",
        applyEmail: "",
        applyPhone: "",
        deadline: "",
      });
    } catch {
      setSnackbar({
        open: true,
        message: "Failed to create job",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        backgroundColor: "background.default",
        px: { xs: 1.5, sm: 3 },
        py: { xs: 2, sm: 3 },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 900,
          mx: "auto",
          p: { xs: 2, sm: 3 },
          borderRadius: 3,
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography variant="h5" fontWeight={600} mb={2}>
          Add New Job
        </Typography>

        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },
              gap: 1.75,
            }}
          >
            <TextField
              label="Job Title"
              {...register("title")}
              error={!!errors.title}
              helperText={errors.title?.message}
              size="small"
              fullWidth
            />

            <TextField
              label="Company"
              {...register("company")}
              error={!!errors.company}
              helperText={errors.company?.message}
              size="small"
              fullWidth
            />

            <TextField
              select
              label="Job Type"
              value={jobType}
              {...register("jobType")}
              error={!!errors.jobType}
              helperText={errors.jobType?.message}
              size="small"
              fullWidth
            >
              <MenuItem value="Full-time">Full-time</MenuItem>
              <MenuItem value="Part-time">Part-time</MenuItem>
              <MenuItem value="Internship">Internship</MenuItem>
            </TextField>

            <TextField
              select
              label="Work Mode"
              value={workMode}
              {...register("workMode")}
              error={!!errors.workMode}
              helperText={errors.workMode?.message}
              size="small"
              fullWidth
            >
              {/* <MenuItem value="">
                <em>Select work mode</em>
              </MenuItem> */}
              <MenuItem value="Remote">Remote</MenuItem>
              <MenuItem value="Hybrid">Hybrid</MenuItem>
              <MenuItem value="On-site">On-site</MenuItem>
            </TextField>

            <TextField
              label="Location"
              {...register("location")}
              error={!!errors.location}
              helperText={errors.location?.message}
              size="small"
              fullWidth
            />

            <TextField
              label="Deadline"
              type="date"
              {...register("deadline")}
              InputLabelProps={{ shrink: true }}
              inputProps={{ min: today }}
              size="small"
              fullWidth
              sx={{
                "& input": {
                  color: "text.secondary",
                },
                "& input:focus": {
                  color: "text.primary",
                },
              }}
            />

            <TextField
              label="Apply Link"
              {...register("applyLink")}
              size="small"
              fullWidth
            />

            <TextField
              label="Apply Email"
              {...register("applyEmail")}
              size="small"
              fullWidth
            />

            <TextField
              label="Apply Phone"
              {...register("applyPhone")}
              size="small"
              fullWidth
            />

            <TextField
              label="Description"
              multiline
              rows={3}
              {...register("description")}
              error={!!errors.description}
              helperText={errors.description?.message}
              size="small"
              fullWidth
              sx={{ gridColumn: "1 / -1" }}
            />
          </Box>

          <Stack
            direction="row"
            justifyContent={{ xs: "center", sm: "flex-end" }}
            mt={3}
          >
            <Button
              type="submit"
              variant="contained"
              size="medium"
              sx={{ px: 4, minWidth: 160 }}
            >
              Submit Job
            </Button>
          </Stack>
        </Box>
      </Paper>

      <GlobalLoader open={loading} />
      <GlobalSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      />
    </Box>
  );
};

export default AddJob;
