class Input {
    constructor(id, name, label, inputType = 'text', defaultValue, placeholder, isVisible = true, visiblilityIsChangeable = true) {
        this.id = id;
        this.label = label;
        this.name = name;
        this.inputType = inputType;
        this.defaultValue = defaultValue;
        this.placeholder = placeholder;
        this.isVisible = isVisible;
        this.visiblilityIsChangeable = visiblilityIsChangeable;
    }
    makeInput = () => {
        const input = document.createElement('div');
        if(this.isVisible) {
            input.appendChild(this.labelElement());
            input.appendChild(this.inputElement());
            input.appendChild(this.makeButton('remove'));
        } else {
            input.appendChild(this.makeButton('add'));
        }
        return input;
    }
    labelElement = () => {
        const labelElement = document.createElement('label');
            labelElement.textContent = this.label;
            labelElement.for = this.id;
        return labelElement;
    }
    inputElement = () => {
        const inputElement = document.createElement('input');
            inputElement.id = this.id;
            inputElement.type = this.inputType;
            inputElement.name = this.name;
            inputElement.value = this.defaultValue;
            inputElement.placeholder = this.placeholder;
        return inputElement;
    }
    makeButton = (buttonAction) => {
        const button = document.createElement('button')
            button.type = 'button';
        if(!buttonAction) console.error(`The #${this.id} button needs an action.`);
        if(buttonAction === 'remove') {
            button.onclick = () => {
                this.isVisible = false;
                console.log(this.isVisible)
                this.loadInput();
            }
        } else if(buttonAction === 'add') {
            button.onclick = () => {
                this.isVisible = true;
                this.loadInput();
            }
        }
        return button;
    }
}