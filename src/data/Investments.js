const investments = [
    {
        year: "2019",
        name: "EatWell",
        amount: "$25,000",
        color: "var(--color-nuimpact-red)",
        position: 0.1,
        labelPosition: "bottom",

        // Portfolio Showcase Data
        showInSlider: true,
        backgroundColor: "var(--color-eatwell-bg)", // Light sage green
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
            "During Spring 2019, NUImpact officially closed on its first investment of $25,000 in Boston-based company EatWell, which prepares nutritious, affordable, and culturally-appropriate food preparation meal kits for food-insecure families."
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
            "Unicorn was founded with the purpose of ensuring democratized access to high-quality, sustainable, and socially conscious menstrual hygiene products.",
            "They produce 100% organic tampons and pads that are naturally hypoallergenic. Unicorn products are plant-based, eco-friendly, and free of chemicals and dyes that are both harmful to the environment and to our health."
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
            "It's Electric is providing curbside charging for electric vehicles in urban areas, solving the problem of charging for those without private driveways.",
            "Their innovative model partners with property owners to install chargers, creating a decentralized network that enables cleaner transportation in cities."
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
            "DFC's mission is to create an equitable food system that challenges the traditional food system by building a community and developing a worker-owned asset that nourishes, employs, and reinvests in the local community.",
            "They emphasize the importance of reinvesting in the local economy by prioritizing employment and supporting local businesses, while also providing quality food for all."
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
            "Imago Rehab is a startup founded by Harvard engineers on a mission to be the next digital health virtual clinic and wearable robotics physical rehab hub.",
            "Imago Rehab's value proposition is that it solves for travel burdens, lack of frequency, and inefficiencies surrounding ways to monitor patient's adherence to their prescribed physical rehabilitation schedule."
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
            "AGRI-TRAK is a purpose-driven agricultural technology company transforming how farmers manage their operations through an innovative agriculture platform.",
            "Their software and data solutions create a comprehensive farm management environment that empowers growers to make data-informed decisions and optimize their yields."
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
            "Volta Health is a purpose-driven healthcare technology company revolutionizing how patients and providers connect via an innovative digital health platform.",
            "Their software and data solutions create a seamless ecosystem that empowers users to monitor wellness, manage care, and make informed health decisions."
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
