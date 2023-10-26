import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
function App() {
  const [selectedIndex, setSelectedIndex] = useState('GF');
  const [selectedPath, setSelectedPath] = useState('GF content')
  const [open, setOpen] = useState(true);
  const handleListItemClick = (event, newValue) => {
    setSelectedIndex(newValue);

  };
  const handleClick = () => {
    setOpen(!open);
  }
  const selectedButtonStyle = {
    color: 'blue'
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
  }));
  const listButtonSidebar = [
    {
      name: 'PC Status', icon: <ListItemIcon><InboxIcon /></ListItemIcon>, index: 'PC Status', path: '', collapseStatus: true,
      subButton: [{ name: 'Ground Floor', icon: <ListItemIcon><StarBorder /></ListItemIcon>, collapseStatus: true, index: 'GF', path: 'GF content' },
      { name: 'Two Floor', icon: <ListItemIcon><StarBorder /></ListItemIcon>, collapseStatus: true, index: '2F', path: '2F content' },
      { name: 'Three Floor', icon: <ListItemIcon><StarBorder /></ListItemIcon>, collapseStatus: true, index: '3F', path: '3F content' },
      ]
    },
    {
      name: 'Inventory', icon: <ListItemIcon><DraftsIcon /></ListItemIcon>, index: 'inventory', path: 'inventory content', collapseStatus: false,
    }
  ]
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={6} md={2}>
          <Item>
            <h3>image</h3>
            <List component="nav" aria-label="main mailbox folders">
              {
                listButtonSidebar.map((button, index) => {
                  return (
                    <div key={index}>
                      <ListItemButton
                        selected={selectedIndex === button.index}
                        onClick={button.collapseStatus ? handleClick : (event) => handleListItemClick(event, button.index)}
                        style={selectedIndex === button.index ? selectedButtonStyle : {}

                        }
                      >
                        {console.log(selectedIndex)}
                        {button.icon}
                        <ListItemText primary={button.name} />
                        {button.collapseStatus && (open ? <ExpandLess /> : <ExpandMore />)}
                      </ListItemButton>
                      {
                        button.collapseStatus &&
                        <Collapse in={open} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            {
                              button.subButton.map((subButton, index) => {
                                return (
                                  <div key={index}>
                                    <ListItemButton
                                      sx={{ pl: 4 }}
                                      selected={selectedIndex === subButton.index}
                                      onClick={(event) => handleListItemClick(event, subButton.index)}
                                      style={selectedIndex === subButton.index ? selectedButtonStyle : {}}
                                    >
                                      <ListItemIcon>
                                        {subButton.icon}
                                      </ListItemIcon>
                                      <ListItemText primary={subButton.name} />
                                    </ListItemButton>
                                  </div>
                                )
                              })
                            }
                          </List>
                        </Collapse>
                      }
                    </div>
                  )
                })
              }
            </List>
          </Item>
        </Grid>
        <Grid item xs={6} md={10}>
          <Item>
            {
              listButtonSidebar.map((content, index) => {
                return (
                  <div key={index}>
                    {
                      <h1>{selectedIndex}</h1>
                    }
                  </div>
                )
              })
            }
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
