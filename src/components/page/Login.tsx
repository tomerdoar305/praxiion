import { useState } from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    Paper,
    IconButton,
    InputAdornment,
    LinearProgress
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        setLoading(true);

        // simulate async login
        setTimeout(() => {
            setLoading(false);
            navigate("/"); // or whatever page
        }, 2000);
    };

    return (
        <Box
            sx={{
                minHeight: "100dvh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#1e1e1e",
            }}
        >
            {loading && (
                <LinearProgress
                    sx={{ position: "absolute", top: 0, left: 0, width: "100%" }}
                />
            )}
            <Paper
                elevation={6}
                sx={{
                    width: 360,
                    p: 4,
                    borderRadius: 3,
                    backgroundColor: "#2a2a2a",
                    color: "white"
                }}
            >
                <Typography variant="h5" fontWeight="bold" textAlign="center" mb={3}>
                    Login
                </Typography>

                {/* Email */}
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    variant="outlined"
                    sx={{
                        mb: 2,
                        "& .MuiInputBase-root": { color: "white" },
                        "& .MuiInputLabel-root": { color: "gray" },
                        "& .MuiOutlinedInput-notchedOutline": { borderColor: "gray" },
                        "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                    }}
                />

                {/* Password */}
                <TextField
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    variant="outlined"
                    sx={{
                        mb: 3,
                        "& .MuiInputBase-root": { color: "white" },
                        "& .MuiInputLabel-root": { color: "gray" },
                        "& .MuiOutlinedInput-notchedOutline": { borderColor: "gray" },
                        "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => setShowPassword(!showPassword)}
                                    edge="end"
                                    sx={{ color: "white" }}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                {/* Login Button */}
                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        py: 1.2,
                        fontSize: "1rem",
                        backgroundColor: "orange",
                        "&:hover": { backgroundColor: "#e69500" }
                    }}
                    onClick={handleLogin}
                >
                    Login
                </Button>
            </Paper>
        </Box>
    );
}
