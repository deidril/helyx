/**
 * Extend the basic ItemSheet with some very simple modifications
 */
export class HelyxItemSheet extends ItemSheet {
    constructor(...args) {
        super(...args);

        /**
         * Keep track of the currently active sheet tab
         * @type {string}
         */
    }

    /** @override */
    get template() {
        const path = "systems/helyx/templates/items/";
        return `${path}/${this.item.data.type}-sheet.html`;
    }
}
// End of file

