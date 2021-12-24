const workImgPortfolio = 'http://acherevan-api.herokuapp.com/img/work1.png'
const workImgPortfolioBack = 'http://acherevan-api.herokuapp.com/img/work2.jpg'

// import userPhoto from './../img/user/photo.png'


const getWorks = () => {
    const works = [{
            id: 0,
            title: 'Build a portfolio website with React',
            date: '2021',
            tag: ['Frontend', 'React'],
            describe: 'Creating webpage with ReactJS and Sass',
            img: workImgPortfolio,
            html: [
                'I learned a lot about ReactJS and Sass so i wanna create something interesting. At first a thought about simple shop but then i decide to create my own portfolio website. To create design for this website i`ll use figma. To create website i`ll use ReactJS, JSX, Sass and ETC. '
            ],
        },
        {
            id: 1,
            title: 'Building a simple REST API with NodeJS and Express.',
            date: '2021',
            tag: ['Backend', 'NodeJS'],
            describe: 'In this article, i will build a simple REST API with Node.js and Express.',
            img: workImgPortfolioBack,
            html: [
                'Have you been working on front-end technologies and been feeling like you’re missing out something in the whole development process? Well, here’s a good place to start. If you’re been building apps using HTML, CSS and JavaScript, you may want to learn how to build servers that serve content to these front end technologies.',
                'Express is a really cool Node framework that’s designed to help JavaScript developers create servers really quickly. NodeJS may be server side, but it can do a whole lot more than just serve pages and data. NodeJS is a powerful platform that lets you run JavaScript on your shell similar to how you’d run Python.',
                'To get started, head over to https://nodejs.org and download the most stable release of NodeJS. It’s noteworthy to remember not to download the latest version since it may contain bugs and features that could be removed from the final version. Once you download NodeJS binaries, install it into your machine using the instructions provided on the page relative to your platform.',
                'To confirm installation, close any open cmd instance that may be running and start a new instance. Type the following two commands to display the version of Node installed and NPM. NPM is the Node Package Manager and is a tool for installing, uninstalling and maintaining package modules for your app.'
            ],
        },]
    return works
}

const getPosts = () => {
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
        description: 'I know a lot of programming. I know what is OOP, Functional programming, Algoritms and etc. Finally i start use new program language, it`s JAVA. I really enjoy coding because i can create something my own.',
    },
    {
        key: 2,
        header: 'My aim is to become a front-end developer',
        date: '5 August 2020',
        tag: ['Design', 'Programing'],
        description: 'I think a lot about it. I start learning pure HTML and CSS and i wanna learn some about web frameworks such as Angular or ReactJS',
    },]
    return posts
}

const works = getWorks();
const posts = getPosts();

module.exports = { works, posts }