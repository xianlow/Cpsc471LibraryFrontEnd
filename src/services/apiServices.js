import http from "../http-common";

class apiServices {
  getAll() {
    return http.get("/");
  }

  // get(id) {
  //   return http.get(`/test/${id}`);
  // }

  create(data) {
    return http.post("/adminpage", data);
  }

  // update(id, data) {
  //   return http.put(`/test/${id}`, data);
  // }

  // delete(id) {
  //   return http.delete(`/test/${id}`);
  // }

  // deleteAll() {
  //   return http.delete('/test');
  // }

  // findByTitle(title) {
  //   return http.get(`/test?title=${title}`);
  // }
}

export default new apiServices();