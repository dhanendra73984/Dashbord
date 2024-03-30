import React from 'react';
import { Typography, Container, Grid, Paper, Link, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';

import './Dashboard.css'; // Import the CSS file for animations 

function Profile() {
  return (
    <Container className="animated-card" style={{ marginTop: 50 ,marginBottom:20,}}>
      <Paper elevation={3} style={{ padding: 16, borderRadius: 16 }}>
      <Typography variant="h2" gutterBottom style={{ textAlign: 'center', marginBottom: 24, color: 'white', padding: '10px', borderRadius: '5px', background: 'linear-gradient(to right, #2980b9, #2c3e50)' }}>
          Dhanendra Sahu
        </Typography>
        <Grid container spacing={3} style={{ marginBottom: 12 }}>

          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom style={{ marginBottom: 24, color: 'white', padding: '10px', borderRadius: '5px', background: 'linear-gradient(to right, #2980b9, #2c3e50)' }} >
              Skills:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CodeIcon />
                </ListItemIcon>
                <ListItemText primary="Languages" secondary="Java, JavaScript, TypeScript, Swift, HTML5, CSS3" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <WorkIcon />
                </ListItemIcon>
                <ListItemText primary="Frameworks/Library" secondary="ReactJS, React-Native, WebSocket, Redux, Android, iOS" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Backend" secondary="Node.js, Express.js, Spring Boot" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Database" secondary="MySQL, MongoDB" />
              </ListItem>
            </List>
          </Grid>
          <hr />
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom style={{ marginBottom: 24, color: 'white', padding: '10px', borderRadius: '5px', background: 'linear-gradient(to right, #2980b9, #2c3e50)' }}>
              Projects:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <WorkIcon />
                </ListItemIcon>
                <ListItemText primary="Websites" secondary={
                  <>
                    <Link href="https://lilappp.rb-aai.in/#!" target="_blank" rel="noopener noreferrer" color="inherit">LILA-Rajbhash</Link>,
                    <Link href="https://lilahindipravah.rb-aai.in/#!" target="_blank" rel="noopener noreferrer" color="inherit">Lila-hindi Pravha</Link>
                  </>
                } />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <WorkIcon />
                </ListItemIcon>
                <ListItemText primary="Mobile Applications" secondary={
                  <>
                    <Link href="https://play.google.com/store/apps/details?id=com.lilafirst&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" color="inherit">LILA-Rajbhash</Link>,
                    <Link href="https://play.google.com/store/apps/details?id=com.uptodictionaryandvocab&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" color="inherit">Lila-hindi Pravha</Link>,
                    <Link href="https://play.google.com/store/apps/details?id=com.addingaudiofile&hl=en_IN&gl=US" target="_blank" rel="noopener noreferrer" color="inherit">E-mahashbdkosh</Link>
                  </>
                } />
              </ListItem>
            </List>
          </Grid>
          <hr />
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom style={{  marginBottom: 24, color: 'white', padding: '10px', borderRadius: '5px', background: 'linear-gradient(to right, #2980b9, #2c3e50)' }}>
              Contacts:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText primary={<Link href="tel:+917987722893" color="inherit">+917987722893</Link>} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary={<Link href="mailto:dhanendra73984@gmail.com" color="inherit">dhanendra73984@gmail.com</Link>} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LanguageIcon />
                </ListItemIcon>
                <ListItemText primary={<Link href="https://medium.com/@dhanendra73984" target="_blank" rel="noopener noreferrer" color="inherit">Medium</Link>} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GitHubIcon />
                </ListItemIcon>
                <ListItemText primary={<Link href="https://github.com/dhanendra73984" target="_blank" rel="noopener noreferrer" color="inherit">Github</Link>} />
              </ListItem>
            </List>
          </Grid>

        </Grid>

      </Paper>
    </Container>
  );
}

export default Profile;
