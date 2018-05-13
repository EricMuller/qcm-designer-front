
export class FilterRequest {
  filters: Filter[];
}

export class Filter {

  value?: number;
  type: string;

  constructor(value: number, type: string) {
    this.value = value;
    this.type = type;
  }

}
