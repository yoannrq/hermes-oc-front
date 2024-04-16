export type ResponseData<T = unknown> = {
  data: { [key: string]: T };
  status: number;
  statusText: string;
  error: string;
  ok: boolean;
};

async function parseJson(res: Response): Promise<ResponseData> {
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
      return {
        data: {},
        status: res.status,
        ok: res.ok,
        statusText: res.statusText,
        error: err || '',
      };
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
};

async function fetchBackend({ method, url, data }: fetchBackendProps) {
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
    return res;
  });
}

export default {
  async get(url: string) {
    return parseJson(
      await fetchBackend({
        method: 'GET',
        url,
      })
    );
  },

  async getFile(url: string) {
    return parseFile(
      await fetchBackend({
        method: 'GET',
        url,
      })
    );
  },

  async post(url: string, data: object) {
    return parseJson(
      await fetchBackend({
        method: 'POST',
        url,
        data,
      })
    );
  },

  async put(url: string, data: object) {
    return parseJson(
      await fetchBackend({
        method: 'PUT',
        url,
        data,
      })
    );
  },

  async patch(url: string, data: object) {
    return parseJson(
      await fetchBackend({
        method: 'PATCH',
        url,
        data,
      })
    );
  },

  async delete(url: string) {
    return fetchBackend({
      method: 'DELETE',
      url,
    });
  },
};
