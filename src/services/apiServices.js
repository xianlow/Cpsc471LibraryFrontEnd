import http from "../http-common";

class apiServices {
  /*
  getAll() {
    return http.get("/");
  }
  */
  getProduct(theID){
    return http.get('/product', {params : {
      id: theID
    }});
  }
  getOverdue(theID){
    return http.get('/overdue', {params : {
      id: theID
    }});
  }
  getPickupDates(theID){
    return http.get('/checkpickup', {params : {
      id: theID
    }});
  }
  bookProduct(theID){
    return http.put('/productregis', theID);
  }
  newCustomer(data){
    return http.put('/signup', data);
  }
  // get(id) {
  //   return http.get(`/test/${id}`);
  // }
/*
  create(data) {
    return http.post("/adminpage", data);
  }
*/
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