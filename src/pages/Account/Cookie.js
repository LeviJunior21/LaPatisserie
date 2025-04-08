export const setTokenCookie = (token) => {
    const diasParaExpirar = 1;
    const segundos = 60 * 60 * 24 * diasParaExpirar;
    document.cookie = `token=${token}; max-age=${segundos}; path=/; Secure; SameSite=Strict`;
}

export const getToken = () => {
    const valor = `; ${document.cookie}`;
    const partes = valor.split(`; token=`);
    if (partes.length === 2) return partes.pop().split(';').shift();
    return ""
}