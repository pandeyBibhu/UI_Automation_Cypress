/// <reference types="cypress" />
describe('Checkbox Tests', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it.skip('Verify checkbox header', () => {
        cy.visit('/AutomationPractice/');
        cy.get('fieldset:has(#checkBoxOption1) > legend').invoke('text').then((text) => {
            cy.log(text);
            expect(text.trim()).to.equal('Checkbox Example');
        })
    })
    it.skip('Verify Option1 checkbox is visible', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption1').should('be.visible');

    })
    it.skip('Verify Option2 checkbox is visible', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption2').should('be.visible');

    })
    it.skip('Verify Option3 checkbox is visible', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption3').should('be.visible');

    })
    it.skip('Verify Option1 checkbox is enabled', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption1').should('be.enabled');
    })
    it.skip('Verify Option2 checkbox is enabled', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption2').should('be.enabled');
    })
    it.skip('Verify Option3 checkbox is enabled', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption3').should('be.enabled');
    })
    it.skip('Verify default state of checkboxes', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption1').should('not.be.checked');
        cy.get('#checkBoxOption2').should('not.be.checked');
        cy.get('#checkBoxOption3').should('not.be.checked');
    })
    it.skip('Select Option1 ', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption1').check().should('be.checked');
    })
    it.skip('Select Option2 ', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption2').check().should('be.checked');
    })
    it.skip('Select Option3 ', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption3').check().should('be.checked');
    })
    it.skip('Deselect Option1 ', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption1').check().should('be.checked');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
    })
    it.skip('Deselect Option2 ', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption2').check().should('be.checked');
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked');
    })
    it.skip('Deselect Option3 ', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption3').check().should('be.checked');
        cy.get('#checkBoxOption3').uncheck().should('not.be.checked');
    })
    it.skip('Verify toggle functionality of checkboxes', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption1').check().should('be.checked');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        cy.get('#checkBoxOption2').check().should('be.checked');
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked');
        cy.get('#checkBoxOption3').check().should('be.checked');
        cy.get('#checkBoxOption3').uncheck().should('not.be.checked');
    })
    it.skip('check if checkboxes selected then deselect or if not selected then select', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption1').then(($checkbox1) => {
            if ($checkbox1.is(':checked')) {
                cy.wrap($checkbox1).uncheck().should('not.be.checked');
            } else {
                cy.wrap($checkbox1).check().should('be.checked');
            }
        });
    });

    it('Select Option1 and Option2', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption1').check();
        cy.get('#checkBoxOption2').check();
        cy.get('#checkBoxOption1').should('be.checked');
        cy.get('#checkBoxOption2').should('be.checked');
        cy.get('#checkBoxOption3').should('not.be.checked');
    })

    it('Select Option1 and Option3', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption1').check();
        cy.get('#checkBoxOption3').check();
        cy.get('#checkBoxOption1').should('be.checked');
        cy.get('#checkBoxOption3').should('be.checked');
        cy.get('#checkBoxOption2').should('not.be.checked');
    })

    it('Select Option2 and Option3', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption2').check();
        cy.get('#checkBoxOption3').check();
        cy.get('#checkBoxOption2').should('be.checked');
        cy.get('#checkBoxOption3').should('be.checked');
        cy.get('#checkBoxOption1').should('not.be.checked');
    })

    it('Click selected checkbox again', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption1').check().click().should('not.be.checked');
    })

    it('Verify checkbox independence', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption1').check();
        cy.get('#checkBoxOption1').should('be.checked');
        cy.get('#checkBoxOption2').should('not.be.checked');
        cy.get('#checkBoxOption3').should('not.be.checked');
        cy.get('#checkBoxOption2').check();
        cy.get('#checkBoxOption1').should('be.checked');
        cy.get('#checkBoxOption2').should('be.checked');
        cy.get('#checkBoxOption3').should('not.be.checked');
    })

    it('Verify checkbox label text', () => {
        cy.visit('/AutomationPractice/');
        cy.get('fieldset:has(#checkBoxOption1) label').should('have.length', 3);
        cy.get('fieldset:has(#checkBoxOption1) label').then(($labels) => {
            const labels = [...$labels].map((label) => label.textContent.trim());
            expect(labels).to.include.members(['Option1', 'Option2', 'Option3']);
        });
    })

    it('Click Option1 label', () => {
        cy.visit('/AutomationPractice/');
        cy.get('label:has(#checkBoxOption1)').click();
        cy.get('#checkBoxOption1').should('be.checked');
    })

    it('Click Option2 label', () => {
        cy.visit('/AutomationPractice/');
        cy.get('label:has(#checkBoxOption2)').click();
        cy.get('#checkBoxOption2').should('be.checked');
    })

    it('Click Option3 label', () => {
        cy.visit('/AutomationPractice/');
        cy.get('label:has(#checkBoxOption3)').click();
        cy.get('#checkBoxOption3').should('be.checked');
    })

    it('Verify keyboard navigation', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption1').focus().should('have.focus');
        cy.get('#checkBoxOption2').focus().should('have.focus');
        cy.get('#checkBoxOption3').focus().should('have.focus');
    })

    it('Verify keyboard selection', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption1').focus().type(' ').should('be.checked');
    })

    it('Verify keyboard deselection', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption1').check().focus().type(' ').should('not.be.checked');
    })

    it('Verify tab order', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption1').focus().should('have.focus');
        cy.get('#checkBoxOption2').focus().should('have.focus');
        cy.get('#checkBoxOption3').focus().should('have.focus');
    })

    it('Verify focus indication', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption1').focus().should('have.focus');
    })

    it('Verify checkbox accessibility', () => {
        cy.visit('/AutomationPractice/');
        cy.findByRole('checkbox', { name: 'Option1' }).should('exist');
        cy.findByRole('checkbox', { name: 'Option2' }).should('exist');
        cy.findByRole('checkbox', { name: 'Option3' }).should('exist');
    })

    it('Verify checkbox state', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption1').check().should('have.prop', 'checked', true);
    })

    it('Verify unchecked state', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption1').should('have.prop', 'checked', false);
    })

    it('Verify page refresh behavior', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption1').check();
        cy.reload();
        cy.get('#checkBoxOption1').should('not.be.checked');
    })

    it('Verify clicking outside checkbox', () => {
        cy.visit('/AutomationPractice/');
        cy.get('#checkBoxOption1').check();
        cy.get('body').click(0, 0);
        cy.get('#checkBoxOption1').should('be.checked');
    })

    it('Verify all possible combinations', () => {
        const combinations = [
            [],
            ['#checkBoxOption1'],
            ['#checkBoxOption2'],
            ['#checkBoxOption3'],
            ['#checkBoxOption1', '#checkBoxOption2'],
            ['#checkBoxOption1', '#checkBoxOption3'],
            ['#checkBoxOption2', '#checkBoxOption3'],
            ['#checkBoxOption1', '#checkBoxOption2', '#checkBoxOption3']
        ];

        combinations.forEach((combination) => {
            cy.visit('/AutomationPractice/');
            combination.forEach((checkbox) => cy.get(checkbox).check());
            cy.get('#checkBoxOption1').should(combination.includes('#checkBoxOption1') ? 'be.checked' : 'not.be.checked');
            cy.get('#checkBoxOption2').should(combination.includes('#checkBoxOption2') ? 'be.checked' : 'not.be.checked');
            cy.get('#checkBoxOption3').should(combination.includes('#checkBoxOption3') ? 'be.checked' : 'not.be.checked');
        });
    })

}) 