import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Banner from '../../Home/Banner/Banner';
import { Button } from 'react-bootstrap';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddPackage from '../AddPackage/AddPackage';
import ManagePackages from '../ManagePackages/ManagePackages';
import AddReview from '../AddReview/AddReview';
import Payment from '../Payment/Payment';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const drawerWidth = 190;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let {path, url} = useRouteMatch();

  const {admin} = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
        <Toolbar/>
        <Divider/>
     {!admin && 
     <Box>
        <h5>User Portal</h5>
        <Link to={`${url}/addReview`}><Button variant="text text-danger mt-5">Add a review</Button></Link>
        <Link to={`${url}/myOrders`}><Button variant="text text-danger mt-2">My Purchases</Button></Link>
        <Link to={`${url}/payment`}><Button variant="text text-danger mt-2">Payment</Button></Link>
         </Box>}
     {admin && 
        <Box>
          <h5>Admin Portal</h5>
          <Link to={`${url}/addPackage`}><Button variant="text text-danger mt-2">Add to collections</Button></Link>
          <Link to={`${url}/makeAdmin`}><Button variant="text text-danger mt-2">Make an Admin</Button></Link>
          <Link to={`${url}/managePackages`}><Button variant="text text-danger mt-2">Manage Collections</Button></Link>
          <Link to={`${url}/manageAllOrders`}><Button variant="text text-danger mt-2">Manage All Orders</Button></Link>
        </Box>}
     
    
     {/* <Link to="/manageOrders"><Button variant="text text-danger mt-2">Manage All Orders</Button></Link> */}

      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
    
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
          <Toolbar/>
        
        <Route exact path={path}>
            <Banner></Banner>
        </Route>
{/* admin routes */}
        <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${url}/addPackage`}>
            <AddPackage></AddPackage>
        </AdminRoute>
        <AdminRoute path={`${url}/managePackages`}>
            <ManagePackages></ManagePackages>
        </AdminRoute>
        <AdminRoute path={`${url}/manageAllOrders`}>
            <AddReview></AddReview>
        </AdminRoute>

{/* Normal registered users routes */}
        <Route path={`${url}/addReview`}>
            <AddReview></AddReview>
        </Route>
        <Route path={`${url}/payment`}>
            <Payment></Payment>
        </Route>
        <Route path={`${url}/myOrders`}>
            <AddReview></AddReview>
        </Route>
     
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
