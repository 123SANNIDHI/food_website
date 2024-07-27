import React from 'react'
import Layout from '../component/Layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
        <Box sx={{
          my:15,
          textAlign:'center',
          padding:2,
          "& h4":{
            fontWeight:'bold',
            my:2,
            fontSize:'2rem', 
          },
          "& p":{
            textAlign:"justify",
          },
          "@media (max-width:600px)":{
            mt:0,
            "& h4":{
              fontSize:'1.5rem',
            }
          }
        }}>
          <Typography variant='h4'>
            Welcome To My Resturant
          </Typography>
          <p>
          Welcome to My Restaurant, where culinary excellence meets warm hospitality. Located in the heart of Bangalore, our restaurant offers a unique dining experience that combines traditional recipes with modern twists. Our journey began in 2022, driven by a passion for authentic flavors and a commitment to quality. We take pride in our diverse menu, crafted from locally sourced, fresh ingredients to ensure every dish is bursting with flavor. From mouth-watering appetizers to delectable desserts, our talented chefs create dishes that delight the senses. Whether you're here for a casual lunch or a special celebration, we aim to make every visit memorable.
          </p>
          <br/>
          <p>
          At My Restaurant, we believe in more than just serving great food; we strive to provide an exceptional dining experience. Our cozy, inviting ambiance and warm, friendly staff make you feel right at home from the moment you walk in. We are dedicated to outstanding service and creating a welcoming environment for all our guests. Your satisfaction is our top priority, and we are committed to making every visit delightful. Join us and discover the unique tastes and vibrant atmosphere that define My Restaurant. We look forward to serving you and making your dining experience truly special.
          </p>
        </Box>
    </Layout>
  );
};

export default About;