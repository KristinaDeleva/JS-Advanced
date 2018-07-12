let result = (function() {

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
    class Form {
        constructor(){
            this._elements = $('<div>').addClass('form')
            this.textboxes = arguments
        }

        get textboxes(){
            return this._textboxes
        }

        set textboxes(arg){
            for (let argument of arg) {
                if (!argument instanceof Textbox){
                    throw new Error("The give parameter is not a textbox!")
                }
            }
            this._textboxes = arg
            for (let textbox of this._textboxes) {
                for (let el of textbox._elements) {
                    this._elements.append($(el))
                }
            }
        }

        submit(){
            let allValid = true
            for (let textbox of this._textboxes) {
                if(textbox.isValid()){
                    for (let el of textbox._elements) {
                        $(el).css('border', '2px solid green')
                    }
                }else {
                    for (let el of textbox._elements) {
                        $(el).css('border', '2px solid red')
                    }
                    allValid = false
                }
            }
            return allValid
        }

        attach(selector){
            $(selector).append(this._elements)
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    }
}());

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username",/[^a-zA-Z0-9]/);
let password = new Textbox("#password",/[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username,password);
form.attach("#root");
