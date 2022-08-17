import { Pipe, PipeTransform } from '@angular/core';
import { VetDetailsRequest } from 'src/app/dto/vet-details-request';
import { VetMeetingDetailsModel } from 'src/app/dto/vet-meet-details';

@Pipe({
  name: 'vetCountry'
})
export class VetCountryPipe implements PipeTransform {

  transform(value:VetDetailsRequest[], filterText?: any): VetDetailsRequest[] {
    filterText = filterText?filterText.toLocaleLowerCase():null;

    return filterText?value.filter((v:VetDetailsRequest) => v.adress
    .toLocaleLowerCase().indexOf(filterText) !== -1):value
  }
}
