import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import ProgramDropdown from '../components/ProgramDropdown';
import { supabase } from '../supabaseClient';

const TeamMemberSection = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTeam, setSelectedTeam] = useState("All");
    const [resetKey, setResetKey] = useState(0);

    useEffect(() => {
        const fetchMembers = async () => {
            setLoading(true);
            try {
                const { data, error } = await supabase
                    .from('members')
                    .select('*');

                if (error) throw error;

                if (data) {
                    const mappedData = data.map(m => {
                        // Parse team field which might come back as a JSON string
                        let teamArray = [];
                        if (typeof m.team === 'string') {
                            try {
                                teamArray = JSON.parse(m.team);
                            } catch (e) {
                                teamArray = [m.team]; // Fallback if it's just a raw text string
                            }
                        } else if (Array.isArray(m.team)) {
                            teamArray = m.team;
                        }

                        return {
                            id: m.name.toLowerCase().replace(/\s+/g, '-'),
                            name: m.name,
                            program: teamArray.map(t => t.charAt(0).toUpperCase() + t.slice(1)),
                            role: m.position,
                            major: m.major || "",
                            experience: m.work_experience,
                            image: m.image_url,
                            linkedin: m.linkedin_url
                        };
                    });

                    // Filter out members with no image or the default placeholder, then sort alphabetically by name
                    const sortedData = mappedData
                        .filter(m => m.image && m.image.trim() !== "" && !m.image.includes("member-pic-placeholder.png"))
                        .sort((a, b) => a.name.localeCompare(b.name));
                    setTeamMembers(sortedData);
                }
            } catch (err) {
                console.error("Error fetching members:", err.message);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMembers();
    }, []);

    if (error) {
        return <div className="p-12 text-center text-red-500 font-bold text-2xl">Error Loading Members: {error}</div>;
    }

    if (loading) {
        return <div className="p-12 text-center text-xl">Loading Database Members...</div>;
    }

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

    // Filter Logic for which dropdowns to show
    const showProgram = (programName) => {
        if (selectedTeam === "All") return true;
        return selectedTeam === programName;
    };

    const categories = ["All", "Leadership", "Programming", "Fund"];

    return (
        <div className="container mx-auto px-4 py-12">
            {/* page header and description*/}
            <div className="mb-12">
                <h1 className="text-5xl font-bold mb-4 text-[var(--color-nuimpact-dark-blue)]">People</h1>
                <p className="text-xl text-[var(--color-nuimpact-dark-blue)] max-w-3xl">
                    Our team of dedicated Northeastern University students bring together NUImpact’s impact investing approach and diverse industry experience to help mission-driven companies amplify their impact.
                </p>
            </div>

            <div className="flex flex-col-reverse lg:flex-row gap-8 items-start">

                {/* left side: team dropdowns */}
                <div className="w-full lg:w-3/4 space-y-4">

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

                {/* Right side:filter and search bar */}
                <div className="w-full lg:w-1/4 space-y-8 sticky top-8">

                    {/* Search bar */}
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

                    {/* Search by team*/}
                    <div>
                        <h3 className="text-lg font-medium mb-3">Search by team:</h3>
                        <div className="flex flex-col gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedTeam(cat)}
                                    className={`px-4 py-2 rounded-full text-left transition-colors ${selectedTeam === cat
                                        ? "bg-[var(--color-nuimpact-blue)] text-white font-medium"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* collapse all button */}
                    <div className="flex justify-start">
                        <button
                            onClick={handleCollapseAll}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 text-sm font-medium transition-colors border border-gray-200"
                        >
                            Collapse All
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMemberSection;