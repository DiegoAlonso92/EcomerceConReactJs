import MOCK_DATA from '../Data/MOCK_DATA.json'



export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA)
        }, 1500)
    })
}


export const pedirProductoPorId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA.find(prod => prod.id === id))
        }, 1500)
    })
}