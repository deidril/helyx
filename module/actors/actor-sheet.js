/**
 * Extend the basic ActorSheet with some very simple modifications
 */
 export class HelyxActorSheet extends ActorSheet {
    constructor(...args) {
        super(...args);

        /**
         * Keep track of the currently active sheet tab
         * @type {string}
         */
    }

    /**
     * Extend and override the default options used by the Simple Item Sheet
     * @returns {Object}
     */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["helyx", "sheet", "actor"],
            width: 520,
            height: 390,
            resizable: true,
            tabs: [
                {
                    navSelector: ".tabs",
                    contentSelector: ".sheet-body",
                    initial: "description",
                },
            ],
        });
    }

    /** @override */
    get template() {
        const path = "systems/helyx/templates/actors";
        const result = `${path}/${this.actor.data.type}-sheet.html`;
        return result;
    }

    /**
     * Prepare data for rendering the Item sheet
     * The prepared data object contains both the actor data as well as additional sheet options
     */
    getData() {
        const data = super.getData().data;
        data.editable = this.document.sheet.isEditable;
        data.config = CONFIG.OSE;
        return data;
    }
}
// End of file

