// let {log} = console

describe('app button', () => {
    it('visit button', () => {
        cy.visit('/Button')
        // cy.visit('http://localhost:8088/Button')
    })
    
    it('size large', () => {
        // 测试页面中所有示例
        // cy.get('.ca-button--large').each(($el, index, $list) => {
        //     // cy.wrap($jQuery) => 可链式调用的cy对象。
        //     cy.wrap($el).should('have.css', 'padding', '11px 16px');
        // });
        // 测试页面中第一个示例
        cy.get('.ca-button--large').first().should('have.css', 'padding', '11px 16px');
    });
    it('size medium', () => {
        // 测试页面中第一个示例
        cy.get('.ca-button--medium').first().should('have.css', 'padding', '9px 14px');
    });
    it('size small', () => {
        // 测试页面中第一个示例
        cy.get('.ca-button--small').first()
            .should('have.css', 'padding', '8px 12px')
            .should('have.css', 'font-size', '12px');
    });
    it('bg', () => {
        cy.fixture('type.json').should(types => {
            Object.entries(types).forEach(([key, value]) => {
                cy.get(`.ca-button--${key}`).first().should('css', 'background-color', value)
            })
        })
    });
    it('focus', () => {
        cy.get('[autofocus]').should('have.length', 1)
        cy.focused().should('length', 1);
        cy.focused().should('attr', 'autofocus');
    })
})