import { format } from "date-fns";

export const getCurrentTime = () => {
  const now = new Date();

  return format(now, "hh:mm:ss a");
};
