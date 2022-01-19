export default class EVENTS {

    static async makeDialog(ev, caller) {
        const dialogData = {};
        dialogData.event = ev;
        const template = "systems/helyx/templates/dialogs/event.hbs";

        let resp = await new Promise(async resolve => {
            new Dialog
            ({
                title: ev.name,
                content: await renderTemplate(template, dialogData),
                buttons: {
                    continue: {
                        label: 'continue'
                        }
                    }
                }
            }).render(true);
            EVENTS._focusById('mod');
        });
    }

    static _focusById(id) {
        return setTimeout(() => { document.getElementById(id).focus() }, 50);
    }
}
