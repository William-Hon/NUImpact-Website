const investments = [
    {
        year: "2019",
        name: "EatWell",
        amount: "$25,000",
        color: "var(--color-nuimpact-red)",
        position: 0.1,
        labelPosition: "bottom",

        // Portfolio preview card color
        cardColor: "var(--color-eatwell-preview-card)",

        // Portfolio Showcase Data
        showInSlider: true,
        backgroundColor: "var(--color-eatwell-bg)",
        headerColor: "var(--color-eatwell-header-text)",
        regularTextColor: "var(--color-eatwell-regular-text)",
        logo: "/assets/images/portfolio-images/eat-well-logo.png",
        keyFacts: {
            yearInvested: "Spring 2019",
            checkSize: "$25,000",
            vehicle: "SAFE Investment",
            vertical: "Food & Agriculture",
            website: "eatwellmealkits.com",
            websiteLink: "https://eatwellmealkits.com"
        },
        description: [
            "During Spring 2019, NUImpact officially closed on its first investment of $25,000 in Boston-based company EatWell, which prepares nutritious, affordable, and culturally-appropriate food preparation meal kits for food-insecure families.",
            "EatWell is a Boston based company that develops nutritious, affordable, and culturally appropriate meal kits designed to help food insecure families prepare healthy meals at home. The company focuses on improving food access by combining convenient meal preparation with ingredients and recipes tailored to diverse communities."
        ],
        testimonial: {
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
            author: "Dan Wexler",
            role: "CEO / EatWell",
            avatar: "/assets/images/portfolio-images/dan-wexler.jpg"
        }
    },
    {
        year: "2021",
        name: "Unicorn",
        amount: "$25,000",
        color: "var(--color-nuimpact-red)",
        position: 0.3,
        labelPosition: "top",

        // Portfolio preview card color
        cardColor: "var(--color-unicorn-preview-card)",

        // Portfolio Showcase Data
        showInSlider: true,
        backgroundColor: "var(--color-unicorn-bg)",
        headerColor: "var(--color-unicorn-header-text)",
        regularTextColor: "var(--color-unicorn-regular-text)",
        logo: "/assets/images/portfolio-images/unicorn-logo.png",
        keyFacts: {
            yearInvested: "Spring 2021",
            checkSize: "$25,000",
            vehicle: "Convertible Note",
            vertical: "Healthcare",
            website: "unicorn.com",
            websiteLink: "#"
        },
        description: [
            "Unicorn was founded to expand equitable access to high quality menstrual hygiene products by producing sustainable and socially conscious alternatives designed to improve health outcomes while reducing environmental impact.",
            "Unicorn produces fully organic tampons and pads made from plant based materials that are naturally hypoallergenic. Their products are eco friendly and free from chemicals, dyes, and synthetic additives that can harm both the environment and personal health."
        ],
        testimonial: {
            quote: "Empowering women with sustainable, high-quality menstrual products while fighting period poverty.",
            author: "Thyme Sullivan",
            role: "CEO / Unicorn",
            avatar: "/assets/images/portfolio-images/thyme-sullivan.jpg"
        }
    },
    {
        year: "2022",
        name: "It's Electric",
        amount: "$30,000",
        color: "var(--color-nuimpact-blue)",
        position: 0.48,
        labelPosition: "top",

        // Portfolio preview card color
        cardColor: "var(--color-its-electric-preview-card)",

        // Portfolio Showcase Data
        showInSlider: true,
        backgroundColor: "var(--color-its-electric-bg)", // Dark blue/gray
        headerColor: "var(--color-its-electric-header-text)", // For contrast
        regularTextColor: "var(--color-its-electric-regular-text)",
        logo: "/assets/images/portfolio-images/itselectric-logo.png",
        keyFacts: {
            yearInvested: "2022",
            checkSize: "$30,000",
            vehicle: "Equity",
            vertical: "Transportation",
            website: "itselectric.co",
            websiteLink: "https://itselectric.co"
        },
        description: [
            "It’s Electric provides curbside electric vehicle charging infrastructure in dense urban neighborhoods, addressing a major barrier to EV adoption for drivers who lack access to private driveways or home charging options.",
            "The company partners with property owners to install curbside chargers that connect directly to existing building electricity. This decentralized infrastructure model expands charging access, accelerates electric vehicle adoption, and supports cleaner transportation systems across cities."
        ],
        testimonial: {
            quote: "NUImpact's support was critical in our early stages, providing not just capital but a network of passionate students and experts.",
            author: "Nathan King",
            role: "Co-Founder",
            avatar: "/assets/images/portfolio-images/nathan-king.jpg"
        }
    },
    {
        year: "2022",
        name: "Dorchester Food Co-op",
        amount: "$6,800",
        color: "var(--color-nuimpact-light-blue)",
        position: 0.5,
        labelPosition: "bottom",

        // Portfolio preview card color
        cardColor: "var(--color-dorchester-preview-card)",

        // Portfolio Showcase Data
        showInSlider: true,
        backgroundColor: "var(--color-dorchester-bg)",
        headerColor: "var(--color-dorchester-header-text)",
        regularTextColor: "var(--color-dorchester-regular-text)",
        logo: "/assets/images/portfolio-images/dorchester-logo.png",
        keyFacts: {
            yearInvested: "Spring 2022",
            checkSize: "$6,800",
            vehicle: "Crowdfund Investment",
            vertical: "Food & Agriculture",
            website: "dorchesterfoodcoop.com",
            websiteLink: "#"
        },
        description: [
            "DFC was founded to build a more equitable food system by developing community driven food infrastructure that challenges traditional supply chains while creating worker owned assets that support local economic development.",
            "The organization focuses on reinvesting resources within the local economy by prioritizing worker ownership, supporting neighborhood businesses, and strengthening food access. Their model creates community wealth while ensuring affordable, high quality food remains available to underserved populations."
        ],
        testimonial: {
            quote: "Building a worker-owned asset that nourishes, employs, and reinvests in the local community.",
            author: "Alyssa Melendez",
            role: "Dorchester Food Co-op",
            avatar: "/assets/images/portfolio-images/alyssa-melendez.jpg"
        }
    },
    {
        year: "2022",
        name: "Imago Rehab",
        amount: "$25,000",
        color: "var(--color-imago-powder-blue)",
        position: 0.52,
        labelPosition: "top",

        // Portfolio preview card color
        cardColor: "var(--color-imago-powder-preview-card)",

        // Portfolio Showcase Data
        showInSlider: true,
        backgroundColor: "var(--color-imago-powder-bg)",
        headerColor: "var(--color-imago-powder-header-text)",
        regularTextColor: "var(--color-imago-powder-regular-text)",
        logo: "/assets/images/portfolio-images/imago-logo.png",
        keyFacts: {
            yearInvested: "Spring 2022",
            checkSize: "$25,000",
            vehicle: "Preferred Shares",
            vertical: "Healthcare",
            website: "imagorehab.com",
            websiteLink: "#"
        },
        description: [
            "Imago Rehab is a digital health startup founded by Harvard engineers focused on transforming physical rehabilitation through virtual clinical care and wearable robotics that improve accessibility and effectiveness of therapy.",
            "Their platform addresses key rehabilitation challenges including travel barriers, limited therapy frequency, and difficulty monitoring patient adherence. By combining remote care with wearable technology, Imago enables clinicians to track progress, personalize treatment, and improve rehabilitation outcomes."
        ],
        testimonial: {
            quote: "Providing the most effective post-stroke hand rehab straight from your home through robotics.",
            author: "Chris Dugan",
            role: "CEO / Imago Rehab",
            avatar: "/assets/images/portfolio-images/chris-dugan.jpg"
        }
    },
    {
        year: "2025",
        name: "Agri-Trak",
        amount: "$30,000",
        color: "var(--color-nuimpact-blue)",
        position: 0.85,
        labelPosition: "top",

        // Portfolio preview card color
        cardColor: "var(--color-agritrak-preview-card)",

        // Portfolio Showcase Data
        showInSlider: true,
        backgroundColor: "var(--color-agritrak-bg)",
        headerColor: "var(--color-agritrak-header-text)",
        regularTextColor: "var(--color-agritrak-regular-text)",
        logo: "/assets/images/portfolio-images/agri-trak-logo.png",
        keyFacts: {
            yearInvested: "Fall 2025",
            checkSize: "$30,000",
            vehicle: "Straight Loan",
            vertical: "Technology & Financial Services",
            website: "agritrak.com",
            websiteLink: "#"
        },
        description: [
            "AGRI-TRAK is an agricultural technology company focused on improving how farmers manage operations by delivering integrated digital tools that streamline farm management and enable more efficient data driven agricultural decision making.",
            "The company provides software and analytics that unify operational data into a comprehensive farm management platform. This system allows growers to monitor performance, optimize resource usage, and make informed decisions that improve productivity, sustainability, and overall crop yields."
        ],
        testimonial: {
            quote: "Redefining what modern farm management looks like and feels like through collaboration.",
            author: "Jamie Sonneville",
            role: "CEO / Agri-Trak",
            avatar: "/assets/images/portfolio-images/jamie-sonneville.jpg"
        }
    },
    {
        year: "2025",
        name: "Volta Health",
        amount: "$30,000",
        color: "var(--color-nuimpact-blue)",
        position: 0.87,
        labelPosition: "bottom",

        // Portfolio preview card color
        cardColor: "var(--color-volta-preview-card)",

        // Portfolio Showcase Data
        showInSlider: true,
        backgroundColor: "var(--color-volta-bg)",
        headerColor: "var(--color-volta-header-text)",
        regularTextColor: "var(--color-volta-regular-text)",
        logo: "/assets/images/portfolio-images/volta-logo.png",
        keyFacts: {
            yearInvested: "Fall 2025",
            checkSize: "$30,000",
            vehicle: "Straight Loan",
            vertical: "Education & Media",
            website: "voltahealth.com",
            websiteLink: "#"
        },
        description: [
            "Volta Health is a healthcare technology company developing a digital platform designed to improve how patients and providers connect, manage care, and monitor health outcomes through accessible technology.",
            "Their platform integrates health data, communication tools, and care management features into a unified ecosystem. By simplifying patient provider interactions and enabling real time health monitoring, Volta empowers users to manage wellness and make more informed healthcare decisions."
        ],
        testimonial: {
            quote: "Revolutionizing how patients and providers connect by advancing accessibility in healthcare.",
            author: "Dr. Tsikata Apenyo",
            role: "CEO / Volta Health",
            avatar: "/assets/images/portfolio-images/tsikata-apenyo.jpg"
        }
    },
];

export default investments;
