import { useQuery } from "@tanstack/react-query";
import { catFactsURI } from "../constants/uriConstants";

export type CatFact = {
    fact: string,
    length: number 
};


const fetchCatFacts = () =>
    fetch(catFactsURI).then((res) =>
        res.json(),
    )

export const useCatFacts = () => useQuery<CatFact>({
    queryKey: ['catFact'],
    queryFn: fetchCatFacts,
    staleTime: Infinity,
    enabled: false,
})