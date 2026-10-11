class AutoSuggestPageElements {
    suggestionSectionTitle = () => cy.get('#select-class-example fieldset legend');
    countryInput = () => cy.get('#autocomplete');
    countrySuggestions = () => cy.get('.ui-menu-item');
    countrySuggestionItems = () => cy.get('ul.ui-autocomplete li.ui-menu-item');
}

export default AutoSuggestPageElements;
