import MOCK_DATA from '../Data/MOCK_DATA.json'



export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA)
        }, 1500)
    })
}
