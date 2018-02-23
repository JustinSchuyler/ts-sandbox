import { DenominationCombination } from '../interfaces/denomination-combination.interface';
import { DenominationValues } from '../interfaces/denomination-values.interface';

export function calculateDenominationCombination(coins: DenominationValues, total: number): DenominationCombination {
    if (total < 7) {
        console.log('The government has mandated that all purchases must be at least $0.07');
        return null;
    }

    let combos = {
        high: { value: coins.high, count: Math.floor(total / coins.high) - 1 },
        mid: { value: coins.mid, count: 0 },
        low: { value: coins.low, count: 0 }
    };
    let remainingTotal = total - (combos.high.count * combos.high.value);
    
    while (remainingTotal > 0) {
        let highRemainder = remainingTotal % combos.high.value;
        let highMidRemainder = highRemainder % combos.mid.value;
        let highLowRemainder = highRemainder % combos.low.value;
        
        if (highRemainder == 0) {
            combos.high.count++;
            remainingTotal -= combos.high.value;
        }
        else if (highMidRemainder > highLowRemainder) {
            combos.low.count++;
            remainingTotal -= combos.low.value;
        }
        else if (highMidRemainder < highLowRemainder) {
            combos.mid.count++;
            remainingTotal -= combos.mid.value;
        }
        else {
            let midPathTotal = remainingTotal - combos.mid.value;
            let lowPathTotal = remainingTotal - combos.low.value;
            let midPathRemainder = midPathTotal % combos.mid.value;
            let lowPathRemainder = lowPathTotal % combos.low.value;

            if (midPathRemainder > lowPathRemainder) {
                combos.low.count++;
                remainingTotal -= combos.low.value;
            }
            else {
                combos.mid.count++;
                remainingTotal -= combos.mid.value;
            }
        }
    }
    
    return combos;
}
