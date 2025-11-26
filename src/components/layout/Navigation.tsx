import { AppBar, Toolbar, Typography, Avatar, Menu, MenuItem, IconButton, Box, OutlinedInput, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useState } from "react";
import { Link } from "react-router-dom";

const drawerWidth = 240;
export default function Navigation() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                width: `calc(100% - ${drawerWidth}px)`,
                ml: `${drawerWidth}px`,
                borderBottom: "1px solid white",
            }}
        >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

                <Typography variant="h6" noWrap component="div">
                    Clinic Intelligens Hub
                </Typography>

                {/* Right Avatar Dropdown */}
                <Box>
                    {/* SEARCH BAR */}
                    <OutlinedInput
                        placeholder="Search…"
                        size="small"
                        sx={{
                            width: 220,
                            backgroundColor: "white",
                            borderRadius: "8px",
                            "& fieldset": { border: "none" },
                            fontSize: "0.9rem",
                        }}
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: "gray" }} />
                            </InputAdornment>
                        }
                    />
                    <IconButton sx={{ color: "white" }}>
                        <NotificationsNoneIcon />
                    </IconButton>
                    <IconButton onClick={handleOpen} sx={{ p: 0 }}>
                        <Avatar sx={{ bgcolor: "orange", color: "white" }}>
                            YL
                        </Avatar>
                        <KeyboardArrowDownIcon sx={{ color: "white" }} />
                    </IconButton>

                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Settings</MenuItem>
                        <MenuItem
                            component={Link}
                            to="/login"
                            onClick={handleClose}
                        >
                            Logout
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}