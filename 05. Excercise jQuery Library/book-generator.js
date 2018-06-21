(function createBook(selector, title, author, ISBN) {
    let bookGenerator = (function () {
        let id = 1
        return function (selector, title, author, ISBN) {
            $(selector).append($('<div>').attr('id', 'book' + id)
                .append($('<p>').addClass('title').text(title))
                .append($('<p>').addClass('author').text(author))
                .append($('<p>').addClass('isbn').text(ISBN))
                .append($('<button>').text('Select').on('click', selected))
                .append($('<button>').text('Deselect').on('click', deselected)))

            function selected() {
                $(this).parent().css('border', '2px solid blue')
            }

            function deselected() {
                $(this).parent().css('border', '')
            }
            id++
        }
    }
bookGenerator(selector, title, author, ISBN)
}())