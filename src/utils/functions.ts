import axios from "axios"

export const translate = async(text:string, target:string,) => {
    let data = {
      q : `${text}`,
      source: 'en',
      target: `${target}`
    }
    const response = await axios.post(`https://libretranslate.de/translate`, data)
    return response.data.translatedText
  }