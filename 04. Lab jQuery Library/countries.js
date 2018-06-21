function initializeTable() {
    $('#createLink').on('click', createCountry)
    addCountryToTable('Bulgaria', 'Sofia')
    addCountryToTable('Germany', 'Berlin')
    addCountryToTable('Russia', 'Moscow')
    hideButton()

    function addCountryToTable(country, town) {
        let tr = $('<tr>')
            .append(`<td>${country}</td>`)
            .append(`<td>${town}</td>`)
            .append($('<td>')
                .append($('<a href="#">[Up]</a>')
                    .on('click', moveUp))
            .append($('<a href="#">[Down]</a>')
                .on('click', moveDown))
            .append($('<a href="#">[Delete]</a>')
                .on('click', deleteRow))
            )
        tr.css('display', 'none')
        $('#countriesTable').append(tr)
        tr.fadeIn()
    }

    function createCountry() {
        let country = $('#newCountryText')
        let capital = $('#newCapitalText')
        addCountryToTable(country.val(), capital.val())
        country.val('')
        capital.val('')
        hideButton()
    }

    function moveUp() {
        let row = $(this).parent().parent()
        row.fadeOut(function () {
            row.insertBefore(row.prev())
            hideButton()
            row.fadeIn()
        })
    }

    function moveDown() {
        let row = $(this).parent().parent()
        row.fadeOut(function () {
            row.insertAfter(row.next())
            hideButton()
            row.fadeIn()
        })
    }

    function deleteRow() {
        $(this).fadeOut(function () {
            $(this).parent().parent().remove()
            hideButton()
        })
    }

    function hideButton() {
        $('#countriesTable a').css('display', '')
        $('#countriesTable tr:eq(2) a:contains("Up")')
            .css('display', 'none')
        $('#countriesTable tr:last a:contains("Down")')
            .css('display', 'none')
    }
}