export const toDomElement = Symbol('toDomElement')

export function appendObjectToContainer(object, container) {
  const element = object[toDomElement]()
  container.appendChild(element)
}
