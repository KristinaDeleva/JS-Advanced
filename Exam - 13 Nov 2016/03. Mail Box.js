class MailBox {
    constructor(mailBox){
        this.mailBox = []
    }

    addMessage(subject, text){
        this.mailBox.push({subject, text})
        return this
    }

    get messageCount() {
        return this.mailBox.length
    }

    deleteAllMessages(){
        this.mailBox = []
    }

    findBySubject(substr){
        return this.mailBox.filter(m => m.subject.includes(substr))
    }

    toString() {
        if (this.mailBox.length > 0){
            return this.mailBox.map(m => ` * [${m.subject}] ${m.text}`).join('\n')
        }else {
            return ' * (empty mailbox)'
        }
    }
}