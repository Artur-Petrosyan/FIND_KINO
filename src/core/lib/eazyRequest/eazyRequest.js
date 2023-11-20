export class EazyRequest {
    constructor(baseUrl) {
        this.baseURL = baseUrl;
    }

    async #request(endpoint, method = "GET", data) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method,
                body: data ? JSON.stringify(data) : undefined,
            });
            return await response.json();
        } catch (err) {
            console.log(err);
        }
    }

    async get(endpoint, params) {
        if (params) {
            try {
                if (typeof params === 'object' && Object.keys(params).length) {
                  try {
                      if (!!Array.isArray(params)) {
                          const paramsStr = Object.entries(params)
                              .map(([key, value]) => `${key}=${value}`)
                              .join('&');
                          return await this.#request(`${endpoint}?${paramsStr}`, "GET");
                      } else {
                          throw new Error('must be a object not array')
                      }

                  }catch (e){
                   return console.log(e)
                  }

                } else {
                    throw new Error("params must be a non-empty object");
                }
            } catch (e) {
             return console.log(e);
            }
        }
        return await this.#request(endpoint, "GET");
    }

    async post(endpoint, data) {
        await this.#request(endpoint, "POST", data);
    }
}