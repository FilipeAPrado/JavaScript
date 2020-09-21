const ticTacToe = {
    board: ['', '', '', '', '', '', '', '', ''],   //array que representa as posições do tabuleiro
    simbols: {
        options: ['X', 'O'],                      //opções que preenchem o tabuleiro 
        turnIndex: 0,                             //controle de turno
        change: function () {                     // funcção que controla troca de turno
            this.turnIndex = (this.turnIndex === 0 ? 1 : 0);
        },
    },
    conteinerElement: null,



    winningSequences: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]],                              //array com possiveis sequencias de vencedores


    init: function (container) {                //função que inicia o jogo 
        this.conteinerElement = container;
    },
    player: ['Player-1', 'Player2'],              // array com os players






    playerWinner: null,


    playerWins: function () {                     //função que identifica o player vencedor 
        let winner = this.player[this.simbols.turnIndex];
        this.playerWinner.innerHTML = '<div>' + winner + '</div>';

    },
    playerWinnerConteiner: function (container) {
        this.playerWinner = container;
    },




    makePlay: function (position) {
        if (this.gameOver) return false;
        if (this.board[position] === '') {
            this.board[position] = this.simbols.options[this.simbols.turnIndex];
            this.draw();

            let winningSequencesIndex = this.checkWinningSequences(this.simbols.options[this.simbols.turnIndex]);
            if (winningSequencesIndex >= 0) {
                this.gameIsOver();
            }
            else {
                this.simbols.change();
            };
            return true;
        }
        else {
            return false;
        };



    },

    gameIsOver: function () {      //função que verifica se o jogo acabou com algum vencedor.
        this.gameOver = true;
        console.log('Game Over');
        setTimeout(() => alert('Game Over!!'), 0500);
        this.playerWins();

    },


    checkWinningSequences: function (simbol) {        //função que verifica qual sequencia foi vencedora e qual simbolo venceu.
        for (i in this.winningSequences) {
            if (this.board[this.winningSequences[i][0]] == simbol &&
                this.board[this.winningSequences[i][1]] == simbol &&
                this.board[this.winningSequences[i][2]] == simbol
            ) {
                console.log('Sequencia vencedora : ' + i);


                return i;

            }
        }

        return -1;
    },
    start: function () {
        this.board.fill('');
        this.draw();
        this.playerWinner.innerHTML = ''
        this.gameOver = false;
    },




    draw: function () {         //função que escreve no tabuleiro 
        let content = '';
        for (i in this.board) {
            content += '<div onclick="ticTacToe.makePlay(' + i + ')">' + this.board[i] + '</div>';  // cria uma div pra cada elemento de board e escreve o valor do elemento.


            this.conteinerElement.innerHTML = content;
        }
    }










};
