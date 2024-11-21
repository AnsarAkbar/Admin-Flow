import { NavLink } from "react-router-dom";

export const teamMembers = [
  {
    id: "1001",
    name: "Ahmed",
    role: "Team Lead",
    imageUrl:
      "	https://cbx-prod.b-cdn.net/COLOURBOX16678441.jpg?width=800&height=800&quality=70",
  },
  {
    id: "1002",
    name: "Khaliq Mehmood",
    role: "MERN Stack Developer",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEhVw9dcAQoNFKKtrf7D_LYNDNqUnB7q8pLG4HRk9e8x5mMKf40ldaANlU24Bc6qY2iFY&usqp=CAU",
  },
  {
    id: "1003",
    name: "Ansar Mahmood",
    role: "MERN Intern",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKmKsTGSXYVPaBMJs6sq08ZJObwsBhFqsPYzW_EejJCVTSidX3yM8c6VVOcrOs2iSz-g&usqp=CAU",
  },
  {
    id: "1004",
    name: "Shafiq",
    role: "Sr.Frontend Developer",
    imageUrl: "https://ionicframework.com/docs/img/demos/avatar.svg",
  },
  // More people...
];

export default function Team() {
  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-4 sm:grid-cols-2 sm:gap-y-2 xl:col-span-2"
        >
          {teamMembers.map((person) => (
            <li key={person.name} className=" bg-white my-auto p-2">
             <NavLink to={`/team/${person.id}`} >
                <div className="flex items-center gap-x-6 " >
                    <img
                      alt=""
                      src={person.imageUrl}
                      className="size-16 rounded-full"
                    />
                    <div>
                      <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                        {person.name}
                      </h3>
                      <p className="text-sm/6 font-semibold text-indigo-600">
                        {person.role}
                      </p>
                    </div>
                  </div>
             </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
