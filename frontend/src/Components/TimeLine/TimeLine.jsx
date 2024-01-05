import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Event } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const TimeLine = () => {
  const timelines = [
    {
      date: "09/2021 - 06/2025",
      title: "Graduation",
      subtitle: "Completed B.Tech in CSE",
    },
    {
      date: "03/2021",
      title: "12th grade",
      subtitle: "Achieved 96.7% in board exams",
    },
    {
      date: "05/2019",
      title: "03/2019",
      subtitle: "Achieved 8.7% in board exams",
    },
  ];
  return (
    <div>
      <Timeline position="alternate">
        {timelines.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent 
              align="right"
              variant="body2"
              color="text.secondry">{item.date}</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot><Event></Event></TimelineDot>
            </TimelineSeparator>
            <TimelineContent sx={{py:"12px", px:2}}>
              <Typography variant="h6" component="h1">
                {item.title}
              </Typography>
              <Typography>{item.subtitle}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;
