import { useState, useMemo } from "react";
import {
  Typography,
  Pagination,
  Stack,
  Skeleton,
  Alert,
  Box,
  TextField,
  MenuItem,
} from "@mui/material";
import { useGetJobsQuery } from "../app/apiSlice";
import JobCard from "../components/JobCard";
import { useSearchParams } from "react-router-dom";

const JobList = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;


  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
    jobType: "",
  });

  const { data, isLoading, isError } = useGetJobsQuery({
    page,
    limit: 6,
  });

  // ✅ SAFE EXTRACTION (VERY IMPORTANT)
  const jobs = data?.jobs ?? [];

  // ---------- FILTERED JOBS ----------
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const keyword = filters.keyword.toLowerCase();
      const location = filters.location.toLowerCase();

      const keywordMatch =
        job.title.toLowerCase().includes(keyword) ||
        job.company.toLowerCase().includes(keyword);

      const locationMatch =
        !filters.location ||
        job.location.toLowerCase().includes(location);

      const jobTypeMatch =
        !filters.jobType || job.jobType === filters.jobType;

      return keywordMatch && locationMatch && jobTypeMatch;
    });
  }, [jobs, filters]);

  if (isError) {
    return <Alert severity="error">Failed to load jobs</Alert>;
  }

  return (
    <>
      {/* -------- PAGE TITLE -------- */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        Available Jobs
      </Typography>

      {/* -------- MINIMAL FILTER BAR -------- */}
      <Box sx={{ mb: 3 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          alignItems="center"
        >
          <TextField
            size="small"
            placeholder="Search jobs"
            value={filters.keyword}
            onChange={(e) =>
              setFilters({ ...filters, keyword: e.target.value })
            }
            fullWidth
          />

          <TextField
            size="small"
            placeholder="Location"
            value={filters.location}
            onChange={(e) =>
              setFilters({ ...filters, location: e.target.value })
            }
            fullWidth
          />

          <TextField
            select
            size="small"
            value={filters.jobType}
            onChange={(e) =>
              setFilters({ ...filters, jobType: e.target.value })
            }
            sx={{ minWidth: 160 }}
            SelectProps={{
              displayEmpty: true,
              renderValue: (selected) => {
                if (!selected) {
                  return (
                    <span style={{ color: "#9ca3af" }}>
                      Job Type
                    </span>
                  );
                }
                return selected;
              },
            }}
            fullWidth
          >
            <MenuItem value="Full-time">Full-time</MenuItem>
            <MenuItem value="Remote">Part-time</MenuItem>
            <MenuItem value="Internship">Internship</MenuItem>
          </TextField>


        </Stack>
      </Box >

      {/* -------- JOB GRID -------- */}
      < Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 3,
        }
        }
      >
        {
          isLoading
            ? Array.from(new Array(6)).map((_, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                height={200}
                sx={{ borderRadius: 2 }}
              />
            ))
            : filteredJobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))
        }
      </Box >

      {/* -------- EMPTY STATE -------- */}
      {
        !isLoading && filteredJobs.length === 0 && (
          <Typography sx={{ mt: 4 }} color="text.secondary">
            No jobs found matching your filters.
          </Typography>
        )
      }

      {/* -------- PAGINATION -------- */}
      {
        !isLoading && data?.totalPages > 1 && (
          <Stack alignItems="center" sx={{ mt: 4 }}>
            <Pagination
              count={data.totalPages}
              page={page}
              onChange={(_, value) => {
                setSearchParams({ page: value });
              }}

              color="primary"
            />
          </Stack>
        )
      }
    </>
  );
};

export default JobList;
