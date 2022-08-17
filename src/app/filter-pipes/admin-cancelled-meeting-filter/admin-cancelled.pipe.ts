import { Pipe, PipeTransform } from '@angular/core';
import { MeetingCanceledDto } from 'src/app/dto/meeting-canceled-dto';

@Pipe({
  name: 'adminCancelled'
})
export class AdminCancelledPipe implements PipeTransform {

  transform(value:MeetingCanceledDto[], filterText?: any): MeetingCanceledDto[] {
    filterText = filterText?filterText.toLocaleLowerCase():null;

    return filterText?value.filter((v:MeetingCanceledDto) => v.userEmail
    .toLocaleLowerCase().indexOf(filterText) !== -1):value
  }

}
