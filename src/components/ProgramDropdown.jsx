import { useState, useEffect } from "react";
import TeamMemberCard from "./TeamMemberCard";

const ProgramDropdown = ({ program, members, isOpen }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(!!isOpen);
    }, [isOpen]);

    const colors = {
        "Leadership": "var(--color-nuimpact-dark-blue)",
        "Programming": "var(--color-nuimpact-blue)",
        "Fund": "var(--color-nuimpact-light-blue)"
    };

    return (
        <div className="mb-4 overflow-hidden shadow-sm">
            {/* HEADER */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center text-left p-6 text-white transition-all hover:brightness-110 duration-200"
                style={{ backgroundColor: colors[program] || "var(--color-nuimpact-blue)" }}
            >
                <h2 className="text-3xl font-semibold">{program}</h2>
                <span className="text-xl">
                    {open ? "−" : "+"}
                </span>
            </button>

            {/* CONTENT */}
            {open && (
                <div
                    className="grid grid-cols-3 gap-6 p-6 pt-0"
                    style={{ backgroundColor: colors[program] || "var(--color-nuimpact-blue)" }}
                >
                    {members.map((member) => (
                        <TeamMemberCard
                            key={member.id}
                            member={member}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProgramDropdown;
