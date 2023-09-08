/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from 'src/boot/axios';
import { ref } from 'vue';

const row = ref();
const data = (currentemail: string) => {
    return new Promise((resolve, reject) => {
        api.get('client/' + currentemail, {
            headers: {
                Authorization: `Bearer ${String(
                    sessionStorage.getItem('token')
                )}`,
            },
        })
            .then((response) => {
                resolve(response.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

data('dv2379681@gmail.com')
    .then((res: any) => {
        row.value = res.data.appointments;
    })
    .catch((err) => {
        console.log(err);
    });

export const useUser = () => ({
    data,
    row,
});
