describe('Проверка покупки нового аватара', function () {
    it('e2e тест на покупку нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.ru/');
         cy.get('input[id="k_email"]').type('LOGIN');
         cy.get('input[id="k_password"]').type('PASSWORD');
         cy.get('button[type="submit"]').click();
         cy.wait(2000);
         cy.get('.header_card_trainer').click();
         cy.wait(2000);
         cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click();
         cy.get('.available > button').first().click();
         cy.get('.card_number').type('4620869113632996', { delay: 120 });
         cy.get('.card_date').type('12/26', { delay: 120 });
         cy.get('.card_csv').type('125', { delay: 120 });
         cy.get('.card_name').type('NAME');
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
         cy.get('.threeds_number').type('56456');
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
         cy.contains('Покупка прошла успешно').should('be.visible');
     });
 });
 //npx cypress run --headed --spec cypress/e2e/pokemons_buy_avatar.cy.js --browser chrome