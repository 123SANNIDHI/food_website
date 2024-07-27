import React from 'react';
import Layout from '../component/Layout/Layout';
import { Box, Paper, Table, TableContainer, TableHead, TableCell, TableRow, Typography, TableBody } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "$ h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant='h4'>Contact Us</Typography>
        <p>
        For any inquiries, feedback, or reservations, please reach out to My Restaurant located at Bangalore. You can call us at <a href="tel:+918909876543">8909876543</a> or email us at <a href="mailto:info@gmai.com">info@gmai.com</a>. Our opening hours are Monday to Friday from 11:00 AM to 10:00 PM, Saturday from 12:00 PM to 11:00 PM, and Sunday from 12:00 PM to 9:00 PM. Stay connected with us on social media: <a href="https://www.facebook.com/dummy">Facebook Page Link</a>, <a href="https://www.twitter.com/dummy">Twitter Handle</a>, and <a href="https://www.instagram.com/myrestaurant">Instagram Handle</a>.
        </p>
      </Box>
      <Box sx={{m:3,width:"600px",ml:10,"@media(max-width:600px)":{ width:'300px'}}}>
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black',color:'white'}}
                align='center'
                >Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: 'red', pt: 1 }} /> 1800-00-0000 (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: 'black', pt: 1 }} /> info@restaurant.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: 'green', pt: 1 }} /> 9873456732
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
}

export default Contact;
