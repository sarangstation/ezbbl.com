import { userMsg } from "@/helpers/Logger";
import axios from "axios";

export function getBibleIndex() {
  if (localStorage.getItem("bibleIndex")) {
    userMsg("Local index data found.");
    return JSON.parse(localStorage.getItem("bibleIndex"));
  }

  return axios
    .get("/data/bibles/index.json")
    .then(response => {
      // JSON responses are automatically parsed.
      localStorage.setItem("bibleIndex", JSON.stringify(response.data));
      return response.data;
    })
    .catch(e => {
      // handle error
      this.errors.push(e);
    })
    .then(() => {
      // always executed
    });
}
