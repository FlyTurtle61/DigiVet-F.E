import { Pipe, PipeTransform } from '@angular/core';
import { VetMeetingDetailsModel } from 'src/app/dto/vet-meet-details';

@Pipe({
  name: 'vetNameSearch'
})
export class VetNameSearchPipe implements PipeTransform {

  transform(value:VetMeetingDetailsModel[], filterText?: any): VetMeetingDetailsModel[] {
    filterText = filterText?filterText.toLocaleLowerCase():null;

    return filterText?value.filter((v:VetMeetingDetailsModel) => v.vetFirstName
    .toLocaleLowerCase().indexOf(filterText) !== -1):value
  }

}
