var w_form = {view:"form", elements: [{view:"abslayout", cells: [
    {
        view: "text",
        id: "webix_control_97359",
        top: 50,
        left: 0,
        width: 400,
        label: "Name",
        labelAlign: "left",
        labelPosition: "left",
        placeholder: "Type book name here",
        name: "name",
        labelWidth: "90"
    },
    {
        view: "text",
        id: "webix_control_97359",
        top: 100,
        left: 0,
        width: 400,
        label: "Author",
        labelAlign: "left",
        labelPosition: "left",
        placeholder: "Type author here",
        name: "author",
        labelWidth: "90"
    },
    
    {
        view: "button",
        id: "webix_control_97559",
        top: 150,
        left: 0,
        label: "Save",
        width: 400
    },
    {
        view: "label",
        id: "webix_control_06755",
        top: 0,
        left: 0,
        label: "Add book",
        width: 400
    }
]}]}

w_form.elements[0].cells[0].required = true;
w_form.container = 'form_div';