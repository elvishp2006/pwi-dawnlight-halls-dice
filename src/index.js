'use strict';

class Dice {
    /**
     * Passe os turnos para serem realizados na construção do dado.
     * Opcionalmente você pode passar as faces atuais.
     * @param {string} turns
     * @param {object} faces
     */
    constructor(turns, faces = { top: 2, front: 1, right: 4 }) {
        this.init( faces );
        this.doTurns( turns );
    }

    /**
     * Inicializa o dado com as faces recebidas via parâmetro.
     * @param {string} faces
     */
    init(faces) {
        this.top = faces.top;
        this.front = faces.front;
        this.right = faces.right;
    }

    /**
     * Realiza os turnos para obtenção de novas faces.
     * Ex.: URR
     * @param {string} turns
     */
    doTurns(turns) {
        if ( ! turns ) {
            return;
        }

        turns = turns.split( '' );

        turns.forEach((l) => {
            switch ( l ) {
                case 'U':
                    this.turnUp();
                    break;

                case 'R':
                    this.turnRight();
                    break;
            }
        });
    }

    /**
     * Rola o dado para cima.
     */
    turnUp() {
        let bottom = this.getBottom();

        this.top = this.front;
        this.front = bottom;
    }

    /**
     * Obtem o valor da face abaixo.
     */
    getBottom() {
        return Math.abs( this.top - 7 );
    }

    /**
     * Rola o dado para a direita.
     */
    turnRight() {
        let left = this.getLeft();

        this.right = this.front;
        this.front = left;
    }

    /**
     * Obtem o valor da face à esquerda.
     */
    getLeft() {
        return Math.abs( this.right - 7 );
    }

    /**
     * Obtem o valor altual.
     */
    get current() {
        return this.front;
    }

    /**
     * Retorna o valor de todas as faces.
     */
    get faces() {
        return {
            top: this.top,
            front: this.front,
            right: this.right
        }
    }
}

export default Dice;