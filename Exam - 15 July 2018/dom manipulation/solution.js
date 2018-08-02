function addSticker() {
    let titleInput = $('input[class="title"]')
    let titleContent = $('input[class="content"]')
    let input = titleInput.val()
    let content = titleContent.val()
    if (input !== '' && content !== '') {
        let stickerList = $('#sticker-list')
        stickerList.append($('<li>').addClass('note-content'))
        let classContent = $('.note-content')
        classContent
            .append($('<a>').addClass('button').text('x'))
        $('.button').on('click', function () {
            $('#sticker-list').remove()
        })
        classContent.append($('<h2>').text(input))
            .append($('<hr>'))
            .append($('<p>').text(content))
        input = titleInput.val('')
        content = titleContent.val('')
    }
}