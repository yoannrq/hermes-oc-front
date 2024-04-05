function parseJson(res) {
  return res
    .json()
    .then((json) => {
      return {
        data: json,
        status: res.status,
        ok: res.ok,
        statusText: res.statusText,
        error: json?.error || '',
      }
    })
    .catch((err) => {
        console.error(err)
    })
}

function parseFile(res) {
    return res.blob((blob) => {
        return blob
    })
}

async function fetchBackend({ method, url, data, parsingStrategy = parseJson }) {
    const headers = {
        Accept: 'application/json',
    }

    if (data) {
        headers['Content-Type'] = 'application/json;charset=UTF-8'
    }

    return fetch(url, {
        method,
        headers,
        body: data ? JSON.stringify(data) : null,
    }).then(async (res) => {
        if (res.redirected) {
            throw new Error('Bad url : ' + url)
        }
        if (res.status >= 500) {
            return { error: `${res.status}: ${res.statusText}` }
        }

        return parsingStrategy(res)
  })
}

export default {
    async get(url) {
        return fetchBackend({
            method: 'GET',
            url,
        })
    },

    async getFile(url) {
        return fetchBackend({
            method: 'GET',
            parsingStrategy: parseFile,
            url,
        })
    },

    async post(url, data) {
        return fetchBackend({
            method: 'POST',
            parsingStrategy: parseJson,
            url,
            data,
        })
    },
}
