export async function REST_GET_Json(url: string): Promise<any> {

  const myInit: { method: string, headers: any, mode: RequestMode } = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept-Charset': 'utf-8'
    },
    mode: 'cors',
  };

  try {
    const res = await fetch(url, myInit);
    let data: any = await res.json();
    if (!data) return null;
    return data
  } catch (e) {
    console.error(e);
    return null;
  }
}