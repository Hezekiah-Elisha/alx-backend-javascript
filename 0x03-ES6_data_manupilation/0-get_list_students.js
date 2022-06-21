export default function getListStudents(id, firstName, location)
{
    return new Promise((resolve, reject) => {
        let url = "http://localhost:3000/students";
        let params = {
            id: id,
            firstName: firstName,
            location: location
        };
        axios.get(url, {params: params})
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}