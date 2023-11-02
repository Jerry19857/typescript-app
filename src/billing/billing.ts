import {PackageType} from "./packageType";
import {Transaction} from "./transaction";

export class Billing{
    constructor(
       public readonly packageType: PackageType,
       public readonly transaction: Transaction[]
    ) { }

    calculateMonthlyFee(): number {
        if (this.transaction.length === 0) {
            return 0
        }
        const transaction = this.transaction[0]
        const diff= transaction.endTime.getTime() - transaction.startTime.getTime();

        const diffTimeInMinute = diff / 1000 / 60;
        return diffTimeInMinute;
    }
}