'use strict';

class Dice {
    constructor(turns, faces = { top: 2, front: 1, right: 4 }) {
        this.init( faces );
        this.doTurns( turns );
    }

    init(faces) {
        this.top = faces.top;
        this.front = faces.front;
        this.right = faces.right;
    }

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

    turnUp() {
        let bottom = this.getBottom();

        this.top = this.front;
        this.front = bottom;
    }

    getBottom() {
        return Math.abs( this.top - 7 );
    }

    turnRight() {
        let left = this.getLeft();

        this.right = this.front;
        this.front = left;
    }

    getLeft() {
        return Math.abs( this.right - 7 );
    }

    get current() {
        return this.front;
    }

    get faces() {
        return {
            top: this.top,
            front: this.front,
            right: this.right
        }
    }
}

export default Dice;