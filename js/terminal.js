function makeTerminal() {
    const terminal = $('#terminal-content').terminal({
        help: function() {
            this.echo('\nTry these commands:');
            this.echo('help:	see this page');
            this.echo('test:	self explanatory');
            this.echo('cat:	get picture of cute kitty');
            this.echo('matrix:	you know the deal');
    
            this.echo('\n');
        },
    
        cat: function() {
            this.echo($('<img src="https://cataas.com/cat?ignore=' + Math.floor(Math.random()* 1000) +'" width="200">'));
            this.echo('\n');
        },
    
        test: function() {
            this.echo('this is a test');
        },
        
        matrix: function() {

            function typeWriter() {
                if (i < txt.length) {
                    document.getElementById("typewritertext").innerHTML += txt.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                }
            }

            // Typewriter
            document.body.innerHTML = '<div id="matrixtext"><p id="typewritertext">Wake up, Neo...</p></div>';
            

            var i = 0;
            var txt = 'The Matrix has you...';
            var speed = 333;


            setTimeout(function() {
                document.getElementById("typewritertext").innerHTML = ''
                typeWriter();

            }, 2000);

            
            // Matrix
            function startMatrix() {
                document.body.innerHTML = '<canvas><p id="typewritertext">Hello</p></canvas>';
                let canvas = document.querySelector("canvas");

                let ctx = canvas.getContext("2d");
                let width = canvas.width = window.innerWidth;
                let height = canvas.height = window.innerHeight;
                let str = "A+jk js:2 @dfs 17 tr YY ufds M5r P87 #18 $!& ^dfs $Ew er JH # $ * . (! ;) ,: :";
                let matrix = str.split("");
                let font = 12;
                let col = width / font;
                let arr = [];

                for(let i = 0; i < col; i++) {
                    arr[i] = 0;
                }

                const draw = () => {
                    ctx.fillStyle = "rgba(0,0,0,0.05)";
                    ctx.fillRect(0, 0, width, height);
                    ctx.fillStyle = "#00FF00";
                    ctx.font = '${font}px system-ui';

                    for(let i = 0; i < arr.length; i++) {
                        let txt = matrix[Math.floor(Math.random() * matrix.length)];
                        ctx.fillText(txt, i * font, arr[i] * font);

                        if(arr[i] * font > height && Math.random() > 0.975) {
                            arr[i] = 0;
                        }
                        arr[i]++;
                    }
                }

                setInterval(draw, 20);

                window.addEventListener("resize", () => location.reload());
            }

            setTimeout(function() {
                startMatrix();
            }, 14000);
        }
    
    
    
    }, {
        greetings: '',
        prompt: 'linusx:~$ '
    });
}