import { Link, Outlet } from "react-router-dom";

export default function Layout() {

    return (
        <div className="flex h-screen w-screen">
            {/* Sidebar */}
            <div className={"shadow-lg transition-all duration-300 w-64 border-r border-gray-700"}>
                <div className="flex items-center justify-between p-4 border-b border-gray-700 h-16">
                    {<h1 className="text-2xl font-bold">PRAXIION</h1>}
                </div>

                <nav className="mt-4">
                    <ul className="flex flex-col gap-2 p-2">
                        <li>
                            <Link
                                to="/"
                                className="block p-2 rounded hover:bg-orange-500 transition"
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/customers"
                                className="block p-2 rounded hover:bg-orange-500 transition"
                            >
                                Customers
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/appointments"
                                className="block p-2 rounded hover:bg-orange-500 transition"
                            >
                                Appointments
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/payments"
                                className="block p-2 rounded hover:bg-orange-500 transition"
                            >
                                Payments
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/setting"
                                className="block p-2 rounded hover:bg-orange-500 transition"
                            >
                                Setting
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Right Side */}
            <div className="flex-1 flex flex-col" >
                {/* Top Navbar */}
                <header className="h-16 shadow flex items-center justify-between px-6 border-b border-gray-700">
                    <h2 className="text-xl font-semibold">Clinc name</h2>
                    <Link
                        to="/login"
                        className="block p-2 rounded hover:bg-gray-200 transition"
                    >
                        Login
                    </Link>
                    <div>User</div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-auto p-4">
                    {/* React Router pages get rendered here */}
                    <Outlet />
                </main>
            </div>
        </div>
    );
}



// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Layout = (children: any) => {
//     const [open, setOpen] = useState(true);
//     return <div className="flex h-screen w-screen bg-gray-100">
//         {/* Sidebar */}
//         <div
//             className={`bg-white shadow-lg transition-all duration-300 ${open ? "w-64" : "w-20"
//                 }`}
//         >
//             <div className="flex items-center justify-between p-4">
//                 <button onClick={() => setOpen(!open)} className="text-lg">☰</button>
//             </div>
//             <nav className={`mt-4 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
//                 <ul className="flex flex-col gap-2 p-2">
//                     <li>
//                         <Link
//                             to="/"
//                             className="block p-2 rounded hover:bg-gray-200 transition"
//                         >
//                             Dashboard
//                         </Link>
//                     </li>
//                     <li>
//                         <Link
//                             to="/customers"
//                             className="block p-2 rounded hover:bg-gray-200 transition"
//                         >
//                             Customers
//                         </Link>
//                     </li>
//                     <li>
//                         <Link
//                             to="/appointments"
//                             className="block p-2 rounded hover:bg-gray-200 transition"
//                         >
//                             Appointments
//                         </Link>
//                     </li>
//                     <li>
//                         <Link
//                             to="/paymets"
//                             className="block p-2 rounded hover:bg-gray-200 transition"
//                         >
//                             Payments
//                         </Link>
//                     </li>
//                     <li>
//                         <Link
//                             to="/setting"
//                             className="block p-2 rounded hover:bg-gray-200 transition"
//                         >
//                             Setting
//                         </Link>
//                     </li>
//                 </ul>
//             </nav>
//         </div>


//         {/* Right section */}
//         <div className="flex-1 flex flex-col">
//             {/* Top Navigation */}
//             <header className="h-16 bg-white shadow flex items-center justify-between px-6">
//                 <h2 className="text-xl font-semibold">PRAXIION</h2>
//                 <Link
//                     to="/login"
//                     className="block p-2 rounded hover:bg-gray-200 transition"
//                 >
//                     Login
//                 </Link>
//                 <div>User</div>
//             </header>


//             {/* Main Content */}
//             <main className="flex-1 overflow-auto p-4">{children}</main>
//         </div>
//     </div>
// }
// export default Layout;