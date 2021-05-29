import axios from "axios";

export default {
  findAll() {
    return axios.get("/api/comics", {headers: {'accept': 'application/json'}});
  },
  findLatest() {
    return axios.get("/api/comics/latest", {headers: {'accept': 'application/json'}});
  },
  find(id) {
    return axios.get(`/api/comics/${id}`, {headers: {'accept': 'application/json'}});
  }
}
