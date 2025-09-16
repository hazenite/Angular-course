import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countsLess',
})
export class CountsLessPipe implements PipeTransform {
  transform(value: number[], above: number): number {
    return value.filter((x) => x < above).length;
  }
}
