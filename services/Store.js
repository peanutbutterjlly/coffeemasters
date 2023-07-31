const Store = {
    menu: null,
    cart: [],
};

const handler = {
    get(target, property) {
        return target[property];
    },
    set(target, property, value) {
        target[property] = value;
        if (property === 'menu') {
            window.dispatchEvent(new Event('appmenuchange'));
        }
        if (property === 'cart') {
            window.dispatchEvent(new Event('appcartchange'));
        }
        return true;
    }
};

const proxiedStore = new Proxy(Store, handler);

export default proxiedStore;