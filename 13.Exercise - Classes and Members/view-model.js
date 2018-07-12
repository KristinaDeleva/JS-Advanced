class Textbox {
    constructor(selector, regex){
        this._elements = $(selector)
        this.value = $(this._elements[0]).val()
        this._invalidSymbols = regex
        this.onInput()
    }

    onInput(){
        this.elements.on('input', (event) => {
            let text = $(event.target).val()
            this.value = text
        })
    }
    get value(){
        return this._value
    }

    set value(v){
        this._value = v
        for (let el of this.elements) {
            $(el).val(v)
        }
    }

    get elements(){
        return this._elements
    }

    isValid(){
        return ! this.value.match(this._invalidSymbols);
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = $('.textbox');
inputs.on('input',function(){console.log(textbox.value);});
