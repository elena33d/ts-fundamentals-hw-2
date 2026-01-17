import axios from "axios";

export interface Image {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
}

export interface ApiResponse {
  hits: Image[];
  totalHits: number;
}

export async function getImagesByQuery(
  query: string,
  page: number
): Promise<ApiResponse> {
  const response = await axios.get<ApiResponse>(
    `https://pixabay.com/api/?q=${query}&page=${page}`
  );
  return response.data;
};
