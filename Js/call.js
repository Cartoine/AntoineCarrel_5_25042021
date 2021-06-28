let resultFromAPI;

function CallAPI() {
    fetch(`http://localhost:3000/api/cameras`)
        .then(responce => responce.json())
        .then(data => {
            
            resultFromAPI = data
            localStorage.setItem('callApi', JSON.stringify(resultFromAPI))
        })
    }

CallAPI()

const getCallApi = localStorage.getItem('callApi')
const storageParse = JSON.parse(getCallApi)
// console.log(storageParse)

const camera_one = storageParse[0]
const camera_two = storageParse[1]
const camera_three = storageParse[2]
const camera_four = storageParse[3]
const camera_five = storageParse[4]
// console.log(camera_one)
// console.log(camera_two)
// console.log(camera_three)
// console.log(camera_four)
// console.log(camera_five)

export {storageParse, camera_one, camera_two, camera_three, camera_four, camera_five}