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
        element(by.css('.md-sidenav-left')).all(by.tagName('h3'))
            .get(2)
            .click();
        element(by.id('contact')).all(by.tagName('input'))
            .get(0)
            .sendKeys('Protractor Form Test');
        element(by.id('contact')).all(by.tagName('input'))
            .get(1)
            .sendKeys('test@example.com');
        element(by.id('contact')).all(by.tagName('input'))
            .get(2)
            .sendKeys('999-999-9999');
        element(by.id('contact')).all(by.tagName('input'))
            .get(3)
            .sendKeys('Protractor Test');
        element(by.id('contact')).all(by.tagName('input'))
            .get(4)
            .sendKeys('Orlando Test');
        element(by.id('contact')).all(by.tagName('input'))
            .get(5)
            .sendKeys('32223');
        element(by.id('contact')).all(by.tagName('input'))
            .get(6)
            .sendKeys('This is a test from Protractor');
        element(by.id('contact'))
            .element(by.tagName('md-datepicker'))
            .click()
            .sendKeys('12/12/2016');
    });

}); //End main test function