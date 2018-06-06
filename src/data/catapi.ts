import {toJson, simplify} from "../commons/util";

export function getCats(n: number = 20): Promise<object> {
    return fetch(`http://thecatapi.com/api/images/get?api_key=MzIwNzU3&format=xml&results_per_page=${n}`)
        .then(res => res.text())
        .then(data => simplify(toJson(data)))
        .catch(err => undefined)
}