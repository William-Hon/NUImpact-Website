import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamMemberCard = ({ member }) => {
  return (
    <div className="h-full flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-black bg-white">
      {/* Image */}
      <div className="h-96 w-full overflow-hidden flex-shrink-0 relative bg-gray-200">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            // Optional: Show initials or placeholder icon if image fails
          }}
        />
        {/* Fallback for broken image if needed, though onError handles hiding the broken icon */}
      </div>

      {/* Content */}
      <div className="p-4 bg-white flex-grow flex flex-col">
        <div className="flex items-center gap-2">
          <h3 className="text-2xl font-bold">{member.name}</h3>
          {member.linkedin && (
            <Link
              to={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0a66c2] hover:opacity-80 transition-opacity"
            >
              <FaLinkedin size={24} />
            </Link>
          )}
        </div>
        <p className="text-sm text-black">{member.role}</p>

        <p className="mt-3 text-md text-black"><span className="font-bold">Major:</span> {member.major}</p>

        <p className="mt-3 text-md text-black">
          <span className="font-bold">Work Experience:</span> {member.experience}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
