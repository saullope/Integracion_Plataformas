const items = [
    {
        label: "Panel",
        icon: "pi pi-fw pi-home",
        to: "/principal"
    },
    {
        label: "Plataformas",
        icon: "pi pi-fw pi-box",
        to: "/plataformas"
    },
    {
        label: "Evaluaciones",
        icon: "pi pi-fw pi-book",
        to: "/evaluaciondatos"
    },
    {
        label: "Registro",
        icon: "pi pi-fw pi-table",
        items : [
            {
                label: "Grupos de Clase",
                icon : "pi pi-fw pi-users",
                to: "/registro"
            },
            {
                label: "Estudiantes",
                icon: "pi pi-fw pi-user",
                to: "/registro-students"
            }
        ]
    },
    {
        label: "Reportes",
        icon: "pi pi-fw pi-chart-bar"
    },
    {
        separator: true
    },
   
    ];

export {items}