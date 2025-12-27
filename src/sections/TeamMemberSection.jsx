import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import ProgramDropdown from '../components/ProgramDropdown';
import { teamMembers } from '../data/TeamMembers';

const TeamMemberSection = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTeam, setSelectedTeam] = useState("All");
    const [sortBy, setSortBy] = useState("Name");
    const [resetKey, setResetKey] = useState(0);

    const handleCollapseAll = () => {
        setSearchQuery("");
        setSelectedTeam("All");
        setResetKey(prev => prev + 1);
    };

    const getMembersByProgram = (programName) => {
        let members = teamMembers.filter((member) => {
            const prog = member.program;
            if (Array.isArray(prog)) {
                return prog.includes(programName);
            }
            return prog === programName;
        });

        // Search Filter
        if (searchQuery) {
            const lowerQuery = searchQuery.toLowerCase();
            members = members.filter(member =>
                member.name.toLowerCase().includes(lowerQuery) ||
                (member.role && member.role.toLowerCase().includes(lowerQuery)) ||
                (member.major && member.major.toLowerCase().includes(lowerQuery))
            );
        }



        return members;
    };

    // Filter Logic for which Dropdowns to show
    const showProgram = (programName) => {
        if (selectedTeam === "All") return true;
        return selectedTeam === programName;
    };

    const categories = ["All", "Leadership", "Programming", "Fund"];
    const sortOptions = ["Name", "Title", "Major"];

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Page Header */}
            <div className="mb-12">
                <h1 className="text-5xl font-bold mb-4">People</h1>
                <p className="text-xl text-gray-600 max-w-3xl">
                    Our team of dedicated Northeastern University students bring together NUImpact’s impact investing approach and diverse industry experience to help mission-driven companies amplify their impact.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">

                {/* Left Column: Team Listings */}
                <div className="w-full lg:w-3/4 space-y-4">
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={handleCollapseAll}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-gray-200"
                        >
                            Collapse All
                        </button>
                    </div>
                    {(() => {
                        const leadershipMembers = getMembersByProgram("Leadership");
                        const fundMembers = getMembersByProgram("Fund");
                        const programmingMembers = getMembersByProgram("Programming");

                        const shouldOpen = (programName, members) => {
                            if (selectedTeam === programName) return true;
                            if (searchQuery.length > 0 && members.length > 0) return true;
                            return false;
                        };

                        return (
                            <>
                                {showProgram("Leadership") && (
                                    <ProgramDropdown
                                        key={`leadership-${resetKey}`}
                                        program="Leadership"
                                        members={leadershipMembers}
                                        isOpen={shouldOpen("Leadership", leadershipMembers)}
                                    />
                                )}
                                {showProgram("Programming") && (
                                    <ProgramDropdown
                                        key={`programming-${resetKey}`}
                                        program="Programming"
                                        members={programmingMembers}
                                        isOpen={shouldOpen("Programming", programmingMembers)}
                                    />
                                )}
                                {showProgram("Fund") && (
                                    <ProgramDropdown
                                        key={`fund-${resetKey}`}
                                        program="Fund"
                                        members={fundMembers}
                                        isOpen={shouldOpen("Fund", fundMembers)}
                                    />
                                )}
                            </>
                        );
                    })()}
                </div>

                {/* Right Column: Sidebar (Search & Filters) */}
                <div className="w-full lg:w-1/4 space-y-8 sticky top-8">

                    {/* Search Bar */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search by name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-4 pr-10 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                    </div>

                    {/* Search by Team */}
                    <div>
                        <h3 className="text-lg font-medium mb-3">Search by team:</h3>
                        <div className="flex flex-col gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedTeam(cat)}
                                    className={`px-4 py-2 rounded-full text-left transition-colors ${selectedTeam === cat
                                        ? "bg-blue-600 text-white font-medium"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMemberSection;