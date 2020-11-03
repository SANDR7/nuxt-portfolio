import axios from '~/plugins/axios'

export const state = () => ({
    Frameworks: [
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/vue.svg',
        Url_src: 'https://vuejs.org/',
        Image_alt: 'Vuejs_logo',
        name: 'Vue',
        BeginDate: 2019
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/react.svg',
        Url_src: 'https://reactjs.org/',
        Image_alt: 'React_logo',
        name: 'React',
        BeginDate: 2019
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/sass.svg',
        Url_src: 'https://sass-lang.com/',
        Image_alt: 'Sass_logo',
        name: 'Sass',
        BeginDate: 2018
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/nuxt.svg',
        Url_src: 'https://nuxtjs.org/',
        Image_alt: 'Nuxtjs_logo',
        name: 'Nuxt',
        BeginDate: 2020
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/gulp.svg',
        Url_src: 'https://gulpjs.com/',
        Image_alt: 'Gulp_logo',
        name: 'Gulp',
        BeginDate: 2019
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/jquery.svg',
        Url_src: 'https://jquery.com/',
        Image_alt: 'jQuery_logo',
        name: 'jquery',
        BeginDate: 2018
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/nodejs.svg',
        Url_src: 'https://nodejs.org/',
        Image_alt: 'Nodejs_logo',
        name: 'Node.js',
        BeginDate: 2020
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/bootstrap.svg',
        Url_src: 'https://getbootstrap.com/',
        Image_alt: 'BootStrap_logo',
        name: 'BootStrap',
        BeginDate: 2020
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/tailwindcss.svg',
        Url_src: 'https://tailwindcss.com/',
        Image_alt: 'Tailwind_logo',
        name: 'Tailwindcss',
        BeginDate: 2020
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/foundation.svg',
        Url_src: 'https://get.foundation/',
        Image_alt: 'Foundation_logo',
        name: 'Foundation',
        BeginDate: 2020
      },
    ],
    // programmeertalen inclusief databes  
    ProgrammeerTalen: [
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/javascript.svg',
        Image_alt: 'Javascript_logo',
        name: 'javaScript',
        BeginDate: 2017
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/typescript.svg',
        Image_alt: 'TypeScript_logo',
        name: 'TypeScript',
        BeginDate: 2020
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/html.svg',
        Image_alt: 'Html_logo',
        name: 'HTML',
        BeginDate: 2015
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/c-sharp.svg',
        Image_alt: 'C-Sharp_logo',
        name: 'C#',
        BeginDate: 2019
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/css.svg',
        Image_alt: 'Css_logo',
        name: 'CSS',
        BeginDate: 2015
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/php.svg',
        Image_alt: 'Php_logo',
        name: 'Php',
        BeginDate: 2018
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/firebase.svg',
        Image_alt: 'Firebase_logo',
        name: 'FireBase',
        BeginDate: 2020
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/mysql.svg',
        Image_alt: 'MySql_logo',
        name: 'MySQL',
        BeginDate: 2019
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/phpmyadmin.svg',
        Image_alt: 'PhpMyAdmin_logo',
        name: 'PhpMyAdmin',
        BeginDate: 2019
      }
    ],
    Programmas: [
      {
        Image_src: "https://src.sandervanast.com/images/SVG/adobe.svg",
        Image_alt: 'adobe_logo',
        cat: 'Design Software',
        name: 'Adobe'
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/office.svg',
        Image_alt: 'office_logo',
        cat: 'Microsoft Software Package',
        name: 'Office'
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/vs-code.svg',
        Image_alt: 'microsoft-vsCode_logo',
        cat: 'Source Code Editor',
        name: 'Visual Studio Code'
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/github.svg',
        Image_alt: 'Github_logo',
        cat: 'Software Repository Platform',
        name: 'GitHub'
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/googlesearchconsole.svg',
        Image_alt: 'google-searchconsole_logo',
        cat: 'Page Analytics Site',
        name: 'Google Search Console'
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/shopify.svg',
        Image_alt: 'shopify_logo',
        cat: 'Contentmanagement systeem',
        name: 'Shopify'
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/wordpress.svg',
        Image_alt: 'wordpress_logo',
        cat: 'Contentmanagement systeem',
        name: 'WordPress'
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/trello.svg',
        cat: 'Management Software',
        Image_alt: 'trello_logo',
        name: 'Trello'
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/msteams.svg',
        cat: 'Collaboration Platform',
        Image_alt: 'teams_logo',
        name: 'Microsoft Teams'
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/google-my-business.svg',
        cat: 'Business Analytics',
        Image_alt: 'google-my-business_logo',
        name: 'Google my Business'
      },
      {
        Image_src: "https://src.sandervanast.com/images/SVG/filezilla.svg",
        cat: 'File Transfer Software',
        Image_alt: 'filezilla_logo',
        name: 'FileZilla'
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/netlify.svg',
        cat: 'Web Hosting Platform',
        Image_alt: 'netlify_logo',
        name: 'Netlify'
      },
    ],
    ComputerKennis: [
      {
        Image_src: "https://src.sandervanast.com/images/SVG/apple.svg",
        Image_alt: 'apple-macos_logo',
        cat: 'Operating System',
        name: 'Mac OS Mojave'
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/windows.svg',
        Image_alt: 'microsoft-windows_logo',
        cat: 'Operating System',
        name: 'Windows'
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/windows.svg',
        Image_alt: 'microsoft-windows_logo',
        cat: 'Operating System',
        name: 'Windows Server 2016'
      },
      {
        Image_src: "https://src.sandervanast.com/images/SVG/linux.svg",
        Image_alt: 'linux_logo',
        cat: 'Operating System',
        name: 'Linux'
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/vmware.svg',
        Image_alt: 'vmware_logo',
        cat: 'Virtualization Software',
        name: 'VMware Workstation'
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/git.svg',
        Image_alt: 'git_logo',
        cat: 'Version Control System',
        name: 'Git'
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/yarn.svg',
        Image_alt: 'yarn_logo',
        cat: 'Software Package Manager',
        name: 'Yarn'
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/figma.svg',
        Image_alt: 'figma_logo',
        cat: 'Web Layout Software',
        name: 'Figma'
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/unity.svg',
        Image_alt: 'unity_logo',
        cat: 'Game Engine',
        name: 'Unity'
      },
      {
        Image_src: 'https://src.sandervanast.com/images/SVG/xampp.svg',
        cat: 'Local Webserver Software',
        Image_alt: 'xampp_logo',
        name: 'Xampp'
      },
    ],
    Services: [
      {
        icon: 'fad fa-swatchbook',
        Name: 'Graphic Design',
        Desc: 'One of my interests is graphic design. I believe that a corporate identity is one of the important focus for your personality, which makes you known as a brand.'
      },
      {
        icon: 'fad fa-expand-wide',
        Name: 'Wireframe Design',
        Desc: 'A wireframe is a fundamental part of a design. It determines the layout of a website. A unique design will stay in your memory, it makes you recognizable.'
      },
      {
        icon: 'fad fa-browser',
        Name: 'Web Development',
        Desc: "Web development is the course that I follow, this is also what I want to do as a profession. I have the space to experiment with different designs & technologies, this help me develop more."
      }
    ],
    Educations: [
      {
        id: 1,
        SchoolLogo: "https://src.sandervanast.com/images/PNG/Logos/RGO-Logo.png",
        SchoolLogoalt: "RGO-Logo",
        Schoolwebsite: "https://rgomiddelharnis.nl/",
        SchoolName: 'RGO Goeree-Overflakkee',
        SchoolSort: "VO",
        Specialty: "Services & Products",
        Niveau: "VMBO Kader",
        Duration: "2015 - 2019",
        Language: "Dutch",
        FaseInfo: `In high school we participated and helped in various school projects such as: VR tour for open day, Skills Talent tournament and completed an Anglia exam.`,
        Success: true
      },
      {
        id: 2,
        SchoolLogo: "https://src.sandervanast.com/images/PNG/Logos/GLR-Logo.png",
        SchoolLogoalt: "GLR-Logo",
        Schoolwebsite: "https://www.glr.nl/",
        SchoolName: 'Grafisch Lyceum Rotterdam',
        SchoolSort: "MBO",
        Specialty: "Software Development",
        Niveau: "Niveau 4",
        Duration: "2019 - 2022",
        Language: "Dutch",
        FaseInfo: `The degree is designed to apply all practical skills in the real world, things like: database structures, vocational training and an Internet Project Plan (IPP).`,
        Success: false
      },
    ],
    emailProvider: {
      host: 'smtp.strato.com',
      username: 'contact@sandervanast.com',
      password: '8FAYhJZK4BY2QbY'
    }
})
