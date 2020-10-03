const prefix = 'https://github.com/SANDR7';
const noRepoLink = 'http://chillestmonkey.com/';
export default [
    
    // URL_src wordt gebruikt voor de thumbnails op de home page
    // nummer 1 is het eerste project en het grootste nummer is het laatste project
    {
        Projectnaam: 'Nuxt Portfolio',
        id: 'Nuxt-Portfolio',
        soort: 'Website',
        QuickDesc: "Current portfolio mainly to get employed and/or for an internship.",
        UsedTech: {
        Langs: `
            <div class="ProgrammeerTaal ORANGE">Javascript</div>
            <div class="ProgrammeerTaal ORANGE">css</div>
            <div class="ProgrammeerTaal GREEN">Vue</div>
            <div class="ProgrammeerTaal GREEN">Nuxt</div>
            <div class="ProgrammeerTaal GREEN">Sass</div>
            <div class="ProgrammeerTaal GREEN">Node.js</div>
        `,
        Programs: `
            <div class="ProgrammeerTaal RED">Adobe XD</div>
            <div class="ProgrammeerTaal RED">Git</div>
            <div class="ProgrammeerTaal RED">Google Search Console</div>
        `,
        Skills: 'Web Development / Logo Design / Wireframe Design / UI & UX Design',
        },
        FullDesc:  `
        My personal portfolio to archieve all the skills and project that I've learned over the years. 
        `,
        Img_src: 'https://src.sandervanast.com/images/PNG/Thumbnails/Excercise_nuxt-portfolio.png',
        Url_src: "/",
        // name of repo
        Git_url: `${prefix}/nuxt-portfolio`,
        Datum: 'Jan. 2002',
        gitRepo: false,
    },
        // URL_src wordt gebruikt voor de thumbnails op de home page
    // nummer 1 is het eerste project en het grootste nummer is het laatste project
    {
        Projectnaam: 'Demonstration Card',
        id: 'Demonstration-Card1',
        soort: 'Website',
        QuickDesc: "This project has no content so it's empty.",
        UsedTech: {
        Langs: `
            <div class="ProgrammeerTaal ORANGE">a programminglanguage</div>
            <div class="ProgrammeerTaal GREEN">a framework</div>
        `,
        Programs: `
            <div class="ProgrammeerTaal RED">design program</div>
            <div class="ProgrammeerTaal RED">software</div>
        `,
        Skills: 'Web Development / Logo Design / Wireframe Design / UI & UX Design',
        },
        FullDesc:  `
        This card is meant to be a placeholder. It will show that everyone can take part of it!
        `,
        Img_src: 'https://src.sandervanast.com/images/PNG/Thumbnails/Project_Placeholder.png',
        Url_src: "https://example.com/",
        // name of repo
        Git_url: noRepoLink,
        Datum: 'Jan. 2002',
        gitRepo: true,
    },
    {
        Projectnaam: 'Demonstration Card',
        id: 'Demonstration-Card2',
        soort: 'Website',
        QuickDesc: "This project has no content so it's empty.",
        UsedTech: {
        Langs: `
            <div class="ProgrammeerTaal ORANGE">a programminglanguage</div>
            <div class="ProgrammeerTaal GREEN">a framework</div>
        `,
        Programs: `
            <div class="ProgrammeerTaal RED">design program</div>
            <div class="ProgrammeerTaal RED">software</div>
        `,
        Skills: 'Web Development / Logo Design / Wireframe Design / UI & UX Design',
        },
        FullDesc:  `
        This card is meant to be a placeholder. It will show that everyone can take part of it!
        `,
        Img_src: 'https://src.sandervanast.com/images/PNG/Thumbnails/Project_Placeholder.png',
        Url_src: "https://example.com/",
        // name of repo
        Git_url: noRepoLink,
        Datum: 'Jan. 2002',
        gitRepo: true,
    },
]