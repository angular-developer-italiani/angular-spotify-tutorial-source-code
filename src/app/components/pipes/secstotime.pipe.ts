import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'secsToTime'
})
export class SecsToTimePipe implements PipeTransform {
  transform(d: number, isMilliseconds: boolean = false): string {
    d = isMilliseconds ? Number(d) / 1000 : Number(d);

    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s)
  }
}