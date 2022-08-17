import { Pipe, PipeTransform } from '@angular/core';
import { VetMeetingDetailsModel } from 'src/app/dto/vet-meet-details';

@Pipe({
  name: 'meetingControl'
})
export class MeetingControlPipe implements PipeTransform {

  transform(value:VetMeetingDetailsModel[], filterText?: any): VetMeetingDetailsModel[] {
    filterText = filterText?filterText.toLocaleLowerCase():null;

    return filterText?value.filter((v:VetMeetingDetailsModel) => v.userEmail
    .toLocaleLowerCase().indexOf(filterText) !== -1):value
  }

}
