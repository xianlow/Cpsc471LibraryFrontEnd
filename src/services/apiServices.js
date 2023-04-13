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
  payOverdue(theID){
    return http.put('/overdue/pay', theID);
  }
  getPickupDates(theID){
    return http.get('/checkpickup', {params : {
      id: theID
    }});
  }
  bookProduct(ids){
    return http.put('/productregis', ids);
  }
  returnProduct(theID){
    return http.put('/productemp/productsearch', theID);
  }
  newCustomer(data){
    return http.put('/signup', data);
  }
  createBook(data){
    return http.put('/create/book', data);
  }
  createJournal(data){
    return http.put('/create/journal', data);
  }
  createMovie(data){
    return http.put('/create/movie', data);
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