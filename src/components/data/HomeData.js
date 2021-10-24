import about from '../media/about-intro.jpg';
import opportunities from '../media/opportunities.jpg';
import claims from '../media/claims.jpg';
import partner from '../media/partner.jpg';
import explained from '../media/explained-intro.jpg';
import insights from '../media/insights.jpg';

export const HomeData = [
    {
        page: 'about',
        title: 'Preparing your platform for innovation',
        description:`We provide expert advice to pioneering UK businesses, helping them to capitalise on available government 
                     grants and incentives.`,
        path: '/about',
        buttonText: 'About us ',
        img: about
    },
    {
        page: 'opportunities',
        title: 'Never miss an opportunity',
        description:`Rewarding companies for their pioneering work requires specialist knowledge of a range of incentives that 
                     few other consultancies possess.`,
        path: '/opportunities',
        buttonText: 'Opportunities ',
        img: opportunities
    },
    {
        page: 'claims',
        title: 'Making a claim with GTIC',
        description:`Our rigorous claims process blueprint is designed to identify and capitalise on all available opportunities, 
                     while keeping you in the loop every step of the way.`,
        path: '/making_a_claim',
        buttonText: 'Making a claim ',
        img: claims
    },
    {
        page: 'referrals',
        title: 'Partnering with GTIC',
        description:`Referring a client to us helps maximise the potential of their R&D activity while providing you with the expertise 
                     underpinning your own added-value service.`,
        path: '/referrals',
        buttonText: 'Referrals ',
        img: partner
    },
    {
        page: 'explained',
        title: 'R&D Tax Relief explained',
        description:`R&D Tax Relief could provide your business with a competitive advantage and firm foundations for future growth.`,
        path: '/r&d_explained',
        buttonText: 'How it works ',
        img: explained
    },
    {
        page: 'insights',
        title: 'Insights',
        description:`Do you have a query relating to a particular tax incentive or grant? Insights is where we share much of our
                     expertise directly with you.`,
        path: '/insights',
        buttonText: 'Go to insights ',
        img: insights
    }
];