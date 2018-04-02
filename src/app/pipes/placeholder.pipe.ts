import { Pipe } from '@angular/core';

@Pipe({
  name: 'placeholder'
})
export class placeHolderPipe {
  transform(value: string, defecto: string): string {
    return ( value )? value: defecto;
  }
}
