

let studentsList = []

export const getAll = () => {
    return studentsList.map(s => {
        return {
            _id: s._id,
            name: s.name,
            lastName: s.lastName,
            boughtCourse: s.boughtCourse,
            payed: s.payed
        }
    })
}

export const getStudent = (studentId) => {
    return studentsList.find(s => s._id === studentId)
}

export const createStudent = (newStudent) => {
    const aux = {
        ...newStudent,
        payed: false,
        _id: (Math.random() * 10000).toFixed(0)
    }
    studentsList.push(aux)

}

export const modifyStudent = (s) => {
    const listAux = studentsList.filter(st => st._id != s._id)
    listAux.push(s)
    studentsList = listAux
}

export const deleteStudent = (studentId) => {
    const listAux = studentsList.filter(s => s._id != studentId)
    studentsList = listAux
}

// export const payCourse = (studentId, courseId) => {
export const payCourse = (studentId) => {
    const studentAux = studentsList.find(st => st._id === studentId)
    studentAux.payed = true
    const listAux = studentsList.filter(st => st._id != studentId)
    listAux.push(studentAux)
    studentsList = listAux
}