import { Pipe, PipeTransform } from '@angular/core';
import { VetDetailsUpdateModel } from 'src/app/dto/VetDetailUpdateModel';

@Pipe({
  name: 'adminGetallVet'
})
export class AdminGetallVetPipe implements PipeTransform {

  transform(value:VetDetailsUpdateModel[], filterText?: any): VetDetailsUpdateModel[] {
    filterText = filterText?filterText.toLocaleLowerCase():null;

    return filterText?value.filter((v:VetDetailsUpdateModel) => v.email
    .toLocaleLowerCase().indexOf(filterText) !== -1):value
  }

}
