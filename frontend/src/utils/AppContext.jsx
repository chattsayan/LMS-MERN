import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [allCourses, setAllCourses] = useState([]);
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  // Fetch all courses
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  // function to calculate avg rating of course
  const calculateAvgRating = (course) => {
    if (course.courseRatings.length === 0) return 0;

    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });

    return totalRating / course.courseRatings.length;
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const value = { currency, allCourses, navigate, calculateAvgRating };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
