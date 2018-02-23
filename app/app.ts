import { calculateDenominationCombination } from './services/calculate-denomination-combination.service';
import { DenominationCombination } from './interfaces/denomination-combination.interface';
import { DenominationValues } from './interfaces/denomination-values.interface';

const total: number = 3189;
const coins: DenominationValues = {
    low: 4,
    mid: 5,
    high: 7
};

let result = calculateDenominationCombination(coins, total);
console.log('total:', total);
console.log('result:', result);
