import { api } from "boot/axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
    const token = ref(null);
    const currentEmail = ref(null);
    const access = ({ email, password }) => {
        return new Promise((resolve, reject) => {
            api.post("auth/login", { email, password })
                .then((response) => {
                    token.value = response.data.token;
                    currentEmail.value = response.data.email;
                    sessionStorage.setItem("token", token.value);
                    resolve({ message: "Se ha logueado" });
                })
                .catch((err) => {
                    if (err.message === "password is wrong") {
                        reject({ message: "Contraseña incorrecta" });
                    } else {
                        reject({ message: "Ha ocurrido un problema" });
                    }
                });
        });
    };

    const register = async ({ fullname, email, password }) => {
        return new Promise((resolve, reject) => {
            api.post("auth/register", { fullname, email, password })
                .then(() => {
                    resolve({ message: "Se ha registrado con exito" });
                })
                .catch((err) => {
                    reject({
                        message: "No se ha podido loguear vuelva a intentarlo",
                    });
                });
        });
    };
    return {
        token,
        currentEmail,
        access,
        register,
    };
});
