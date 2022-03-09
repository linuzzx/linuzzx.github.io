const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const terminal = document.querySelector('#terminal')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const terminalContent = document.querySelector('#terminal-content')

let aboutOpen = false;
about.addEventListener('click', () => {
    if (aboutOpen == false) {
        aboutOpen = true;
        const aboutBox = new WinBox({
            title: 'About Me',
            background: '#00aa00',
            width: '400px',
            height: '400px',
            x: 50,
            y: 50,
            top: 10,
            right: 10,
            bottom: 10,
            left: 10,
            mount: aboutContent,
            onclose: function(){
                aboutOpen = false;
            }
        })
    }
})

let contactOpen = false;
contact.addEventListener('click', () => {
    if (contactOpen == false) {
        contactOpen = true;
        const contactBox = new WinBox({
            title: 'Contact Me',
            background: '#00aa00',
            width: '400px',
            height: '400px',
            x: 100,
            y: 100,
            top: 10,
            right: 10,
            bottom: 10,
            left: 10,
            mount: contactContent,
            onclose: function(){
                contactOpen = false;
            }
        })
    }
})

let terminalOpen = false;
terminal.addEventListener('click', () => {
    if (terminalOpen == false) {
        terminalOpen = true;

        const terminalEngine = $('#terminal-content').terminal(terminalCommands, {
            greetings: '',
            prompt: 'linusx:~$ '
        });
        
        const terminalBox = new WinBox({
            title: 'Terminal',
            background: '#00aa00',
            width: '400px',
            height: '400px',
            x: 200,
            y: 200,
            top: 10,
            right: 10,
            bottom: 10,
            left: 10,
            mount: terminalContent,
            onclose: function(){
                terminalEngine.reset();
                terminalOpen = false;
            }
        });

    }
})
