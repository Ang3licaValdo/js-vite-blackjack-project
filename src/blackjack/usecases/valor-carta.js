
/**
 * 
 * @param {String} carta Es una carta del deck representada como una String
 * @returns {Number} retorna el número entero correspondiente al valor de la carta
 */
export const valorCarta = ( carta ) => {

    if(!carta)
        throw new Error('La carta debe de tener un valor valido');

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}