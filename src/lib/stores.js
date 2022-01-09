import { writable } from "svelte/store";

let _items = null;

export function createItems(items) {
  if (_items) {
    return _items;
  }
  const { subscribe, set, update } = writable(items);

  _items = {
    subscribe,
    add: (item) => update(n => n.push(item)),
    remove: (item) => {
      update(n => {
        return n.filter(n => n != item)
      })
    }
  };

  return _items;
}
