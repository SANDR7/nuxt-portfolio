import axios from '~/plugins/axios'
const CDN_LINK = "https://firebasestorage.googleapis.com/v0/b/portfolioform-60d02.appspot.com/";
export const state = () => ({
  Frameworks: [
    {
      Image_src: `${CDN_LINK}o/SVG%2Fvue.svg?alt=media&token=d93da3a6-242e-470f-b9bf-6569b84a17f2`,
      Url_src: 'https://vuejs.org/',
      Image_alt: 'Vuejs_logo',
      name: 'Vue',
      BeginDate: 2019
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Freact.svg?alt=media&token=b5d92b9c-cf72-466e-9edd-a6f09434b437`,
      Url_src: 'https://reactjs.org/',
      Image_alt: 'React_logo',
      name: 'React',
      BeginDate: 2019
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fsass.svg?alt=media&token=a1b5d9f9-3967-4ee5-9624-30684432a8ac`,
      Url_src: 'https://sass-lang.com/',
      Image_alt: 'Sass_logo',
      name: 'Sass',
      BeginDate: 2018
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fnuxt.svg?alt=media&token=4baedb0f-22ca-41ff-a059-3ed9e5eb425b`,
      Url_src: 'https://nuxtjs.org/',
      Image_alt: 'Nuxtjs_logo',
      name: 'Nuxt',
      BeginDate: 2020
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fgulp.svg?alt=media&token=b90ab679-a340-4a49-9c8c-43cc23678a35`,
      Url_src: 'https://gulpjs.com/',
      Image_alt: 'Gulp_logo',
      name: 'Gulp',
      BeginDate: 2019
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fjquery.svg?alt=media&token=d8548709-7972-4a5c-92f5-09cd389b4b79`,
      Url_src: 'https://jquery.com/',
      Image_alt: 'jQuery_logo',
      name: 'jquery',
      BeginDate: 2018
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fnodejs.svg?alt=media&token=25edff2b-3764-4b2f-860b-6707aac1b247`,
      Url_src: 'https://nodejs.org/',
      Image_alt: 'Nodejs_logo',
      name: 'Node.js',
      BeginDate: 2020
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fbootstrap.svg?alt=media&token=2c12d46b-1772-489a-9a24-09e2422e0f43`,
      Url_src: 'https://getbootstrap.com/',
      Image_alt: 'BootStrap_logo',
      name: 'BootStrap',
      BeginDate: 2020
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Ftailwindcss.svg?alt=media&token=10387bf1-443d-427e-bab7-4a31485040bf`,
      Url_src: 'https://tailwindcss.com/',
      Image_alt: 'Tailwind_logo',
      name: 'Tailwindcss',
      BeginDate: 2020
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Ffoundation.svg?alt=media&token=bd7c11a6-1973-4aba-9e6a-ce5441c7c27d`,
      Url_src: 'https://get.foundation/',
      Image_alt: 'Foundation_logo',
      name: 'Foundation',
      BeginDate: 2020
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fchartjs.svg?alt=media&token=1961ac50-08d7-4cc7-9927-36ec0c7e70f2`,
      Url_src: 'https://www.chartjs.org/',
      Image_alt: 'Chart_logo',
      name: 'Chart.js',
      BeginDate: 2021
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fleaflet.svg?alt=media&token=d7bf65b5-13c6-4449-9ecc-12f5cc408ab9`,
      Url_src: 'https://leafletjs.com/',
      Image_alt: 'Leaflet_logo',
      name: 'Leaflet',
      BeginDate: 2021
    },
  ],
  // programmeertalen inclusief databes  
  ProgrammeerTalen: [
    {
      Image_src: `${CDN_LINK}o/SVG%2Fjavascript.svg?alt=media&token=adf2ece2-f825-4abf-98d1-66319a566ab5`,
      Image_alt: 'Javascript_logo',
      name: 'javaScript',
      BeginDate: 2017
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Ftypescript.svg?alt=media&token=d4a49d4e-42f5-4ab3-897b-f350f6b17ae3`,
      Image_alt: 'TypeScript_logo',
      name: 'TypeScript',
      BeginDate: 2020
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fhtml.svg?alt=media&token=ebce6ece-a960-451a-92e7-1584653459cf`,
      Image_alt: 'Html_logo',
      name: 'HTML',
      BeginDate: 2015
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fc-sharp.svg?alt=media&token=b3afe802-02a5-4da4-827e-654746fb39af`,
      Image_alt: 'C-Sharp_logo',
      name: 'C#',
      BeginDate: 2019
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fcss.svg?alt=media&token=c491b3f6-2762-4fd6-9ee5-9a66bc9c19cd`,
      Image_alt: 'Css_logo',
      name: 'CSS',
      BeginDate: 2015
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fphp.svg?alt=media&token=0e427dbc-efd6-4b8c-8f97-932c10b9340c`,
      Image_alt: 'Php_logo',
      name: 'Php',
      BeginDate: 2018
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Ffirebase.svg?alt=media&token=0ef461fc-6195-432e-8809-b6719629ebe9`,
      Image_alt: 'Firebase_logo',
      name: 'FireBase',
      BeginDate: 2020
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fmongodb.svg?alt=media&token=1464cc3c-e77b-4008-be3d-89c32096c427`,
      Image_alt: 'Mongodb_logo',
      name: 'MongoDB',
      BeginDate: 2020
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fmysql.svg?alt=media&token=3f9681d8-5994-49ea-8375-773a4028e4b8`,
      Image_alt: 'MySql_logo',
      name: 'MySQL',
      BeginDate: 2019
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fphpmyadmin.svg?alt=media&token=57f75ed4-6130-4a7d-9b31-f767a0e50553`,
      Image_alt: 'PhpMyAdmin_logo',
      name: 'PhpMyAdmin',
      BeginDate: 2019
    },
  ],
  Programmas: [
    {
      Image_src: `${CDN_LINK}o/SVG%2Fadobe.svg?alt=media&token=319f07dd-fc8a-43ec-a831-6cae45f487fd`,
      Image_alt: 'adobe_logo',
      cat: 'Design Software',
      name: 'Adobe'
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Foffice.svg?alt=media&token=375d9990-a882-4905-9b41-030a538f658a`,
      Image_alt: 'office_logo',
      cat: 'Microsoft Software Package',
      name: 'Office'
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fvs-code.svg?alt=media&token=a69bb9e5-bbe9-44bd-a5b2-db2310ec2a2d`,
      Image_alt: 'microsoft-vsCode_logo',
      cat: 'Source Code Editor',
      name: 'Visual Studio Code'
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fgithub.svg?alt=media&token=a6bbad0c-9c3d-479e-8299-73d54b62f0ff`,
      Image_alt: 'Github_logo',
      cat: 'Software Repository Platform',
      name: 'GitHub'
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fgooglesearchconsole.svg?alt=media&token=30e12811-3fed-49bc-9576-72dcd062b73a`,
      Image_alt: 'google-searchconsole_logo',
      cat: 'Page Analytics Site',
      name: 'Google Search Console'
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fshopify.svg?alt=media&token=55659955-8d53-453b-9ada-096d24deb860`,
      Image_alt: 'shopify_logo',
      cat: 'Contentmanagement systeem',
      name: 'Shopify'
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fwordpress.svg?alt=media&token=9ada1a0b-c09a-4309-93fe-76a7d7086690`,
      Image_alt: 'wordpress_logo',
      cat: 'Contentmanagement systeem',
      name: 'WordPress'
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Ftrello.svg?alt=media&token=e9392f80-daaf-4483-b9c2-f2f8758956c9`,
      cat: 'Management Software',
      Image_alt: 'trello_logo',
      name: 'Trello'
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fmsteams.svg?alt=media&token=74b14e3d-79d1-4835-823f-795abb02e058`,
      cat: 'Collaboration Platform',
      Image_alt: 'teams_logo',
      name: 'Microsoft Teams'
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fgoogle-my-business.svg?alt=media&token=24ea7e74-03b2-4033-aa32-c20996e46da1`,
      cat: 'Business Analytics',
      Image_alt: 'google-my-business_logo',
      name: 'Google my Business'
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Ffilezilla.svg?alt=media&token=9a093642-de92-4120-8259-c00869b91515`,
      cat: 'File Transfer Software',
      Image_alt: 'filezilla_logo',
      name: 'FileZilla'
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fnetlify.svg?alt=media&token=866c78de-4094-4d21-ac9b-8a422e595d6a`,
      cat: 'Web Hosting Platform',
      Image_alt: 'netlify_logo',
      name: 'Netlify'
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fheroku.svg?alt=media&token=2aec9558-2223-402e-a8d9-b5926213f84e`,
      cat: 'Hosting Platform',
      Image_alt: 'heroku_logo',
      name: 'Heroku'
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fplesk.svg?alt=media&token=f20cda6f-8358-4de5-ba75-1bb5a96012db`,
      cat: 'Hosting Platform',
      Image_alt: 'Plesk_logo',
      name: 'Plesk'
    },
  ],
  ComputerKennis: [
    {
      Image_src: `${CDN_LINK}o/SVG%2Fapple.svg?alt=media&token=4901ef29-49c7-433f-b825-466871911c08`,
      Image_alt: 'apple-macos_logo',
      cat: 'Operating System',
      name: 'Mac OS Mojave'
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fwindows.svg?alt=media&token=3a896834-3d7a-4f08-ae61-6bfca7e55d03`,
      Image_alt: 'microsoft-windows_logo',
      cat: 'Operating System',
      name: 'Windows'
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fwindows.svg?alt=media&token=3a896834-3d7a-4f08-ae61-6bfca7e55d03`,
      Image_alt: 'microsoft-windows_logo',
      cat: 'Operating System',
      name: 'Windows Server 2016'
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fvim.svg?alt=media&token=4e1b4615-bb89-4db4-a7f8-b4921498b074`,
      Image_alt: 'vim_logo',
      cat: 'Source Code Editor',
      name: 'Vim'
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Flinux.svg?alt=media&token=17cb65ed-9c38-4f29-b04d-bdf4fbc6b369`,
      Image_alt: 'linux_logo',
      cat: 'Operating System',
      name: 'Linux'
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fvmware.svg?alt=media&token=f6d86f55-6bae-4b19-9ab1-29531cc8089b`,
      Image_alt: 'vmware_logo',
      cat: 'Virtualization Software',
      name: 'VMware Workstation'
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fgit.svg?alt=media&token=3ba74ecb-b731-457e-acb7-f706d2ab1022`,
      Image_alt: 'git_logo',
      cat: 'Version Control System',
      name: 'Git'
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fyarn.svg?alt=media&token=2e6bdc74-8d2e-47d1-9e6e-07f41e3f07da`,
      Image_alt: 'yarn_logo',
      cat: 'Software Package Manager',
      name: 'Yarn'
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Ffigma.svg?alt=media&token=dc72b46c-fc18-4ccb-88bd-17ac5d14ae9d`,
      Image_alt: 'figma_logo',
      cat: 'Web Layout Software',
      name: 'Figma'
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Funity.svg?alt=media&token=9396ab76-b543-43c2-a102-1becec818504`,
      Image_alt: 'unity_logo',
      cat: 'Game Engine',
      name: 'Unity'
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fxampp.svg?alt=media&token=69eaca6d-7edd-4388-a101-b504f1014133`,
      cat: 'Local Webserver Software',
      Image_alt: 'xampp_logo',
      name: 'Xampp'
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fnotion.svg?alt=media&token=afe88460-8133-489a-9dc1-d746070500b3`,
      cat: 'Organizing & Planning Tool',
      Image_alt: 'notion_logo',
      name: 'Notion'
    },
    {
      Image_src: `${CDN_LINK}o/SVG%2Fgoogle-cloud.svg?alt=media&token=2ee874a6-0ae2-41d9-b0a0-dbfecb41da81`,
      cat: 'Cloud Computing-Services',
      Image_alt: 'Gcloud_logo',
      name: 'Google Cloud'
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
      SchoolLogo: "https://firebasestorage.googleapis.com/v0/b/portfolioform-60d02.appspot.com/o/PNG%2FLogos%2FGLR-Logo.png?alt=media&token=4b64aaa6-c1b2-4fc5-b855-9f6678122e32",
      SchoolLogoalt: "GLR-Logo",
      Schoolwebsite: "https://www.glr.nl/",
      SchoolName: 'Grafisch Lyceum Rotterdam',
      SchoolSort: "MBO",
      Specialty: "Software Development",
      Niveau: "Niveau 4",
      Duration: "2019 - 2022",
      Language: "Dutch",
      FaseInfo: `The degree is designed to apply all practical skills in the real world, things like: database structures, vocational training and an Internet Project Plan (IPP).`,
      Success: false,
      SuccessMsg: `Currently in year two`
    },
    {
      id: 2,
      SchoolLogo: "https://firebasestorage.googleapis.com/v0/b/portfolioform-60d02.appspot.com/o/PNG%2FLogos%2FRGO-Logo.png?alt=media&token=9959a7e1-99c3-46a4-b73f-1b2743a26c13",
      SchoolLogoalt: "RGO-Logo",
      Schoolwebsite: "https://rgomiddelharnis.nl/",
      SchoolName: 'RGO Goeree-Overflakkee',
      SchoolSort: "VO",
      Specialty: "Services & Products",
      Niveau: "VMBO Kader",
      Duration: "2015 - 2019",
      Language: "Dutch",
      FaseInfo: `In high school we participated and helped in various school projects such as: VR tour for open day, Skills Talent tournament and completed an Anglia exam.`,
      Success: true,
      SuccessMsg: `Pased with an average of 7`
    },
  ],
  emailProvider: {
    host: process.env.PROV,
    username: process.env.MAIL,
    password: process.env.MAIL_PASSWORD
  }
})
