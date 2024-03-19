import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
    baseUrl:'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'949906aba143351ca42215ee1f620087',
        language:'es'
    }
})