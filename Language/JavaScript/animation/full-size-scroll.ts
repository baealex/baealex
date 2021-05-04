export interface FullSizeScrollProps {
    root: string;
    alias?: string;
    animationDuration?: number;
    animationFunction?: 'ease';
    shouldReactive?: boolean;
    displayDots?: boolean;
    dotsPosition?: 'left' | 'right'
    onChangePosition?: (position: number) => void;
}

export interface FullSizeScrollStore {
    container: HTMLElement | null;
    sections: HTMLCollectionOf<HTMLElement> | undefined;
    maxPosition: number;
    currentPosition: number;
    alias: string;
    animationDuration: number;
    animationFunction: 'ease';
    shouldReactive: boolean;
    displayDots: boolean;
    dotsPosition: 'left' | 'right';
    aliasMapper: {
        [key: string]: number;
    }
    preAnchor: string;
    onChangePosition?: (position: number) => void;
}

export class FullSizeScroll {
    private store: FullSizeScrollStore;
    private events: {
        mouseWheelAndKey?: Function;
        touchStart?: Function;
        touchEnd?: Function;
        hashChange?: Function;
    };
    private mTouchStart: number;
    private mTouchEnd: number;

    constructor(props: FullSizeScrollProps) {
        const {
            animationDuration = 0.7,
            animationFunction = 'ease',
            shouldReactive = false,
            displayDots = false,
            dotsPosition = 'left',
            alias = '',
        } = props;

        const container = document.getElementById(props.root);
        const sections = container?.getElementsByTagName('section');

        this.store = {
            container,
            sections,
            alias,
            currentPosition: 0,
            maxPosition: sections?.length || 0,
            animationDuration,
            animationFunction,
            shouldReactive,
            displayDots,
            dotsPosition,
            preAnchor: '',
            aliasMapper: {},
            onChangePosition: props.onChangePosition
        };
        this.events = {};
        this.mTouchStart = 0;
        this.mTouchEnd = 0;

        this.buildSections();
        this.buildEvents();
        this.addEvents();

        const anchor = location.hash.replace('#', '').split('/')[0];
        if (anchor !== '') {
            this.store.preAnchor = anchor;
            const index = this.store.aliasMapper[anchor];
            if (index !== undefined) {
                this.setCurrentPosition(index);
                this.animateScroll();
            }
        }
    }

    buildSections() {
        const sections = this.store.sections || [];
        const sectionsLength = sections?.length || 0;
        for (let i = 0; i < sectionsLength; i++) {
            sections[i].setAttribute('data-position', '' + i);
            sections[i].setAttribute('data-alias', this.store.alias + (i + 1));
            this.store.aliasMapper[this.store.alias + (i + 1)] = i;
        }
    }

    buildEvents() {
        this.events.mouseWheelAndKey = (event: any) => {
            if (event.deltaY > 0 || event.keyCode == 40) {
                this.setCurrentPosition(this.store.currentPosition + 1);
            }
            if (event.deltaY < 0 || event.keyCode == 38) {
                if (this.store.currentPosition !== this.store.maxPosition) {
                    this.setCurrentPosition(this.store.currentPosition - 1);
                }
            }
            this.removeEvents();
        }
        
        this.events.touchStart = (event: any) => {
            this.mTouchStart = parseInt(event.changedTouches[0].clientY);
            this.mTouchEnd = 0;
        };
    
        this.events.touchEnd = (event: any) => {
            this.mTouchEnd = parseInt(event.changedTouches[0].clientY);
            if (this.mTouchEnd - this.mTouchStart > 100 || this.mTouchStart - this.mTouchEnd > 100) {
                if (this.mTouchEnd > this.mTouchStart) {
                    this.setCurrentPosition(this.store.currentPosition - 1);
                } else {
                    this.setCurrentPosition(this.store.currentPosition + 1);
                }
            }
        };

        this.events.hashChange = () => {
            if (location) {
                const anchor = location.hash.replace('#', '').split('/')[0];
                if (anchor !== '' && anchor !== this.store.preAnchor) {
                    this.store.preAnchor = anchor;
                    const index = this.store.aliasMapper[anchor];
                    if (index !== undefined) {
                        this.setCurrentPosition(index);
                        this.animateScroll();
                    }
                }
            }
        };
    }

