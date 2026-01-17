import axios from "axios";
import type { PixabayResponse } from "./types/pixabay";

// Твой API ключ, который тебе выдали
const API_KEY = "54237990-a39483862806b592bbf8509f4";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(
  query: string,
  page: number
): Promise<PixabayResponse> {
  const response = await axios.get<PixabayResponse>(BASE_URL, {
    params: {
      key: API_KEY,         // ← здесь используем твой ключ
      q: query,             // поисковый запрос
      image_type: "photo",  // тип изображения
      orientation: "horizontal",
      safesearch: true,
      page,                 // страница
      per_page: 20,         // сколько изображений за раз
    },
  });

  return response.data;
}
