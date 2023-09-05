import { api } from "boot/axios";
import { ref } from "vue";

const token = ref();

export const useAuth = () => ({
    token,
});
