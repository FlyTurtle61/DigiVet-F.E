import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { VetMeetingDetailsModel } from 'src/app/dto/vet-meet-details';

@Pipe({
  name: 'vetMeetFilter'
})
export class VetMeetFilterPipe implements PipeTransform {

  transform(value:VetMeetingDetailsModel[], filterText?: any): VetMeetingDetailsModel[] {
    filterText = filterText?filterText.toLocaleLowerCase():null;

    return filterText?value.filter((v:VetMeetingDetailsModel) => v.userFirstName
    .toLocaleLowerCase().indexOf(filterText) !== -1):value
  }


}
