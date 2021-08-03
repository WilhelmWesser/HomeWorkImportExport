import {Settings} from "../core/constants/settings";
export default class DonateList {
    #donateList;
    #donates;
    constructor(donates) {
        this.#donateList = document.createElement('div');
        this.#donateList.className = 'donates-container';
        this.#donates = donates;
    };

    #createDonateShell(donutToPerform, wrap) {
        const donutShell = document.createElement('div');
        donutShell.className = 'donate-item';
        donutShell.textContent = `${donutToPerform.date} - `;
        const boldAmount = document.createElement('b');
        boldAmount.textContent = `${donutToPerform.amount}${Settings.currency}`;
        donutShell.append(boldAmount);
        wrap.append(donutShell);
    };

    render() {
        const textHeading = document.createElement('h2');
        textHeading.className = 'donates-container__title';
        textHeading.textContent = 'Список донатов';

        const donatesWrap = document.createElement('div');
        donatesWrap.className = 'donates-container__donates';

        this.#donates.forEach((donut) => {
            this.#createDonateShell(donut, donatesWrap);
        })

        this.#donateList.append(textHeading, donatesWrap);
        return this.#donateList;
    };

    updateDonates(updatedDonates) {
        const list = document.querySelector('.donates-container__donates');
        list.innerHTML = '';
        updatedDonates.forEach((updatedDonate) => {
            this.#createDonateShell(updatedDonate, list);
        });

    };
}