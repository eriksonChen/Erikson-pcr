export class Item {
  href: string;
  title: string;
  date:string;
  pic:string;
  summary:string;
  des:string;
}

interface JQuery{
	lazyload: (options?: any) => JQuery;
}