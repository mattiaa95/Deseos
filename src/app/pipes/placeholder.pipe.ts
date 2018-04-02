import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeholder'
})
export class placeHolderPipe implements PipeTransform {
  transform(value: string, defecto: string): string {
    return ( value )? value: defecto;
  }
}
