import { useParams, Link } from "react-router-dom";
import {
  Typography,
  CircularProgress,
  Alert,
  Box,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import { useGetJobByIdQuery } from "../app/apiSlice";
import { useSearchParams } from "react-router-dom";


/* ---------- Helpers ---------- */

// Format date nicely
const formatDate = (date) => {
  if (!date) return null;
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

// Parse description only IF structured headings exist
const parseDescription = (text = "") => {
  const normalized = text.replace(/\r\n/g, "\n").trim();

  const hasStructuredSections =
    /job overview|key responsibilities|qualifications/i.test(normalized);

  // ✅ Free text → show as-is
  if (!hasStructuredSections) {
    return {
      raw: normalized,
      overview: "",
      responsibilities: [],
      qualifications: [],
    };
  }

  // Structured parsing
  const sections = {
    raw: "",
    overview: "",
    responsibilities: [],
    qualifications: [],
  };

  const parts = normalized.split(
    /(Job Overview|Key Responsibilities|Qualifications|Qualifications & Skills)/i
  );

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i]?.toLowerCase() || "";

    if (part.includes("job overview")) {
      sections.overview = parts[i + 1]?.trim() || "";
    }

    if (part.includes("key responsibilities")) {
      sections.responsibilities =
        parts[i + 1]?.split("\n").filter(Boolean) || [];
    }

    if (part.includes("qualification")) {
      sections.qualifications =
        parts[i + 1]?.split("\n").filter(Boolean) || [];
    }
  }

  return sections;
};

/* ---------- Component ---------- */

const JobDetails = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const { data, isLoading, isError } = useGetJobByIdQuery(id);

  if (isLoading) return <CircularProgress />;
  if (isError) return <Alert severity="error">Job not found</Alert>;

  const description = parseDescription(data.description);


  return (

    <Box maxWidth="md">
      <Stack spacing={3}>
        {/* Title & Company */}
        <Stack spacing={0.5}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            {data.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontWeight: 600, color: "text.secondary" }}
          >
            {data.company}
          </Typography>
        </Stack>

        {/* Meta */}
        <Stack direction="row" spacing={1} flexWrap="wrap">
          <Chip label={data.location} />
          {data.jobType && <Chip label={data.jobType} />}
          {data.workMode && <Chip label={data.workMode} />}
        </Stack>

        {/* Deadline */}
        {data.deadline && (
          <Typography color="text.secondary">
            ⏳ Apply before: {formatDate(data.deadline)}
          </Typography>
        )}

        {/* -------- Description -------- */}

        {/* Free-text description */}
        {description.raw ? (
          <Stack spacing={1}>
            <Typography variant="h6">Job Description</Typography>
            <Typography
              color="text.secondary"
              sx={{ whiteSpace: "pre-line" }}
            >
              {description.raw}
            </Typography>
          </Stack>
        ) : (
          <>
            {/* Overview */}
            {description.overview && (
              <Stack spacing={1}>
                <Typography variant="h6">Job Overview</Typography>
                <Typography color="text.secondary">
                  {description.overview}
                </Typography>
              </Stack>
            )}

            {/* Responsibilities */}
            {description.responsibilities.length > 0 && (
              <Stack spacing={1}>
                <Typography variant="h6">Key Responsibilities</Typography>
                <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                  {description.responsibilities.map((item, i) => (
                    <li key={i}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        {item.trim()}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Stack>
            )}

            {/* Qualifications */}
            {description.qualifications.length > 0 && (
              <Stack spacing={1}>
                <Typography variant="h6">
                  Qualifications & Skills
                </Typography>
                <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                  {description.qualifications.map((item, i) => (
                    <li key={i}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        {item.trim()}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Stack>
            )}
          </>
        )}

        {/* -------- Apply Section -------- */}

        {data.applyLink && (
          <Button
            href={data.applyLink}
            target="_blank"
            variant="contained"
          >
            Apply Now
          </Button>
        )}

        {data.applyEmail && (
          <Typography>
            📧 Apply via Email: {data.applyEmail}
          </Typography>
        )}

        {data.applyPhone && (
          <Typography>
            📞 Contact: {data.applyPhone}
          </Typography>
        )}

        {/* Back */}
        <Button
          component={Link}
          to={`/?page=${page}`}
          variant="outlined"
          sx={{ alignSelf: "flex-start", mt: 2 }}
        >
          Back to Jobs
        </Button>
      </Stack>
    </Box>
  );
};

export default JobDetails;
