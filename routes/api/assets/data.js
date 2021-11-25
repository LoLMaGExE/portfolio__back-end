const works = [
    {
        id: 0,
        title: 'Build a portfolio website with React',
        date: '2021',
        tag: ['Frontend', 'React'],
        describe: 'Today we\'re going to create one of the most important apps you can build for yourself: your developer portfolio.',
        img: 'http://acherevan-api.herokuapp.com/img/work1.png',
        html: [
            'Every React developer or web developer in general needs to be able to show off what they can do to any potential client or employer.',
            'That\'s exactly what we\'re going to be building right now, with the help of a number of industry standard tools, including React, Sass, and HTML.',

        ],
    },
    {
        id: 1,
        title: 'Building a simple REST API with NodeJS and Express.',
        date: '2021',
        tag: ['Backend', 'NodeJS'],
        describe: 'In this article, we will build a simple REST API with Node.js and Express.',
        img: 'http://acherevan-api.herokuapp.com/img/work2.jpg',
        html: [
            'Have you been working on front-end technologies and been feeling like you’re missing out something in the whole development process? Well, here’s a good place to start. If you’re been building apps using HTML, CSS and JavaScript, you may want to learn how to build servers that serve content to these front end technologies.',
            'Express is a really cool Node framework that’s designed to help JavaScript developers create servers really quickly. NodeJS may be server side, but it can do a whole lot more than just serve pages and data. NodeJS is a powerful platform that lets you run JavaScript on your shell similar to how you’d run Python.',
            'To get started, head over to https://nodejs.org and download the most stable release of NodeJS. It’s noteworthy to remember not to download the latest version since it may contain bugs and features that could be removed from the final version. Once you download NodeJS binaries, install it into your machine using the instructions provided on the page relative to your platform.',
            'To confirm installation, close any open cmd instance that may be running and start a new instance. Type the following two commands to display the version of Node installed and NPM. NPM is the Node Package Manager and is a tool for installing, uninstalling and maintaining package modules for your app.'
        ],
    },
];


const posts = [{
    key: 0,
    header: 'C# is my first programing language',
    date: '15 Sep 2019',
    tag: ['C#', 'Programing'],
    description: 'I started my technical carrier. At first lesson i`ve created my first application "hello world".',
},
{
    key: 1,
    header: 'I`m starting to learn Java',
    date: '12 Feb 2020',
    tag: ['Java', 'Programing'],
    description: 'I know a lot about programming. I know what is OOP, Funcional programming, Algoritms and etc. Finally we start use new program language, it`s JAVA. I really enjoy coding becouse i can create something my own. I pass the programming exam and have 73/100',
},
{
    key: 2,
    header: 'My goal is to become a front-end developer',
    date: '5 August 2021',
    tag: ['Design', 'Programing'],
    description: 'I think a lot about it. I start learning pure HTML and CSS and i wanna learn some web framework such as Angular or ReactJS',
},
]

module.exports = { works, posts }