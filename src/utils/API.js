import axios from "axios";

export default {
    usersList: function () {
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        return axios.get("https://randomuser.me/api/");
    },
};
