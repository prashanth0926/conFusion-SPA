'use strict';

describe('conFusion App E2E Testing1', function() {

    describe('menu 2 item', function() {
    beforeEach(function() {
        browser.get('index.html#/menu/2');
    });
        
        it('should have date Dec. 25, 2011', function(){
            element(by.model('srtText')).sendKeys('date');  
            var date = element.all(by.repeater('cmnt in dish.comments'))
                        .first().element(by.binding('cmnt.date'));
            
            expect(date.getText()).toContain('Dec. 2, 2011');
        });
        
        it('should submit comment into dishes object', function(){
            element(by.model('mycomment.author')).sendKeys('Jay');  
            element(by.model('mycomment.comment')).sendKeys('Excellent Dish! I am loving it.');
            
            element(by.buttonText('Send Feedback')).click();
            
            expect(element.all(by.repeater('cmnt in dish.comments'))
                   .count()).toEqual(8);
            
            element(by.model('srtText')).sendKeys('-date');  
            var author = element.all(by.repeater('cmnt in dish.comments'))
                            .first().element(by.binding('cmnt.author'));
            
            expect(author.getText()).toContain('Naidu');
        });
        
    });
    
});