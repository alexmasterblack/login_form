import { HTTP } from "@/api/common";

export const User = {
    create (config) {
        return HTTP.post('/login/', config).then(response => {
            return response.data
        })
    }
}