import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeholder',
})
export class PlaceholderPipe implements PipeTransform {
  transform(value: string | null | undefined, defultValue: string): unknown {
    return value || defultValue;
  }
}
