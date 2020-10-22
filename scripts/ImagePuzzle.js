import Part from "./Part.js";

export default class Puzzle {
    constructor(el,imageSrc, width) {
        this.parentEl = el;
        this.dimension = 3;
        this.imageSrc = imageSrc;
        this.width = width;
        this.parts = [];
        this.shuffling = false;
        this.numberOfMovements = 0;

        // events
        this.onFinished = () => {};
        this.onSwap = () => {};

        this.el = this.createWrapper();

        this.init();
        const img = new Image();
        img.onload = () => {
            this.height = img.height * this.width / img.width;
            this.el.style.width = `${this.width}px`;
            this.el.style.height = `${this.height}px`;

            this.setup();
        };
        img.src =this.imageSrc;
    }

    init() {
        this.el = this.createWrapper();
        this.parentEl.appendChild(this.el);
    }

    createWrapper() {
        const div = document.createElement('div');
        div.style.position = 'relative';
        div.style.margin = '0 auto';


        return div;
    }

    setup() {
        for (let i = 0; i <this.dimension * this.dimension; i++) {
            this.parts.push(new Part(this, i));
        }
        this.shuffle();
    }

    shuffle() {
        for(let i = this.parts.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            this.swapParts(i,j);
        }
    }

    swapParts(i,j, animate) {
        this.parts[i].setPosition(j, animate, i);
        this.parts[j].setPosition(i);
        [this.parts[i], this.parts[j]] = [this.parts[j], this.parts[i]];
        if (!this.shuffling && this.isAssembled()) {
            if (this.onFinished && typeof this.onFinished === 'function') {
                this.onFinished.call(this);
            }
        }
    }

    isAssembled() {
        for (let i = 0; i <this.parts.length; i++) {
            if (i !== this.parts[i].index) {
                // if (i === 6 && this.parts[i].index === 8 && this.parts[i+1].index === i+1) {
                //     return true;
                // }
                return false;
            }
        }
        return true;
    }

    findPosition(ind) {
        return this.parts.findIndex(image =>image.index === ind);
    }

    findEmpty() {
        return this.parts.findIndex(image =>image.isEmpty);
    }



}

