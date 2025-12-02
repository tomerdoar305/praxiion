import { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";      // month view
import timeGridPlugin from "@fullcalendar/timegrid";    // week & day view
import interactionPlugin from "@fullcalendar/interaction"; // click & drag
import { Box, Button, Grid, IconButton, Menu, MenuItem, Paper, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


const Calender = () => {
    const fallbackTitle = new Date().toLocaleString("en-US", {
        month: "long",
        year: "numeric",
    });
    const calendarRef = useRef<FullCalendar | null>(null);
    const [calendarTitle, setCalendarTitle] = useState("");
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [viewTitle, setViewTitle] = useState("dayGridMonth")
    const open = Boolean(anchorEl);

    const getViewTitle = () => {
        switch (viewTitle) {
            case "dayGridMonth":
                return "Month";
            case "timeGridWeek":
                return "Week";
            case "timeGridDay":
                return "Day";
            default:
                return "";
        }
    }


    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    const handleNext = () => {
        if (!calendarRef.current) return;
        const api = calendarRef.current.getApi();
        api.next();
    };

    const handlePrev = () => {
        if (!calendarRef.current) return;
        const api = calendarRef.current.getApi();
        api.prev();
    };

    const handleToday = () => {
        if (!calendarRef.current) return;
        const api = calendarRef.current.getApi();
        api.today();
    };

    const handleChangeView = (view: string) => {
        if (!calendarRef.current) return;
        const api = calendarRef.current.getApi();
        api.changeView(view);
    };

    return (
        <Box>
            {/* ⭐ Custom MUI Toolbar */}
            <Paper
                elevation={8}
                sx={{
                    width: '100%',
                    p: 2,
                    borderRadius: 3,
                    backgroundColor: "#2a2a2a",
                    color: "white",
                    marginBottom: 4
                }}
            >
                {/* Left section: buttons */}
                <Grid container spacing={2}>
                    <Grid size={{ xs: 6, md: 6 }}>

                        <Box display="flex"
                            flexDirection="column"
                            justifyContent="flex-start"
                        >
                            <Typography variant="h5" fontWeight="bold">
                                Calendar
                            </Typography>
                            <Typography variant="subtitle2" fontWeight="bold" color="gray">
                                Month / Week / Day views with scheduling
                            </Typography>
                        </Box>
                    </Grid>


                    <Grid size={{ xs: 6, md: 6 }}>
                        <Box display="flex" gap={1}>
                            <Button
                                sx={{
                                    backgroundColor: "#1f1f1f",
                                    color: "white",
                                    "&:hover": {
                                        backgroundColor: "#181818",
                                    },
                                }}

                                variant="contained"
                                size="small"
                                onClick={handleToday}
                            >
                                Today
                            </Button>
                            <Button
                                sx={{
                                    backgroundColor: "#1f1f1f",
                                    color: "white",
                                    "&:hover": {
                                        backgroundColor: "#181818",
                                    },
                                }}

                                variant="contained"
                                size="small"
                                onClick={handlePrev}
                            >
                                <ArrowBackIosNewIcon />
                            </Button>

                            <Button
                                sx={{
                                    backgroundColor: "#1f1f1f",
                                    color: "white",
                                    "&:hover": {
                                        backgroundColor: "#181818",
                                    },
                                }}

                                variant="contained"
                                size="small"
                                onClick={handleNext}
                            >
                                <ArrowForwardIosIcon />
                            </Button>

                            {/* Center: title that updates */}
                            <Box
                                component="fieldset"
                                sx={{
                                    border: "1px solid #ccc",
                                    borderRadius: 2,

                                }}
                            >
                                <Typography variant="subtitle1" fontWeight="bold">
                                    {calendarTitle || fallbackTitle}
                                </Typography>
                            </Box>


                            {/* Right side: view options */}
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                {getViewTitle() || "Select View"}
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                slotProps={{
                                    list: {
                                        'aria-labelledby': 'basic-button',
                                    },
                                }}
                            >
                                <MenuItem onClick={() => handleChangeView("dayGridMonth")}>Month</MenuItem>
                                <MenuItem onClick={() => handleChangeView("timeGridWeek")}>Week</MenuItem>
                                <MenuItem onClick={() => handleChangeView("timeGridDay")}>Day</MenuItem>
                            </Menu>

                        </Box>
                    </Grid>
                </Grid>
            </Paper>

            {/* ⭐ FullCalendar */}
            <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={false} // ⛔ turned off
                events={[
                    { title: "Checkup", date: "2025-02-05" },
                    { title: "Procedure", start: "2025-02-10T10:00" },
                ]}
                datesSet={(arg) => {
                    setCalendarTitle(arg.view.title);  // this updates whenever you click next/prev
                    setViewTitle(arg.view.type);
                }}


            />
        </Box>
    );
}


export default Calender;