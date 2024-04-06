export type ResData = {
  data: object;
  status: number;
  ok: boolean;
  statusText: string;
  error: string;
};

async function parseJson(res: Response): Promise<ResData | void> {
  return res
    .json()
    .then((json) => {
      return {
        data: json,
        status: res.status,
        ok: res.ok,
        statusText: res.statusText,
        error: json?.error || '',
      };
    })
    .catch((err) => {
      console.error(err);
    });
}

async function parseFile(res: Response): Promise<Blob> {
  return res.blob().then((blob: Blob) => {
    return blob;
  });
}

type fetchBackendProps = {
  method: string;
  url: string;
  data?: object;
  parsingStrategy?: (res: Response) => Promise<ResData | Blob | void>;
};

async function fetchBackend({
  method,
  url,
  data,
  parsingStrategy = parseJson,
}: fetchBackendProps) {
  const headers = new Headers();
  headers.set('Accept', 'application/json');

  if (data) {
    headers.set('Content-Type', 'application/json;charset=UTF-8');
  }

  return fetch(url, {
    method,
    headers,
    body: data ? JSON.stringify(data) : null,
  }).then(async (res) => {
    if (res.redirected) {
      throw new Error('Bad url : ' + url);
    }
    if (res.status >= 500) {
      return { error: `${res.status}: ${res.statusText}` };
    }

    return parsingStrategy(res);
  });
}

export default {
  async get(url: string) {
    return fetchBackend({
      method: 'GET',
      url,
    });
  },

  async getFile(url: string) {
    return fetchBackend({
      method: 'GET',
      parsingStrategy: parseFile,
      url,
    });
  },

  async post(url: string, data: object) {
    return fetchBackend({
      method: 'POST',
      parsingStrategy: parseJson,
      url,
      data,
    });
  },

  async put(url: string, data: object) {
    return fetchBackend({
      method: 'PUT',
      parsingStrategy: parseJson,
      url,
      data,
    });
  },

  async patch(url: string, data: object) {
    return fetchBackend({
      method: 'PATCH',
      parsingStrategy: parseJson,
      url,
      data,
    });
  },

  async delete(url: string) {
    return fetchBackend({
      method: 'DELETE',
      url,
    });
  },
};
