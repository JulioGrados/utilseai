const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = [...source]
  const destinationClone = Array.from(destination)
  const [removed] = sourceClone.splice(droppableSource.index, 1)
  destinationClone.splice(droppableDestination.index, 0, removed)
  const result = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destinationClone

  return result
}

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const getItems = (list, id) => {
  const index = list.findIndex(item => item._id === id)
  if (index !== -1) {
    return list[index].items
  } else {
    return []
  }
}

const setLeads = (list, id, items) => {
  const index = list.findIndex(item => item._id === id)
  if (index !== -1) {
    list[index].items = items
  }
  return list
}

const orderBoard = (list, result) => {
  const { source, destination } = result
  let newList = list
  if (!destination) {
    return list
  }
  if (source.droppableId === destination.droppableId) {
    const items = reorder(
      getItems(list, source.droppableId),
      source.index,
      destination.index
    )
    newList = setLeads(list, source.droppableId, items)
  } else {
    const result = move(
      getItems(list, source.droppableId),
      getItems(list, destination.droppableId),
      source,
      destination
    )
    const keys = []
    for (const key in result) {
      keys.push(key)
    }
    newList = setLeads(list, keys[0], result[keys[0]])
    newList = setLeads(list, keys[1], result[keys[1]])
  }

  return newList
}

const getPipe = url => {
  const pipe = url.split('/')[1]
  switch (pipe) {
    case 'ventas':
      return 'sales'
    case 'contabilidad':
      return 'accounting'
    case 'cursos':
      return 'courses'
  }
}

module.exports = {
  orderBoard,
  getPipe
}
