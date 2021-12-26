import { writable } from "svelte/store";

export function createItems(items) {
  const { subscribe, set, update } = writable(items);

  return {
    subscribe,
    add: (item) => update((n) => n.push(item)),
    remove: (item) => update((n) => n - 1)
  };
}
