export interface ODataResponse<T> {
  "@odata.context": string;
  "@odata.count"?: number;
  value: T[];
}
