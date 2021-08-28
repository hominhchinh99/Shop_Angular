import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productQnt'
})
export class ProductQntPipe implements PipeTransform {

  transform(value: number): string {
    return `${value === 1 ? '1 product' : `${value} products`}`;
  }

}