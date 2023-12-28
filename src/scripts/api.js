// TODO: Silakan sesuaikan BASE URL dari endpoint Anda
const BASE_URL = 'YOUR BASE URL';

// TODO: Silakan sesuaikan path resource Anda
const ENDPOINT = {
  predict: `${BASE_URL}/YOUR PATH`,
};

class PredictAPI {
  static async predict(data) {
    const response = await fetch(ENDPOINT.predict, {
      method: 'POST',
      body: data,
      redirect: 'follow',
    });

    const json = await response.json();
    return json;
  }
}
