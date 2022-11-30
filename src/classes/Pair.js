const ghostPlayer = {
    id: 0,
    number: '',
    name: ''
}

export class Pair {
    constructor(x, y) {
        this.leader = ghostPlayer;
        this.chaser = ghostPlayer;
        this.winner = ghostPlayer;
        this.x = x;
        this.y = y;
        this.viewObservers = [];
        this.tourObservers = []
    }

    set changeChaser(p) {
        this.chaser = p;
        this.winner = ghostPlayer;
        this.tourObservers.forEach(f => f(this));
        this.viewObservers.forEach(f => f(this));
    }

    set changeLeader(p) {
        this.leader = p;
        this.winner = ghostPlayer;
        this.tourObservers.forEach(f => f(this));
        this.viewObservers.forEach(f => f(this));
    }

    isVisible() {
        return this.leader.id !== 0 || this.chaser.id !== 0;
    }

    trySetWinner(c) {
        if (this.winner === c) {
            this.winner = ghostPlayer;
        } else {
            this.winner = c;
        }
        this.viewObservers.forEach(f => f(this));
        this.tourObservers.forEach(f => f(this));
    }

    subscribeTourObservers(o) {
        if (this.tourObservers.indexOf(o) === -1)
            this.tourObservers.push(o);
    }

    unsubscribeTourObservers(o) {
        this.tourObservers = this.tourObservers.filter(f => f !== o)
    }

    subscribeViewObservers(o) {
        if (this.viewObservers.indexOf(o) === -1)
            this.viewObservers.push(o);
    }

    unsubscribeViewObservers(o) {
        this.viewObservers = this.viewObservers.filter(f => f !== o)
    }
}