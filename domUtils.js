window.objectByElement = new WeakMap()

export const toDomElement = Symbol('toDomElement')

export function appendObjectToContainer(object, container) {
  const element = object[toDomElement]()
  window.objectByElement.set(element, object)
  container.appendChild(element)
}
