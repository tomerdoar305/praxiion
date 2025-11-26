import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Outlet } from "react-router-dom";
import { useLocation, Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DescriptionIcon from '@mui/icons-material/Description';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import BiotechIcon from '@mui/icons-material/Biotech';
import PaidIcon from '@mui/icons-material/Paid';
import InsightsIcon from '@mui/icons-material/Insights';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar } from '@mui/material';
import Navigation from './Navigation';

const drawerWidth = 240;
const SIDE_BAR_LINKS = [
    { title: 'Dashboard', path: '/', icon: <DashboardIcon /> },
    { title: 'Calender', path: '/calender', icon: <CalendarMonthIcon /> },
    { title: 'Patients', path: '/patients', icon: <PeopleIcon /> },
    { title: 'Submissions', path: '/submissions', icon: <AssignmentIcon /> },
    { title: 'All docs', path: '/alldocs', icon: <DescriptionIcon /> },
    { title: 'Billing', path: '/billing', icon: <RequestQuoteIcon /> },
    { title: 'Pharmacy', path: '/pharmacy', icon: <LocalPharmacyIcon /> },
    { title: 'Lab Integrations', path: '/labintegrations', icon: <BiotechIcon /> },
    { title: 'Financial', path: '/financial', icon: <PaidIcon /> },
    { title: 'AI Insights', path: '/aiinsights', icon: <InsightsIcon /> },
    { title: 'Team', path: '/team', icon: <GroupIcon /> },
    { title: 'Settings', path: '/settings', icon: <SettingsIcon /> },
];

export default function Layout() {
    const location = useLocation();
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Navigation />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,

                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        borderRight: '1px solid white',   // <-- tiny white border
                    },

                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar
                    sx={{
                        borderBottom: '1px solid white',  // tiny white border
                    }}>
                    <Typography variant="h6" noWrap component="div">
                        PRAXIION
                    </Typography>
                </Toolbar>
                <Divider />
                <List sx={{ mr: 2 }} >
                    {SIDE_BAR_LINKS.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <ListItem key={item.title}
                                sx={{
                                    my: 0.5,
                                    borderRadius: "8px",           //  <-- makes the background curved
                                    mx: 1,
                                    backgroundColor: isActive ? "orange" : "transparent",
                                    "&:hover": {
                                        backgroundColor: "rgba(255, 165, 0, 0.7)",
                                    },
                                }}
                                disablePadding>
                                <ListItemButton component={Link} to={`${item.path}`}>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>

                <Toolbar
                    sx={{
                        borderTop: '1px solid white', mt: "auto"
                    }}>
                    <Avatar sx={{ bgcolor: "orange" }}>
                        YL
                    </Avatar>
                    <Typography variant="subtitle1" noWrap component="div" sx={{ ml: 1 }} >
                        Dr. Yan Lehovizki
                    </Typography>
                </Toolbar>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}