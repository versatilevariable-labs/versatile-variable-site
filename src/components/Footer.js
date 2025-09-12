import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#f8fafc", py: 6, mt: 4 }}>
      <Container>
        {/* <Grid container spacing={4} justifyContent="center" textAlign="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" fontWeight="bold">
              2,500+
            </Typography>
            <Typography color="text.secondary">Students</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" fontWeight="bold">
              50+
            </Typography>
            <Typography color="text.secondary">Courses</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" fontWeight="bold">
              95%
            </Typography>
            <Typography color="text.secondary">Success Rate</Typography>
          </Grid>
        </Grid> */}

        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          mt={4}
        >
          © {new Date().getFullYear()} versatile Variable. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
