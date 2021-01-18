import { Endpoint } from "@/const/Endpoint";
import { DataObject } from "@/types";

export class EndpointService {
  public static getUrl(endpoint: Endpoint, params: DataObject = {}): string {
    const regexp = /({\w+})/;
    let url: string = endpoint;

    let result;
    while ((result = regexp.exec(url)) !== null) {
      const paramKey = (result as unknown as string).replace('{', '').replace('}', '');

      if (params[paramKey]) {
        url = url.replace(`{${paramKey}`, params[paramKey]);
      }
    }

    return url;
  }

}
