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
      date: "MAY  2019",
      title: "10th grade",
      subtitle: "Achieved 89.7% in board exams",
    },
    {
      date: "MAR  2021",
      title: "12th grade",
      subtitle: "Achieved 96.7% in board exams",
    },
    {
      date: "JUN 2025",
      title: "Graduation",
      subtitle: "Completed B.Tech in CSE",
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
              fontWeight="600"
              color="blue">{item.date}</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ height: 100 }}/>
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
