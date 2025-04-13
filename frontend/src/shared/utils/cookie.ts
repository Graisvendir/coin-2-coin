
export class Cookie {
    static parse() {
        const cookieMap = new Map();

        document.cookie.split(';')
            .forEach(cookieItem => {
                const [cookieName, cookieValue] = cookieItem.split('=', 2);

                cookieMap.set(cookieName, decodeURIComponent(cookieValue));
            });

        return cookieMap;
    }
}
