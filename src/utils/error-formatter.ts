const formatError = (err: any) => ({
  status: "error",
  code: err.code || "INTERNAL_ERROR",
  message: err.isOperational ? err.message : "Something went wrong",
  ...(process.env.NODE_ENV !== "production" && { stack: err.stack }),
});

export default formatError;
