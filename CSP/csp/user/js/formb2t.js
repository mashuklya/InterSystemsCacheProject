var w_formb2t = {view:"form", elements: [{view:"abslayout", cells: [
    {
        view: "combo",
        id: "webix_control_79673",
        top: 50,
        left: 0,
        options: [],
        width: 400,
        label: "Book",
        labelWidth: "90",
        name: "book"
    },
    {
        view: "combo",
        id: "webix_control_79463",
        top: 100,
        left: 0,
        options: [],
        width: 400,
        label: "Type",
        labelWidth: "90",
        name: "type"
    },
    
    {
        view: "button",
        id: "webix_control_97539",
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
        label: "Book2Type",
        width: 400
    }
]}]}

w_formb2t.elements[0].cells[0].options = "./data/book.csp";
w_formb2t.elements[0].cells[1].options = "./data/type.csp";
w_formb2t.container = 'formb2t_div';