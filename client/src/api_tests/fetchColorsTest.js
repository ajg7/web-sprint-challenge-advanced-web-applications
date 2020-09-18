import { axiosWithAuth } from "../axiosWithAuth";

export const fetchColorsTest = (setColorList) => {
    return axiosWithAuth().get("/api/colors")
        .then(response => {
            console.log(response.data)
            return response;
        })
        .catch(error => {
            console.log(error);
    })
}