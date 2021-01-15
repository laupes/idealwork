import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sublink'
})
export class Sublink implements PipeTransform {
    transform(value: string): any {
        if (!value) {
            return null;
        } else {
            return value.split('=')[1];
        }
    }
}
