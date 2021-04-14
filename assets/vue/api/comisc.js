import axios from "axios";

export default {
  findAll() {
    return axios.get("/api/comics", {headers: {'accept': 'application/json'}})
  }
}
