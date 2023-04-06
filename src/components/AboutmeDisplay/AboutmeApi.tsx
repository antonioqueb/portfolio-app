import axios from 'axios';

interface AboutmeData {
  title: string;
  description: string;
  imageSrc: string;
}

const fetchAboutmeData = async (): Promise<AboutmeData> => {
  const response = await axios.get('https://www.queb.online/api/me/6/?format=json');
  const response2 = await axios.get('https://www.queb.online/api/me/5/?format=json');
  const { description, title } = response.data;
  const { galery: galery2 } = response2.data;
  return { title: title, description, imageSrc: galery2 };
};

export default fetchAboutmeData;
