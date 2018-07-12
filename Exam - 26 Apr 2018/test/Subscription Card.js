let expect = require('chai').expect
let SubscriptionCard = require('../02. Subscription Card')

describe('SubscriptionCard', function () {
    describe('Constructor', function () {
        it('should be initialization correctly', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card.firstName).to.equal('Pesho')
            expect(card.lastName).to.equal('Petrov')
            expect(card.SSN).to.equal('00000000')
        });
    })
    describe('isBlocked test', function () {
        it('should return false for new object', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card.isBlocked).to.equal(false)
        });
        it('should return true for blocked card', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.block()
            expect(card.isBlocked).to.equal(true)
        });
        it('should return false for blocked card and unblocked card', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.block()
            card.unblock()
            expect(card.isBlocked).to.equal(false)
        });
        it('should return true for unblocked card andblocked card', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.unblock()
            card.block()
            expect(card.isBlocked).to.equal(true)
        });
    })
    describe('addSubscription test', function () {
        it('should return correct subscriptions', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card._subscriptions.length).to.equal(0)
            expect(card._subscriptions[0]).to.equal(undefined)
            expect(card._subscriptions).to.be.eql([])
        });
        it("Add correctly subscription", function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card._subscriptions.length).to.be.equal(1)
            expect(card._subscriptions[0].line).to.be.equal("120")
            expect(card._subscriptions[0].startDate).to.be.eql(new Date('2018-04-22'))
            expect(card._subscriptions[0].endDate).to.be.eql(new Date('2018-05-21'))
        });
        it("Add two correctly subscriptions", function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
            expect(card._subscriptions.length).to.be.equal(2)
            expect(card._subscriptions[0].line).to.be.equal("120")
            expect(card._subscriptions[0].startDate).to.be.eql(new Date('2018-04-22'))
            expect(card._subscriptions[0].endDate).to.be.eql(new Date('2018-05-21'))
            expect(card._subscriptions[1].line).to.be.equal('*')
            expect(card._subscriptions[1].startDate).to.be.eql(new Date('2018-05-25'))
            expect(card._subscriptions[1].endDate).to.be.eql(new Date('2018-06-24'))
        });
    })
    describe('isValid, test', function () {
        it('empty card', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            expect(card.isValid('120', new Date('2018-04-22'))).to.be.equal(false)
        });
        it('one day before', function () {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('120', new Date('2018-04-21'))).to.be.equal(false)
        });
        it("one day after", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('120', new Date('2018-05-22'))).to.be.equal(false)
        })
        it("on start date", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('120', new Date('2018-04-22'))).to.be.equal(true)
        })
        it("on end date", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('120', new Date('2018-05-21'))).to.be.equal(true)
        })
        it("On start date", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('121', new Date('2018-04-25'))).to.be.equal(false)
        })
        it("On start date", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('12112323', new Date('2018-04-25'))).to.be.equal(true)
        })
        it("On start date", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('12112323', new Date('2018-04-22'))).to.be.equal(true)
        })
        it("On end date", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('12112323', new Date('2018-05-21'))).to.be.equal(true)
        })
        it("One day before", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('12112323', new Date('2018-04-21'))).to.be.equal(false)
        })
        it("One day after", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('12112323', new Date('2018-05-22'))).to.be.equal(false)
        })
        it("Blocked card", function() {
            const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            card.block()
            expect(card.isValid('120', new Date('2018-04-24'))).to.be.equal(false)
        })
    })

    it('should not change', function () {
        const card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
        card.firstName = 'Test'
        card.lastName = 'Test'
        card.SSN = 'Test'
        expect(card.firstName).to.be.equal('Pesho')
        expect(card.lastName).to.be.equal('Petrov')
        expect(card.SSN).to.be.equal('00000000')
    });
});