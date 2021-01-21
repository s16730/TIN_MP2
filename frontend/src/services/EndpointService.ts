import { Endpoint } from "@/const/Endpoint";
import { DataObject } from "@/types";

//todo: styles && forms

export class EndpointService {
  public static getUrl(endpoint: Endpoint, params: DataObject = {}): string {
    const regexp = /{\w+}/;
    let url: string = endpoint;


    const matches = regexp.exec(url)
    if (matches) {
      matches.forEach(((match: string) => {
        console.log(match)
        const paramKey = match.replace('{', '').replace('}', '');

        if (params[paramKey]) {
          url = url.replace(`{${paramKey}`, params[paramKey]);
        }
      }))
    }

    return url;
  }

}
