export default class EVENTS {

    static width(percent) {
        return (percent * window.innerWidth) / 100;
    }

    static height(percent) {
        return (percent * window.innerHeight) / 100;
    }

    static left(width) {
        return (window.innerWidth - width) / 2;
    }

    static top(height) {
        return (window.innerHeight - height - 10);
    }

    static async makeDialog(ev, caller) {
        const dialogData = {};
        dialogData.event = ev;
        const template = "systems/helyx/templates/dialogs/event.hbs";

        const w = EVENTS.width(70);
        const h = EVENTS.height(30);
        const l = EVENTS.left(w);
        const t = EVENTS.top(h);

        // Remove title and buttons size + paddings
        const sh = h - 48;
        dialogData.sectionHeight = "" + sh + "px";

        const ch = sh - 12;
        dialogData.contentHeight = "" + ch + "px";

        dialogData.leftName = "LEFT GUY";
        dialogData.rightName = "RIGHT GUY";


        let resp = await new Promise
        (
            async resolve => 
            {
                new Dialog
                ({
                    title: ev.name,
                    content: await renderTemplate(template, dialogData),
                    buttons: 
                    {
                        continue: { label: 'continue' }
                    },
                    render: html => console.log("Register interactivity in the rendered dialog"),
                }, {width: w, height: h, left: l, top: t, resizable: true, classes: [ "event-dialog"] })                
                .render(true);

                EVENTS._focusById('mod');
            }
        );
    }

    static _focusById(id) {
        return setTimeout(() => { document.getElementById(id).focus() }, 50);
    }
}
