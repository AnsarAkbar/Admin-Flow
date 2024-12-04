import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { teamMembers } from "../Team";

const MemberProfile = () => {
  const { teamId } = useParams();

  return (
    <div className="flex items-center gap-x-6 m-10">
      {teamMembers.map((person) =>
        person.id === teamId ? (
          <div
            key={teamId}
            className=" mx-auto my-0 flex items-center flex-col text-center "
          >
            <img
              alt=""
              src={person.imageUrl}
              className="size-16 rounded-full w-24 h-fit"
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
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default MemberProfile;
