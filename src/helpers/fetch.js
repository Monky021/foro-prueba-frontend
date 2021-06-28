const baseUrl = 'http://localhost:4040/api/foro';

//Se encarga de formar el url junto al tipo de posteo y envia la data correspondiente sim solucitar el token
export const fetchSinToken = ( endpoint, data, method = 'GET') => {
    const url = `${baseUrl}/${endpoint}`;
    console.log(url);
    if(method === 'GET'){
        return fetch(url);
    }else {
        return fetch(url,{
            method,
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

    }

}

//Se encarga de hacer peticiones teniendo en cuenta el token 
export const fetchConToken = ( endpoint, data, method = 'GET') => {
    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem('token') || '';
    
    if(method === 'GET'){
        return fetch(url,{
            method,
            headers:{
                'x-token':token
            }
        });
    }else {
        return fetch(url,{
            method,
            headers:{
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify(data)
        });

    }

}