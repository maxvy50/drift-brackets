import {Pair} from "./Pair";

export const prepareBracket = (players, playersCount, isDE) => {

    const size1Y = playersCount / 2
    const sizeX = Math.log2(playersCount);
    const bracket = [];

    const createFirstTour = (players) => {
        const tour = [];
        for (let j = 0; j < size1Y; j++) {
            const pair = new Pair(0, j);
            pair.changeLeader = players[j];
            pair.changeChaser = players[2 * size1Y - 1 - j];
            tour.push(pair);
        }
        bracket.push(tour);
    }
    const fillEmptiness = (bracket) => {
        for (let i = 1; i < sizeX; i++) {
            let sizeIY = size1Y / (2 ** i);
            const tour = [];
            for (let j = 0; j < sizeIY; j++) {
                tour.push(new Pair(i, j));
            }
            bracket.push(tour);
        }
    }
    const subscribeCascade = (bracket) => {
        const createPairObserver = (pair, subscriber) => {
            if (pair.y % 2 === 0) {
                return p => {
                    subscriber.changeLeader = p.winner
                };
            } else {
                return p => {
                    subscriber.changeChaser = p.winner
                };
            }
        }
        const unsub = [];
        bracket.forEach((tour, i) => {
            if (i === sizeX - 1) return;
            tour.forEach((pair, j) => {
                const obs = createPairObserver(pair, bracket[i + 1][Math.floor(j/2)]);
                pair.subscribeTourObservers(obs);
                unsub.push(() => {
                    pair.unsubscribeTourObservers(obs)
                });
            })
        })
        return function cleanup() {
            unsub.forEach(u => u());
        }
    }

    createFirstTour(players);
    fillEmptiness(bracket);
    subscribeCascade(bracket);

    return bracket;
}



