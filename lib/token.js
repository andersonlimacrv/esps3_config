const jwt = require('jsonwebtoken');

export function decodePayload(token) {
    try {
        const decode = jwt.decode(token)
        return decode.sub

    } catch (error) {
        console.error('Erro ao verificar o token:', error.message);
    }
}


