import { HelyxItemSheet } from "./items/item-sheet.js";


/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

Hooks.once("init", async function () {

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("helyx", HelyxItemSheet, {
        makeDefault: true,
        label: "HELYX.SheetClassItem",
    });

});

Hooks.once('ready', function () {
    const leftSection = document.querySelector('#ui-left');
    leftSection.setAttribute('style', `width: 60px`);

    const topSection = document.querySelector('#ui-top');
    topSection.setAttribute('style', `width: 120px`);

    const bottomSection = document.querySelector('#ui-bottom');
    bottomSection.setAttribute('style', `width: 40px`);

    const middleSection = document.querySelector('#ui-middle');
    middleSection.setAttribute('style', `width: 60px`);

    const rightSection = document.querySelector('#ui-right');
    rightSection.setAttribute('style', `width: 860px`);

    const sidebar = document.querySelector('#sidebar');
    sidebar.setAttribute('style', `width: 860px`);
});