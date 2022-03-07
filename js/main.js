const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const terminal = document.querySelector('#terminal')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const terminalContent = document.querySelector('#terminal-content')

about.addEventListener('click', () => {
    new WinBox({
        title: 'About Me',
        background: '#00aa00',
        width: '400px',
        height: '400px',
        x: 50,
        y: 50,
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: aboutContent
    })
})

contact.addEventListener('click', () => {
    new WinBox({
        title: 'Contact Me',
        background: '#00aa00',
        width: '400px',
        height: '400px',
        x: 100,
        y: 100,
        top: 150,
        right: 50,
        bottom: 0,
        left: 150,
        mount: contactContent
    })
})

terminal.addEventListener('click', () => {
    makeTerminal();


    new WinBox({
        title: 'Terminal',
        background: '#00aa00',
        width: '400px',
        height: '400px',
        x: 200,
        y: 200,
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: terminalContent,
        onclose: function(){
            terminal.exec('clear');
        }
    })
})
