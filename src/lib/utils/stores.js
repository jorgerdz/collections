import { compute_rest_props } from "svelte/internal";
import { writable } from "svelte/store";

let _items = null;

export function items(items) {
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
    },
    update: (item) => {
      update(n => {
        debugger
        return n.map(i => {
          if (item.id === i.id) {
            return item;
          }
        })
      })
    }
  };

  return _items;
}
