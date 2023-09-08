import moment from 'moment';

/* eslint-disable @typescript-eslint/no-explicit-any */
export default [
    {
        name: 'department',
        field: (data: any) => data.collaborator.department,
        label: 'Departamento',
        sortable: true,
        align: 'left',
    },
    {
        name: 'date_appointment',
        field: (data: any) =>
            moment(data.appointment_date).format('DD/MM/YYYY'),
        label: 'Fecha de Cita',
        sortable: true,
        align: 'center',
    },
    {
        name: 'hour_appointment',
        field: (data: any) => moment(data.appointment_date).format('HH:mm'),
        label: 'Hora de Cita',
        sortable: true,
        align: 'center',
    },
    {
        name: 'appointment_state',
        field: 'appointment_state',
        format: (val: any, row: any) => ,
        label: 'Estado',
        sortable: true,
        align: 'center',
    },
];
