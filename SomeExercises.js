const prefix = 'https://github.com/SANDR7';
const noRepoLink = 'http://chillestmonkey.com/';
export default [
    
    // URL_src wordt gebruikt voor de thumbnails op de home page
    // nummer 1 is het eerste project en het grootste nummer is het laatste project
    {
        Projectnaam: 'css frameworks',
        id: 'Css-Frameworks',
        soort: 'Website',
        UsedTech: {
        tags: `
        <div class="TAG">frameworks</div>
        <div class="TAG">gh-Pages</div>
        <div class="TAG">frontend Development</div>
        <div class="TAG">npm</div>
        `, Langs: `
        <div class="ProgrammeerTaal ORANGE">html</div>
        <div class="ProgrammeerTaal ORANGE">sass</div>
        <div class="ProgrammeerTaal GREEN">Bootstrap</div>
        <div class="ProgrammeerTaal GREEN">Gulp</div>
        <div class="ProgrammeerTaal GREEN">Tailwindcss</div>
        `,
        Programs: `
            <div class="ProgrammeerTaal RED">yarn</div>
            <div class="ProgrammeerTaal RED">Github</div>
        `,
        },
        FullDesc:  `
        Two kinds of css frameworks in the same website, these are frameworks that are popular in the industry called bootstrap & tailwindcss.
        `,
        Img_src: 'https://src.sandervanast.com/images/PNG/Thumbnails/Excercise_css-frameworks.png',
        Url_src: "https://sandr7.github.io/css-frameworks-practice/",
        // name of repo
        Git_url: `${prefix}/css-frameworks-practice`,
        Datum: 'Okt. 2020',
        gitRepo: true,
    },
    {
        Projectnaam: 'Nuxt Portfolio',
        id: 'Nuxt-Portfolio',
        soort: 'Website',
        QuickDesc: "Current portfolio mainly to get employed and/or for an internship.",
        UsedTech: {
        tags: `
        <div class="TAG">Design</div>
        <div class="TAG">frontend development</div>
        <div class="TAG">progressive web app</div>
        <div class="TAG">SEO</div>
        <div class="TAG">User Interface design</div>
        <div class="TAG">Analytics</div>
        `,
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
        },
        FullDesc:  `
        My personal portfolio to archieve all the skills and project that I've learned over the years. It's also an easy and fun way to let people know what I'm all about!
        `,
        Img_src: 'https://src.sandervanast.com/images/PNG/Thumbnails/Excercise_nuxt-portfolio.png',
        Url_src: "/",
        // name of repo
        // Git_url: `${prefix}/nuxt-portfolio`,
        Git_url: noRepoLink,
        Datum: 'Aug. 2020',
        gitRepo: false,
    },
        // URL_src wordt gebruikt voor de thumbnails op de home page
    // nummer 1 is het eerste project en het grootste nummer is het laatste project
    {
        Projectnaam: 'Knowledge Quiz',
        id: 'Knowledge-Quiz',
        soort: 'Website',
        QuickDesc: "This project has no content so it's empty.",
        UsedTech: {
        tags: `
        <div class="TAG">API</div>
        <div class="TAG">frontend development</div>
        <div class="TAG">Trivia</div>
        `,
        Langs: `
        <div class="ProgrammeerTaal ORANGE">Javascript</div>
        <div class="ProgrammeerTaal ORANGE">Typescript</div>
        <div class="ProgrammeerTaal GREEN">Sass</div>
        <div class="ProgrammeerTaal GREEN">React</div>
        <div class="ProgrammeerTaal GREEN">Node.js</div>
        `,
        Programs: `
            <div class="ProgrammeerTaal RED">Netlify</div>
            <div class="ProgrammeerTaal RED">Git</div>
            <div class="ProgrammeerTaal RED">Yarn</div>
        `,
        },
        FullDesc: `
            This is project is to expand your general knowledge though a quiz with help from a separate Trivia API (library) call.
        `,
        Img_src: 'https://src.sandervanast.com/images/PNG/Thumbnails/Excercise_react-quiz.png',
        Url_src: "https://happy-austin-b5282d.netlify.app/",
        // name of repo
        Git_url: `${prefix}/react-quiz`,
        Datum: 'Sep. 2020',
        gitRepo: true,
    },
]