    setCurrentPosition(position: number) {
        if (position < 0 || position >= this.store.maxPosition) {
            return;
        }

        if (this.store.onChangePosition) {
            this.store.onChangePosition(position);
        }

        this.store.currentPosition = position;
        location.hash = this.store.alias + (this.store.currentPosition + 1);
    }

    animateScroll() {
        const {
            animationDuration,
            animationFunction,
            shouldReactive,
            container,
            currentPosition,
            sections
        } = this.store;

        const position =
            shouldReactive
                ? sections && (
                    sections[currentPosition].offsetTop
                    + sections[this.store.currentPosition].offsetHeight
                    - window.innerHeight) || 0
                : currentPosition * 100;
        const unit = shouldReactive ? 'px' : '%';
        
        const transform = 'translateY(-' + position + unit + ')';
        const transition = 'all ' + animationDuration + 's ' + animationFunction;

        (<any>container).style.webkitTransform = transform;
        (<any>container).style.mozTransform = transform;
        (<any>container).style.msTransform = transform;
        (<any>container).style.transform = transform;
        (<any>container).style.webkitTransition = transition;
        (<any>container).style.mozTransition = transition;
        (<any>container).style.msTransition = transition;
        (<any>container).style.transition = transition;
    };

    addEvents() {
        if (<any>document.addEventListener) {
            (<any>document).addEventListener('mousewheel', this.events.mouseWheelAndKey, false);
            (<any>document).addEventListener('wheel', this.events.mouseWheelAndKey, false);
            (<any>document).addEventListener('keyup', this.events.mouseWheelAndKey, false);
            (<any>document).addEventListener('touchstart', this.events.touchStart, false);
            (<any>document).addEventListener('touchend', this.events.touchEnd, false);
            (<any>window).addEventListener('hashchange', this.events.hashChange, false);

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                if (!('ontouchstart' in window)) {
                    (<any>document).body.style = "overflow: scroll;";
                    (<any>document).documentElement.style = "overflow: scroll;";
                }
            }
        } else {
            (<any>document).attachEvent('onmousewheel', this.events.mouseWheelAndKey, false);
            (<any>document).attachEvent('onkeyup', this.events.mouseWheelAndKey, false);
        }
    
        return this;
    }

    removeEvents() {
        if (<any>document.addEventListener) {
            (<any>document).removeEventListener('mousewheel', this.events.mouseWheelAndKey, false);
            (<any>document).removeEventListener('wheel', this.events.mouseWheelAndKey, false);
            (<any>document).removeEventListener('keyup', this.events.mouseWheelAndKey, false);
            (<any>document).removeEventListener('touchstart', this.events.touchStart, false);
            (<any>document).removeEventListener('touchend', this.events.touchEnd, false);
        } else {
            (<any>document).detachEvent('onmousewheel', this.events.mouseWheelAndKey, false);
            (<any>document).detachEvent('onkeyup', this.events.mouseWheelAndKey, false);
        }

        setTimeout(() => {
            this.addEvents();
        }, this.store.animationDuration * 1000);
    }

    remove() {
        delete this.store.onChangePosition;
        
        if (<any>document.addEventListener) {
            (<any>document).removeEventListener('mousewheel', this.events.mouseWheelAndKey, false);
            (<any>document).removeEventListener('wheel', this.events.mouseWheelAndKey, false);
            (<any>document).removeEventListener('keyup', this.events.mouseWheelAndKey, false);
            (<any>document).removeEventListener('touchstart', this.events.touchStart, false);
            (<any>document).removeEventListener('touchend', this.events.touchEnd, false);
        } else {
            (<any>document).detachEvent('onmousewheel', this.events.mouseWheelAndKey, false);
            (<any>document).detachEvent('onkeyup', this.events.mouseWheelAndKey, false);
        }
    }
}