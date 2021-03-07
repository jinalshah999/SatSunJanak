import { HttpResponse } from '@angular/common/http';

export interface CacheEntry {
  url: string;
  res: HttpResponse<any>;
  entryTime: number;
}

export const MAX_TIME_OUT = 2000000;
