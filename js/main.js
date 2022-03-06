const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const terminal = document.querySelector('#terminal')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const terminalContent = document.querySelector('#terminal-content')

about.addEventListener('click', () => {
    const aboutBox = new WinBox({
        title: 'About Me',
        background: '#00aa00',
        width: '400px',
        height: '400px',
        top: 50,
        right: 50,
        bottom: 0,
        left: 50,
        mount: aboutContent
    })
})

contact.addEventListener('click', () => {
    const contactBox = new WinBox({
        title: 'Contact Me',
        background: '#00aa00',
        width: '400px',
        height: '400px',
        top: 150,
        right: 50,
        bottom: 0,
        left: 150,
        mount: contactContent
    })

    contactBox.top = 50;
    contactBox.left = 50;
})

terminal.addEventListener('click', () => {
    const terminalBox = new WinBox({
        title: 'Terminal',
        background: '#00aa00',
        width: '400px',
        height: '400px',
        top: 200,
        right: 50,
        bottom: 0,
        left: 200,
        mount: terminalContent
    })

    contactBox.top = 50;
    contactBox.left = 50;
})
