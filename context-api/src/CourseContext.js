import { createContext } from "react";

export const CourseContext = createContext({
  frontEnd: null,
  backEnd: null,
  db: null,
  name: null,
});
