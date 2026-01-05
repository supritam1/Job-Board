import Job from "../models/Job.js";

// GET /api/jobs
export const getJobs = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 6;
  const skip = (page - 1) * limit;

  const totalJobs = await Job.countDocuments();
  const jobs = await Job.find()
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  res.json({
    jobs,
    totalJobs,
    currentPage: page,
    totalPages: Math.ceil(totalJobs / limit),
  });
};

// GET /api/jobs/:id
export const getJobById = async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    res.status(404);
    throw new Error("Job not found");
  }

  res.json(job);
};

// POST /api/jobs
export const createJob = async (req, res) => {
  console.log("STEP 1: body =", req.body);

  const {
    title,
    company,
    jobType,
    workMode,
    location,
    description,
    applyLink,
    applyEmail,
    applyPhone,
    deadline,
  } = req.body;

  console.log("STEP 2: destructuring done");

  if (!title || !company || !jobType || !workMode || !location || !description) {
    console.log("STEP 3: missing required fields");
    res.status(400);
    throw new Error("Missing required fields");
  }

  if (!applyLink && !applyEmail && !applyPhone) {
    res.status(400);
    throw new Error("Provide at least one apply method");
  }

  console.log("STEP 4: before Job.create");

  const job = await Job.create({
    title,
    company,
    jobType,
    workMode,
    location,
    description,
    applyLink,
    applyEmail,
    applyPhone,
    deadline,
  });

  console.log("STEP 5: after Job.create", job._id);

  res.status(201).json(job);
};