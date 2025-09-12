import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import CoffeeIcon from "@mui/icons-material/Coffee";
import AndroidIcon from "@mui/icons-material/Android";

const CoursesSection = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight="bold"
        gutterBottom
      >
        Programming Courses
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ textAlign: "center", p: 2 }}>
            <LaptopMacIcon sx={{ fontSize: 60, color: "green" }} />
            <CardContent>
              <Typography variant="h6">Java</Typography>
              <Typography color="text.secondary">
                Learn Java from scratch with real projects.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ textAlign: "center", p: 2 }}>
            <CoffeeIcon sx={{ fontSize: 60, color: "orange" }} />
            <CardContent>
              <Typography variant="h6">Python</Typography>
              <Typography color="text.secondary">
                Master Python with hands-on exercises.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ textAlign: "center", p: 2 }}>
            <AndroidIcon sx={{ fontSize: 60, color: "teal" }} />
            <CardContent>
              <Typography variant="h6">RPA</Typography>
              <Typography color="text.secondary">
                Automate workflows with RPA training.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CoursesSection;
