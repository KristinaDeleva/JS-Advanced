function validate() {
    $('#company').on('change', showHideCompany)

    $('#submit').on('click', function (ev) {
        ev.preventDefault()
        let userNameReg = /^[a-zA-Z0-9]{3,20}$/
        let passwordReg = /^\w{5,15}$/
        let emailRgx = /^.*?@.*?\..*$/
        let companyNumRgx = /^[1-9]{1}[0-9]{3}$/

        let allFieldsValid = true

        if ($('#username').val().match(userNameReg)){
            $('#username').css('border', 'none')
        }else {
            $('#username').css('border-color', 'red')
            allFieldsValid = false
        }

        if ($('#password').val().match(passwordReg)){
            $('#password').css('border', 'none')
        }else {
            $('#password').css('border-color', 'red')
            allFieldsValid = false
        }

        if ($('#email').val().match(emailRgx)){
            $('#email').css('border', 'none')
        }else {
            $('#email').css('border-color', 'red')
            allFieldsValid = false
        }

        if ($('#confirm-password').val().match(passwordReg) && $('#confirm-password').val().localeCompare($('#password').val()) === 0){
            $('#confirm-password').css('border', 'none')
        }else {
            $('#confirm-password').css('border-color', 'red')
            allFieldsValid = false
        }

        if ($('#company').is(':checked')){
            if ($('#companyNumber').val().match(companyNumRgx)){
                $('#companyNumber').css('border', 'none')
            } else {
                $('#companyNumber').css('border-color', 'red')
                allFieldsValid = false
            }
        }

        if (allFieldsValid){
            $('#valid').css('display', 'block')
        }else {
            $('#valid').css('display', 'none')
        }
    })

    function showHideCompany() {
        if ($(this).is(':checked')){
            $('#companyInfo').css('display', 'block')
        }else {
            $('#companyInfo').css('display', 'none')
        }
    }
}