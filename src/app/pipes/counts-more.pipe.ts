import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countsMore',
})
export class CountsMorePipe implements PipeTransform {
  transform(value: number[], above: number): number {
    return value.filter((x) => x > above).length;
  }
}
