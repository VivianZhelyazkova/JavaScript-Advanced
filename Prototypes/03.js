function neshto() {
    return {
        extend(template) {
            for (let prop in template) {
                if (typeof template[prop] === "function") {
                    Object.getPrototypeOf(this)[prop] = template[prop];
                } else {
                    this[prop] = template[prop];
                }
            }
        },
    };
}

