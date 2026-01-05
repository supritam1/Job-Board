import axiosInstance from "./axiosInstance";

export const createJob = async (jobData) => {
  const response = await axiosInstance.post("/jobs", jobData);
  return response.data;
};
