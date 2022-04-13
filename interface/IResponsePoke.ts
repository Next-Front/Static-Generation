export interface IResponsePoke {
  count:    number;
  next?:    string;
  previous?:string;
  results:  List[];
}

interface List {
  name: string;
  url:  string;
}
