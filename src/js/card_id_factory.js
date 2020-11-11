const CardIdFactory = (event) => {
    
    // console.log(event.target.parentNode.id)
    // console.log(event.target.className)
    const eventId = event.target.parentNode.id
    const eventClass = event.target.className

    const splitEventId = eventId.split('$')
    // console.log(splitEventId)

    const cardId = parseInt(splitEventId[1]);
    // console.log(cardId)
    return {cardId, eventClass, eventId}
  }

  export default CardIdFactory;