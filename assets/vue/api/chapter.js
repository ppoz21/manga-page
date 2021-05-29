import axios from "axios";

export default {
  findByChapter(id) {
    return axios.get(`/api/chapters/byComic/${id}`, {headers: {'accept': 'application/json'}});
  }
}
