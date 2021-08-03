import {Settings as settings} from "../core/constants/settings";
import {getFormattedTime} from "../core/utils";
export default class DonateForm {
    #donateForm;
    #totalAmount;
    constructor(totalAmount, callBack, self) {
        this.createNewDonate = callBack.bind(self);

        this.#donateForm = document.createElement('form');
        this.#donateForm.className = 'donate-form';

        this.#totalAmount = totalAmount;

        this.#donateForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const newDonate = {
                date: getFormattedTime(),
                amount: Number(document.querySelector('.donate-form__donate-input').value)
            };
            console.log(document.querySelector('.donate-form__donate-input').value);
            this.createNewDonate(newDonate);
        });


    };


    render() {
        const headingText = document.createElement('h1');
        headingText.id = 'total-amount';
        headingText.textContent = `${this.#totalAmount}${settings.currency}`;

        const inputLabel = document.createElement('label');
        inputLabel.className = 'donate-form__input-label';
        inputLabel.textContent = `Введите сумму в ${settings.currency}`;

        const input = document.createElement('input');
        input.className = 'donate-form__donate-input';
        input.name = 'amount';
        input.type = 'number';
        input.max = '100';
        input.min = '0';
        input.setAttribute('required', '');

        const donateButton = document.createElement('button');
        donateButton.className = 'donate-form__submit-button';
        donateButton.type = 'submit';
        donateButton.textContent = 'Задонатить';

        inputLabel.append(input);
        this.#donateForm.append(headingText, inputLabel, donateButton);


        return this.#donateForm;
    };

    updateTotalAmount(newAmount) {
        const totalAmountDOMElement = document.querySelector('#total-amount');
        totalAmountDOMElement.textContent = `${newAmount}${settings.currency}`;
    };
}