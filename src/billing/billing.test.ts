import {PackageType} from "./packageType";
import {Transaction} from "./transaction";
import {Billing} from "./billing";

describe('billing', ()=> {
    // it('should calculate monthly fee', ()=> {
    //     //package type
    //     const packageType = PackageType.BASIC;
    //     //transactions
    //     const transactions = [
    //      new Transaction(new Date("2020-01-01 00:09:00"), new Date("2020-01-01 00:09:01")),
    //         new Transaction(new Date("2020-01-01 00:09:30"), new Date("2020-01-01 00:09:31"),
    //     ];
    //     //billing
    //     const billing = new Billing(packageType, transactions);
    //
    //     //when
    //     const monthlyFee = billing.calculateMonthlyFee();
    //     //then
    //     expect(monthlyFee).toBe(2);
    // });
});
    describe('calculate Basic Package billing monthly fee', ()=> {
        const packageType = PackageType.BASIC;

        beforeEach(() => {
        });

        it('should return 0 THB when no transaction', () => {
            //given
            const transaction: Transaction[] = [];
            const billing = new Billing(packageType, transaction);
            // when
            const monthlyFee = billing.calculateMonthlyFee();
            expect(monthlyFee).toBe(0);
        });

        it('should return 1THB when call 1 minute of 1 transaction', () => {
            const packageType = PackageType.BASIC;
            const transaction: Transaction[] = [
                new Transaction(new Date("2020-01-01 00:00:00"), new Date("2020-01-01 00:01:00"))
            ];
            const billing = new Billing(packageType, transaction);
            // when
            const monthlyFee = billing.calculateMonthlyFee();
            expect(monthlyFee).toBe(1);
        });

        it('should return 2THB when call 2 minutes of transaction.', () => {
            const packageType = PackageType.BASIC;
            const transaction: Transaction[] = [
                new Transaction(new Date("2020-01-01 00:00:00"), new Date("2020-01-01 00:02:00"))
            ];
            const billing = new Billing(packageType, transaction);
            // when
            const monthlyFee = billing.calculateMonthlyFee();
            expect(monthlyFee).toBe(2);
        });
    })
