function increment(selector) {
    let input = $(selector)
    let fragment = document.createDocumentFragment()
    let text = $('<textarea>')
    let incrementBtn = $('<button>Increment</button>')
    let addBtn = $('<button>Add</button>')
    let list = $('<ul>')

    //Text formatting
    text.val(0)
    text.addClass('counter')
    text.attr('disabled', true)

    //Button formatting
    incrementBtn.addClass('btn')
    incrementBtn.attr('id', 'incrementBtn')
    addBtn.addClass('btn')
    addBtn.attr('id', 'addBtn')

    //List formatting
    list.addClass('results')

    //Events
    $(incrementBtn).on("click", function () {
        text.val(+text.val() + 1)
    })
    $(addBtn).on("click", function () {
        let li = $(`<li>${text.val()}</li>`)
        li.appendTo(list)
    })

    text.appendTo(fragment)
    incrementBtn.appendTo(fragment)
    addBtn.appendTo(fragment)
    list.appendTo(fragment)

    input.append(fragment)
}