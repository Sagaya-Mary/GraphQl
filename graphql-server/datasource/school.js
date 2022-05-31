const {RESTDataSource} = require('apollo-datasource-rest')
const _=require('lodash');
class SchoolAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = "http://localhost:8585/students";
    }
    async getAllStudents(){
        const data = await this.get(`/findall`);
        return data
    }
   async getStudentById(id){
        const student= await this.get(`/findbyid/${id}`)
        return student;
    }
    async addNewAllStudent(student){
        return this.post(
            `/add`, // path
            student, // request body
          );
    }
  

}
module.exports = SchoolAPI;