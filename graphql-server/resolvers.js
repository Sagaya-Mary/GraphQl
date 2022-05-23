module.exports = {
    Query: {
        school: (parent, args, { dataSources }, info) => {
            return dataSources.schoolAPI.getAllStudents(args);
        },
        schoolById: (parent, { id }, { dataSources }, info) => {
            return dataSources.schoolAPI.getStudentById(id);
        }

    },
    //  Mutation:{
    //     addNewStudent: (parent,args,{dataSources},info) => {
    //         // const { firstName, lastName,birthDate } = args;
    //        // const args={ firstName, lastName,birthDate};
    //         return dataSources.schoolAPI.addNewAllStudent(args);
    //     }
    //  }
    // Mutation:{
    //     addNewStudent: async (root, args, context) => {
    //         const { firstName, lastName,birthDate } = args;
    //         const newStudent = await context.dataSources.schoolAPI.addNewAllStudent.addNewStudent({firstName, lastName,birthDate })
    //         return {
    //           id: newStudent.id,
    //           firstName

    //         }
    //       }
    //     }
}
