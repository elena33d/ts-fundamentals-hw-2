import axios from "axios";
import type { PixabayResponse } from "./types/pixabay";

// Твой ключ API — желательно хранить в .env, но можно пока так
const API_KEY = "ВАШ_API_KEY";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(
  query: string,
  page: number
): Promise<PixabayResponse> {
  const response = await axios.get<PixabayResponse>(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      page,
      per_page: 20,
    },
  });

  return response.data;
}
