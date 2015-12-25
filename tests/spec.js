//Test cases

describe('Cost Consultants website', function () {

    beforeEach(function () {
        browser.get('http://localhost:3000');
    });

    it('should have a title', function(){
        expect(browser.getTitle()).toEqual('Cost Consultants');
    });
/*
    /* Nav Links */

    it('should load navigation links', function () {
        element(by.css('.md-sidenav-left')).all(by.tagName('h3'))
            .get(0)
            .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/');
    });

    it('should load navigation links', function () {
        element(by.css('.md-sidenav-left')).all(by.tagName('h3'))
            .get(1)
            .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/about');
    });

    it('should load navigation links', function () {
        element(by.css('.md-sidenav-left')).all(by.tagName('h3'))
            .get(2)
            .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/contact');
    });

    it('should load navigation links', function () {
        element(by.css('.md-sidenav-left')).all(by.tagName('h3'))
            .get(3)
            .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/info');
    });

    /* Test Form */
    it('should allow form input and validate', function () {
        browser.get('http://localhost:3000/contact');
        element(by.id('contact')).all(by.tagName('input'))
            .get(0)
            .click()
            .sendKeys('Protractor Form Test');
        element(by.id('contact')).all(by.tagName('input'))
            .get(1)
            .click()
            .sendKeys('test@example.com');
        element(by.id('contact')).all(by.tagName('input'))
            .get(2)
            .click()
            .sendKeys('999-999-9999');
        element(by.id('contact')).all(by.tagName('input'))
            .get(3)
            .click()
            .sendKeys('Protractor Test');
        element(by.id('contact')).all(by.tagName('input'))
            .get(4)
            .click()
            .sendKeys('Orlando Test');
        element(by.id('contact')).all(by.tagName('input'))
            .get(5)
            .click()
            .sendKeys('32223');
        element(by.id('contact')).all(by.tagName('input'))
            .get(6)
            .click()
            .sendKeys('This is a test from Protractor');
        element(by.id('contact'))
            .element(by.tagName('md-datepicker'))
            .click()
            .sendKeys('12/12/2016');
        element(by.tagName('form'))
            .element(by.id('submitBtn'))
            .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/thanks');
    });

}); //End main test function