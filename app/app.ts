import { calculateDenominationCombination } from './services/calculate-denomination-combination.service';
import { DenominationCombination } from './interfaces/denomination-combination.interface';
import { DenominationValues } from './interfaces/denomination-values.interface';

const total: number = 3189;
const coins: DenominationValues = {
    high: 7,
    mid: 5,
    low: 4
};

let results = calculateDenominationCombination(coins, total);
if (results) {
    console.log(`To add up to $${total}, you will need...`);
    console.log(` ${results.high.count} coins worth $${results.high.value}`);
    console.log(` ${results.mid.count} coins worth $${results.mid.value}`);
    console.log(` ${results.low.count} coins worth $${results.low.value}`);
}