$('#terminal-content').terminal({
    hello: function(what) {
        this.echo('Hello, ' + what +
                  '. Wellcome to this terminal.');
    },

    cat: function() {
        this.echo($('<img src="https://placekitten.com/408/287">'))}





}, {
    greetings: '',
    prompt: 'linusx:~$ '
});