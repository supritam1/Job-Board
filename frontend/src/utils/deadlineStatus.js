export const getDeadlineStatus = (deadline) => {
  if (!deadline) {
    return { color: "success.main", label: "Active", pulse: false };
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const deadlineDate = new Date(deadline);
  deadlineDate.setHours(0, 0, 0, 0);

  if (deadlineDate.getTime() === today.getTime()) {
    return {
      color: "#9c27b0", // purple
      label: "Last day",
      pulse: true,
    };
  }

  if (deadlineDate < today) {
    return {
      color: "grey.400",
      label: "Closed",
      pulse: false,
    };
  }

  return { color: "success.main", label: "Active", pulse: false };
};
