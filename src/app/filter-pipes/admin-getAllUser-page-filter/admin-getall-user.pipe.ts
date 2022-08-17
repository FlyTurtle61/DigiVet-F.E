import { Pipe, PipeTransform } from '@angular/core';
import { UserDetailsUpdateModel } from 'src/app/dto/user-details-updateModel';

@Pipe({
  name: 'adminGetallUser'
})
export class AdminGetallUserPipe implements PipeTransform {

  transform(value:UserDetailsUpdateModel[], filterText?: any): UserDetailsUpdateModel[] {
    filterText = filterText?filterText.toLocaleLowerCase():null;

    return filterText?value.filter((v:UserDetailsUpdateModel) => v.email
    .toLocaleLowerCase().indexOf(filterText) !== -1):value
  }

}
