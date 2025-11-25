import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Dashboard from './components/Dashboard';
import Customers from './components/Customers';
import Appointments from './components/Appointments';
import Payments from './components/Payments';
import Setting from './components/Setting';
import Login from './components/Login';
import Layout from './components/Layout';


// Layout
// function Layout({ children }: { children: React.ReactNode }) {
//   const [open, setOpen] = useState(true);


//   return (
//     <div className="flex h-screen w-screen bg-gray-100">
//       {/* Sidebar */}
//       <div
//         className={`bg-white shadow-lg transition-all duration-300 ${open ? "w-64" : "w-20"
//           }`}
//       >
//         <div className="flex items-center justify-between p-4">
//           <button onClick={() => setOpen(!open)} className="text-lg">☰</button>
//         </div>
//         <nav className={`mt-4 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
//           <ul className="flex flex-col gap-2 p-2">
//             <li>
//               <Link
//                 to="/"
//                 className="block p-2 rounded hover:bg-gray-200 transition"
//               >
//                 Dashboard
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/customers"
//                 className="block p-2 rounded hover:bg-gray-200 transition"
//               >
//                 Customers
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/appointments"
//                 className="block p-2 rounded hover:bg-gray-200 transition"
//               >
//                 Appointments
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/paymets"
//                 className="block p-2 rounded hover:bg-gray-200 transition"
//               >
//                 Payments
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/setting"
//                 className="block p-2 rounded hover:bg-gray-200 transition"
//               >
//                 Setting
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>


//       {/* Right section */}
//       <div className="flex-1 flex flex-col">
//         {/* Top Navigation */}
//         <header className="h-16 bg-white shadow flex items-center justify-between px-6">
//           <h2 className="text-xl font-semibold">PRAXIION</h2>
//           <Link
//             to="/login"
//             className="block p-2 rounded hover:bg-gray-200 transition"
//           >
//             Login
//           </Link>
//           <div>User</div>
//         </header>


//         {/* Main Content */}
//         <main className="flex-1 overflow-auto p-4">{children}</main>
//       </div>
//     </div>
//   );
// }

function App() {
  return (
    <>
      <Router>

        <Routes>
          {/* <Route path="/" element={<Dashboard />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/paymets" element={<Payments />} />
            <Route path="/setting" element={<Setting />} />

          </Route>
        </Routes>

      </Router>
    </>
  )
}

export default App
