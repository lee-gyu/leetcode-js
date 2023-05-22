class TimeLimitedCache {
    #_cacheMap: Map<number, {value: number, timeoutHandler: any}> = new Map();

    constructor() { }

    set(key: number, value: number, duration: number): boolean {
        const hasKey = this.#_cacheMap.has(key);

        hasKey && clearTimeout(this.#_cacheMap.get(key).timeoutHandler);

        const timeoutHandler = setTimeout(() => {
            this.#_cacheMap.delete(key);
        }, duration);

        this.#_cacheMap.set(key, {value, timeoutHandler});

        return hasKey;
    }

    get(key: number): number {
        if (!this.#_cacheMap.has(key)) return -1;

        return this.#_cacheMap.get(key).value;
    }

	count(): number {
        return this.#_cacheMap.size;
    }
}