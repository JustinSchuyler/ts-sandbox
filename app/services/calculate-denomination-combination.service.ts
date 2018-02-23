import { DenominationCombination } from '../interfaces/denomination-combination.interface';
import { DenominationValues } from '../interfaces/denomination-values.interface';

export function calculateDenominationCombination(coins: DenominationValues, total: number): DenominationCombination {
    let highCoinCount = Math.floor(total / coins.high) - 1;
    let midCoinCount = 0;
    let lowCoinCount = 0;
    let remainingTotal = total - (highCoinCount * coins.high);

    if (remainingTotal % coins.high == 0) {
        highCoinCount += 1;
    }
    if (remainingTotal % (2 * coins.low) == 0) {
        lowCoinCount += 2;
    }
    if (remainingTotal % (coins.low + coins.mid) == 0) {
        lowCoinCount += 1;
        midCoinCount += 1;
    }
    if (remainingTotal % (2 * coins.mid) == 0) {
        midCoinCount += 2;
    }
    if (remainingTotal % (coins.low + coins.high) == 0) {
        lowCoinCount += 1;
        highCoinCount += 1;
    }
    if (remainingTotal % (coins.mid + coins.high) == 0) {
        midCoinCount += 1;
        highCoinCount += 1;
    }
    if (remainingTotal % ((2 * coins.low) + coins.mid) == 0) {
        lowCoinCount += 2;
        midCoinCount += 1;
    }

    return {
        lowCoinCount,
        midCoinCount,
        highCoinCount
    };
}
