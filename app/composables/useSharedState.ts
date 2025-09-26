import { inject, provide, reactive } from "vue";

export function createSharedState<T extends object>() {
  const key = "componentState";

  const provideState = (defaults: T) => {
    const state = reactive(defaults) as T;
    provide(key, state);
    return state;
  };

  const useState = (): T => {
    if (!key) throw new Error("State not provided yet!");
    const state = inject<T>(key);
    if (!state) throw new Error("Shared state not provided in parent!");
    return state;
  };

  return { provideState, useState };
}
