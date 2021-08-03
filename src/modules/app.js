import DonateForm from "./donate-form";
import DonateList from "./donate-list";
import * as Utils from "../../src/core/utils/index";
export default class App {
    #inputForm;
    #donateList;
    #mockDonates;
    constructor() {
        this.#mockDonates  = [
            { amount: 4, date: Utils.getFormattedTime() },
            { amount: 20, date: Utils.getFormattedTime() },
            { amount: 3, date: Utils.getFormattedTime() },
            { amount: 1, date: Utils.getFormattedTime() },
        ];
        const sum = Utils.calculateSumOfNumbers(this.#mockDonates.map((donation) => donation.amount));
        this.state = {
            donates: [...this.#mockDonates],
            totalAmount: sum
        };

        this.#inputForm = new DonateForm(this.state.totalAmount, this.createNewDonate, this);

        this.#donateList = new DonateList(this.#mockDonates, this.state.donates);


    };

    run() {
        const formToDonateMoney = this.#inputForm.render();
        document.body.textContent = 'Hello World!';
        document.body.append(formToDonateMoney);

        const donatesListToInsert = this.#donateList.render();
        document.body.append(donatesListToInsert);
    };

    createNewDonate(newDonate) {
        this.state.donates.unshift(newDonate);
        this.state.totalAmount += newDonate.amount;
        this.#donateList.updateDonates(this.state.donates);
        this.#inputForm.updateTotalAmount(this.state.totalAmount);
        document.querySelector('.donate-form__donate-input').textContent = '';
    };

}