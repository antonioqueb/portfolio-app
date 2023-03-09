import axios from 'axios';

export interface BannerProps {
  isDarkMode: boolean;
  title?: string;
  description?: string;
  galery?: string;
}

export interface GaleryResponse {
  galery: string;
}

export const fetchBanner = async (): Promise<BannerProps> => {
  const response = await axios.get<BannerProps>('https://django-server-production-0db9.up.railway.app/api/me/8/?format=json');
  return response.data;
};

export const fetchGalery = async (): Promise<string> => {
  const response = await axios.get<GaleryResponse>('https://django-server-production-0db9.up.railway.app/api/me/7/?format=json');
  return response.data.galery;
};
