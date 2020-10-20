import ImagePart from "./ImagePart.js";

export default class Puzzle {
    constructor(el, imageSrc, width, dimension = 3) {
        this.parentEl = el;
        this.dimension = dimension;
        this.imageSrc = imageSrc;
        this.width = width;
        this.imageParts = [];
        this.shuffling = false;
        this.numberOfMovements = 0;

        // events
        this.onFinished = () => {};
        this.onSwap = () => {};

        this.init();
        const img = new Image();
        img.onload = () => {
            console.log(img.width, img.height);

            this.height = img.height * this.width / img.width;
            this.el.style.width = `${this.width}px`;
            this.el.style.height = `${this.height}px`;

            this.setup();
        };
        img.src = this.imageSrc;

        // this.parentEl.appendChild(this.el);
    }

    init() {
        this.el = this.createWrapper();
        // this.parentEl.appendChild(this.el);
    }

    createWrapper() {
        const div = document.createElement('div');
        // div.style.position = 'relative';
        // div.style.margin = ' 0 auto';

        return div;
    }

    setup() {
        for (let i = 0; i < this.dimension * this.dimension; i++) {
            this.imageParts.push(new ImagePart (this, i));
        }
        this.shuffle();
    }

    shuffle() {
        this.shuffling = true;
        for (let i = this.imageParts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            this.swapImageParts(i, j);
        }
        this.shuffling = false;
    }

    swapImageParts(i, j, animate) {


        this.imageParts[i].setPosition(j, animate, i);
        this.imageParts[j].setPosition(i);
        [this.imageParts[i], this.imageParts[j]] = [this.imageParts[j], this.imageParts[i]];
        if (!this.shuffling && this.isAssembled()) {
            if (this.onFinished && typeof this.onFinished === 'function') {
                this.onFinished.call(this);
            }
        }
    }

    isAssembled() {
        for (let i = 0; i < this.imageParts.length; i++) {
            if (i !== this.imageParts[i].index) {
                if (i === 6 && this.imageParts[i].index === 8 && this.imageParts[i + 1].index === i + 1) {
                    return true;
                }
                return false;
            }
        }
        return true;
    }

    findPosition(ind) {
        return this.imageParts.findIndex(imagePart => imagePart.index === ind);
    }

    findEmpty() {
        return this.imageParts.findIndex(imagePart => imagePart.isEmpty);
    }
}

window.Puzzle = window.Puzzle || Puzzle;
