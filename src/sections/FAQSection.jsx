import React from 'react';
import FAQDropdown from '../components/FAQDropdown';

const FAQSection = () => {
    const entrepreneurFAQs = [
        {
            question: "What kind of companies does NUImpact look to invest in?",
            answer: "NUImpact invests in sustainable Northeast-based companies that are focused on underserved communities. We look for companies that are early stage and impact-driven."
        },
        {
            question: "What's the timeline for approval of an investment?",
            answer: "We conduct due diligence for an investment over the course of an academic semester. In the spring we start looking for companies in late January and look to make an investment decision by early May. In the fall, we start sourcing in late September and look to make an investment decision in December. "
        },
        {
            question: "How much does NUImpact invest in companies?",
            answer: "We are looking to make investments between $25,000 and $30,000, but are willing to be flexible depending on the needs of the company."
        },
        {
            question: "How long has NUImpact been around?",
            answer: "NUImpact was founded in Spring 2016 by a group of impact-minded students and their professor. It has grown over the last few years into a powerful and popular entity at Northeastern. We now host several events each semester with the goal of educating the Northeastern community about impact investing and some of the problems we hope to help solve."
        },
        {
            question: "Who supports NUImpact?",
            answer: "We have a team of highly experienced advisors that support us throughout the process. One of our advisors, Mark Bernfield, is a long term angel investor. We have a team of several alumni advisors that have graduated from Northeastern and work in various industries that pertain to the NUImpact mission. We also have a team of industry and strategic advisors that provide us with guidance."
        }
    ];

    const studentFAQs = [
        {
            question: "What is impact investing?",
            answer: "Impact investing is deploying capital into companies that aim to solve social/environmental issues while generating financial returns."
        },
        {
            question: "How can I get involved with NUImpact?",
            answer: "NUImpact is an amazing community to join! You can come to our events that are typically held bi-weekly throughout each semester. The best way to stay updated is to follow our Instagram and sign up for our newsletter, which are linked at the bottom of the page."
        },
        {
            question: "When do NUImpact applications open?",
            answer: "Applications open at the end of every semester for the following semester. In the fall they generally open around November and in the spring they usually open in April. To get an alert when applications open, join our newsletter and follow us on social media."
        },
        {
            question: "Can first-years join?",
            answer: "Yes! We welcome students from all class years, including first-year students. We believe diverse perspectives strengthen our team and investment decisions."
        }
    ];

    const donorFAQs = [
        {
            question: "How can I donate to NUImpact?",
            answer: "You can donate to NUImpact directly online via Northeastern’s Giving Page or you can contact NUImpact’s Director of Fund Development to learn about other options."
        },
        {
            question: "Are gifts to NUImpact tax deductible?",
            answer: "Yes! NUImpact falls under Northeastern University, which is a tax deductible non-profit organization."
        },
        {
            question: "How are gifts to NUImpact used?",
            answer: "All gifts go directly toward an investment in the community through NUImpact’s student-led investment process."
        }
    ];

    return (
        <section className="max-w-[1400px] mx-auto px-8 py-24">
            <div className="flex flex-wrap gap-16">
                <FAQDropdown title="Entrepreneurs" faqs={entrepreneurFAQs} />
                <FAQDropdown title="Students" faqs={studentFAQs} />
                <FAQDropdown title="Donors" faqs={donorFAQs} />
            </div>
        </section>
    );
};

export default FAQSection;
