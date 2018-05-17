var w_formowner = {view:"form", elements: [{view:"abslayout", cells: [
    {
        view: "combo",
        id: "webix_control_79671",
        top: 50,
        left: 0,
        options: [],
        width: 400,
        label: "Book",
        labelWidth: "90",
        name: "book"
    },
    {
        view: "text",
        id: "webix_control_97859",
        top: 100,
        left: 0,
        width: 400,
        label: "FIO",
        labelAlign: "left",
        labelPosition: "left",
        placeholder: "Type your FIO here",
        name: "name",
        labelWidth: "90"
    },
    
    {
        view: "button",
        id: "webix_control_97519",
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
        label: "Add owner",
        width: 400
    }
]}]}

w_formowner.elements[0].cells[0].options = "./data/book.csp";
w_formowner.container = 'formowner_div';