import * as _ from 'lodash';

const highCoin: number = 7;
const midCoin: number = 5;
const lowCoin: number = 4;
const minimumPurchase: number = 7;
let totals: number[] = _.range(minimumPurchase, 21);

totals.map(total => {
    let highCoinCount = Math.floor(total / highCoin) - 1;
    let midCoinCount = 0;
    let lowCoinCount = 0;
    let remainingTotal = total - (highCoinCount * highCoin);

    if (remainingTotal % highCoin == 0) {
        highCoinCount += 1;
    }
    if (remainingTotal % (2 * lowCoin) == 0) {
        lowCoinCount += 2;
    }
    if (remainingTotal % (lowCoin + midCoin) == 0) {
        lowCoinCount += 1;
        midCoinCount += 1;
    }
    if (remainingTotal % (2 * midCoin) == 0) {
        midCoinCount += 2;
    }
    if (remainingTotal % (lowCoin + highCoin) == 0) {
        lowCoinCount += 1;
        highCoinCount += 1;
    }
    if (remainingTotal % (midCoin + highCoin) == 0) {
        midCoinCount += 1;
        highCoinCount += 1;
    }
    if (remainingTotal % ((2 * lowCoin) + midCoin) == 0) {
        lowCoinCount += 2;
        midCoinCount += 1;
    }

    let results = { total, lowCoinCount, midCoinCount, highCoinCount };
    console.log('original total:', total);
    console.log('remaining total:', remainingTotal);
    console.log('results:', results);
    console.log('---');
});
