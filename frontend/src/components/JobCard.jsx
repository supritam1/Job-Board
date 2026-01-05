import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Button,
  Box,
  Tooltip,
} from "@mui/material";
import { Link} from "react-router-dom";
import { getDeadlineStatus } from "../utils/deadlineStatus";
import { useSearchParams} from "react-router-dom";

const JobCard = ({ job }) => {
  const status = getDeadlineStatus(job.deadline);
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const isClosed = status.label === "Closed";


  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
        transition: "all 0.25s ease",
        position: "relative",
        "&:hover": {
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          transform: "translateY(-4px)",
          borderColor: "primary.main",
        },
      }}
    >
      {/* Deadline Status Dot */}
      <Tooltip title={status.label} arrow>
        <Box
          sx={{
            position: "absolute",
            top: 18,
            right: 16,
            width: 10,
            height: 10,
            borderRadius: "50%",
            bgcolor: status.color,

            // 🔮 Purple pulse animation (today only)
            ...(status.pulse && {
              animation: "pulse 1.6s ease-in-out infinite",
            }),

            // Keyframes
            "@keyframes pulse": {
              "0%": {
                boxShadow: "0 0 0 0 rgba(156,39,176,0.6)",
              },
              "70%": {
                boxShadow: "0 0 0 8px rgba(156,39,176,0)",
              },
              "100%": {
                boxShadow: "0 0 0 0 rgba(156,39,176,0)",
              },
            },
          }}
        />
      </Tooltip>

      <CardContent sx={{ p: 3 }}>
        <Stack spacing={1.2}>
          {/* Job Title */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              lineHeight: 1.3,
              pr: 2, // prevent overlap with dot
            }}
          >
            {job.title}
          </Typography>

          {/* Company */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontWeight: 500 }}
          >
            {job.company}
          </Typography>

          {/* Location */}
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            📍 {job.location}
          </Typography>

          {/* Job Type + Work Mode */}
          <Stack direction="row" spacing={1} flexWrap="wrap" mt={0.5}>
            {job.jobType && (
              <Chip
                label={job.jobType}
                size="small"
                sx={{ fontWeight: 500, borderRadius: 1 }}
              />
            )}

            {job.workMode && (
              <Chip
                label={job.workMode}
                size="small"
                variant="outlined"
                sx={{ borderRadius: 1 }}
              />
            )}
          </Stack>

          {/* CTA */}
          <Button
            component={Link}
          to={`/jobs/${job._id}?page=${page}`}
          disabled={isClosed}
          disableRipple
          sx={{
            mt: 1,
            alignSelf: "flex-start",
            position: "relative",

            // 👇 visual breathing room
            px: 0.5,
            py: 0.5,

            fontWeight: 600,
            textTransform: "none",
            color: "primary.main",
            overflow: "hidden",

            // ---- underline (inset & themed) ----
            "&::after": {
              content: '""',
              position: "absolute",
              left: "0.4em",       // 👈 NOT starting from letter edge
              right: "0.4em",
              bottom: 2,
              height: "2px",
              background: (theme) =>
                `linear-gradient(
          90deg,
          ${theme.palette.primary.main},
          ${theme.palette.secondary.main}
        )`,
              transform: "scaleX(0)",
              transformOrigin: "left",
              transition: "transform 0.35s ease",
              borderRadius: 2,
            },

            // ---- soft glow (theme-aware) ----
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              background: (theme) =>
                `radial-gradient(
          circle at left,
          ${theme.palette.primary.main}22,
          transparent 65%
        )`,
              opacity: 0,
              transition: "opacity 0.35s ease",
            },

            "&:hover::after": {
              transform: "scaleX(1)",
            },

            "&:hover::before": {
              opacity: 1,
            },

            // ---- arrow animation ----
            "& .arrow": {
              display: "inline-block",
              marginLeft: 4,
              opacity: 0,
              transform: "translateX(-4px)",
              transition: "all 0.35s ease",
            },

            "&:hover .arrow": {
              opacity: 1,
              transform: "translateX(0)",
            },
          }}
          >
          View Details
          <span className="arrow">→</span>
        </Button>
      </Stack>
    </CardContent>
    </Card >
  );
};

export default JobCard;
