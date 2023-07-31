const Router = {
    init: () => {
        document.querySelectorAll('a.navlink').forEach(a => {
            a.addEventListener('click', e => {
                e.preventDefault();
                const href = e.target.getAttribute('href');
                Router.go(href);
            });
        });
        // event handler for URL changes
        window.addEventListener('popstate', e => {
            // the state.route comes from us pushingState in go(route, addToHistory)
            Router.go(e.state.route, false);
        });

        // check the initial URL
        Router.go(window.location.pathname);
    },
    go: (route, addToHistory = true) => {
        if (addToHistory) {
            // this adds the '/route' to the end of the URL address
            window.history.pushState({ route }, '', route);
            // the initial object as a param will be used as 'state' later
        }

        let pageElement = null;

        switch (route) {
            case '/':
                pageElement = document.createElement('menu-page');
                break;
            case '/order':
                pageElement = document.createElement('order-page');
                break;
            default:
                if (route.startsWith('/product-')) {
                    pageElement = document.createElement('details-page');

                    const paramId = route.substring(route.lastIndexOf('-') + 1);
                    pageElement.dataset.id = paramId;
                }
                break;
        }
        if (pageElement) {
            const main = document.querySelector('main');
            main.innerHTML = '';
            main.appendChild(pageElement);

            window.scrollX = 0;
            window.scrollY = 0;
        }

    }
};

export default Router;