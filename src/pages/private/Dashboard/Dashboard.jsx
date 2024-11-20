import { Link } from "react-router-dom";

const Dashboard = () => {
  const statsData = [
    { title: "Total Sales", value: "$25,000", change: "+5%" },
    { title: "Active Users", value: "1,500", change: "-3%" },
    { title: "Revenue", value: "$45,000", change: "+8%" },
    { title: "New Orders", value: "320", change: "+12%" },
  ];

  const recentActivities = [
    { time: "2 minutes ago", activity: "New order placed: Order #12345" },
    { time: "15 minutes ago", activity: "User signed up: John Doe" },
    { time: "1 hour ago", activity: "Product added: New Smartphone" },
    { time: "3 hours ago", activity: "Payment received: $500" },
  ];

  return (
    <div className="h-screen">
      {/* Sidebar */}
      {/* <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-semibold mb-8">Dashboard</h2>
        <ul className="space-y-6">
          <li>
            <a href="#" className="hover:bg-gray-700 p-2 rounded-md block">
              Dashboard Overview
            </a>
          </li>
          <li>
            <a href="#" className="hover:bg-gray-700 p-2 rounded-md block">
              Users
            </a>
          </li>
          <li>
            <a href="#" className="hover:bg-gray-700 p-2 rounded-md block">
              Sales
            </a>
          </li>
          <li>
            <a href="#" className="hover:bg-gray-700 p-2 rounded-md block">
              Settings
            </a>
          </li>
        </ul>
      </div> */}
      <nav className=" bg-gray-200 w-full p-6">
        {
          statsData.map((stats,index)=>{
            return(
              <Link className="hover:bg-gray-400 p-4 rounded-md">{stats.title}</Link>
            )
          })
        }
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 bg-gray-100 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Welcome, Admin</span>
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat) => (
            <div key={stat.title} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">{stat.title}</h3>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
              <p className={`text-sm mt-2 ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
          <ul className="space-y-4">
            {recentActivities.map((activity, index) => (
              <li key={index} className="flex justify-between">
                <p className="text-gray-700">{activity.activity}</p>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
