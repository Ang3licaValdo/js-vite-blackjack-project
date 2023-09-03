// Esta función me permite tomar una carta
/**
 * 
 * @param {Array<String>} deck Recibe como parametro el arreglo de todas las cartas en el deck
 * @returns {String} Regresa un string con el nombre de la carta seleccionada del deck
 */
export const pedirCarta = (deck) => {

    if(deck.length === 0) 
        throw new Error('deck tiene que ser un arreglo de Strings');

    const carta = deck.pop();
    return carta;
}