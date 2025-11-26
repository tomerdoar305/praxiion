import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Dashboard from './components/page/Dashboard';
import Settings from './components/page/Settings';
import Login from './components/page/Login';
import Layout from './components/layout';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AiInsights from "./components/page/AiInsights";
import Calender from "./components/page/Calender";
import Patients from "./components/page/Patients";
import Submissions from "./components/page/Submissions";
import AllDocs from "./components/page/AllDocs";
import Billing from "./components/page/Billing";
import Pharmacy from "./components/page/Pharmacy";
import LabIntegrations from "./components/page/LabIntegrations";
import Financial from "./components/page/Financial";
import Team from "./components/page/Team";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1f2937",   // same as tailwind gray-800
      paper: "#111827",     // sidebar and paper surfaces
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="/calender" element={<Calender />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/submissions" element={<Submissions />} />
              <Route path="/alldocs" element={<AllDocs />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/pharmacy" element={<Pharmacy />} />
              <Route path="/labintegrations" element={<LabIntegrations />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/aiinsights" element={<AiInsights />} />
              <Route path="/team" element={<Team />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
