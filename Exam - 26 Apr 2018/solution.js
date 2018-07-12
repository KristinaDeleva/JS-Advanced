class PublicTransportTable {
    constructor(townName) {
        this.changeName(townName)
        this.addEventListener()
    }

    changeName(name){
        $('caption').text(`${name}'s Public Transport`)
    }

    addVehicle(obj){
        let tr = $(`<tr><td>${obj.type}</td><td>${obj.name}</td>`)
        let button = $('<td><button>More Info</button></td>')
        let trExtra = $('<tr class="more-info"><td colspan="3"><table><tr>' +
        `<td>Route: ${obj.route}</td></tr><tr><td>Price: ${obj.price}</td></tr>` +
        `<tr><td>Driver: ${obj.driver}</td></tr></table></td></tr>`)

        button.on('click', function (event) {
            if ($(event.target).text() === 'More Info') {
                $(event.target).text('Less Info')
                trExtra.insertAfter(tr)
            }else {
                $(event.target).text('More Info')
                trExtra.remove()
            }
        })
        tr.append(button)
        $('.vehicles-info').append(tr)
    }

    addEventListener(){
        $('.search-btn').on('click', function () {
            let inputType = $('input[name="type"]')
            let inputName = $('input[name="name"]')
            let type = inputType.val()
            let name = inputName.val()

            if (name || type){
                let rows = $('.vehicles-info > tr').not('.more-info')
                for (let i = 0; i < rows.length; i++) {
                    let firstChild = $(rows[i]).find('td').eq(0)
                    let secondChild = $(rows[i]).find('td').eq(1)
                    if (!firstChild.text().includes(type) || !secondChild.text().includes(name)){
                        $(rows[i]).css('display', 'none')
                        let button = $(rows[i]).find('td').eq(2).find('button')
                        if (button.text() === 'Less Info'){
                            button.click()
                        }
                    }else {
                        $(rows[i]).css('display', '')
                    }
                }
            }
        })

        $('.clear-btn').on('click', function () {
            let inputType = $('input[name="type"]').val('')
            let inputName = $('input[name="name"]').val('')
            let rows = $('.vehicles-info > tr')
            for (let i = 0; i < rows.length; i++) {
                $(rows[i]).css('display', '')
            }
        })
    }
}