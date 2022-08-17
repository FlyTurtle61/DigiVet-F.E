import { Pipe, PipeTransform } from '@angular/core';
import { Comments } from 'src/app/dto/comment';

@Pipe({
  name: 'commentManager'
})
export class CommentManagerPipe implements PipeTransform {

  transform(value:Comments[], filterText?: any): Comments[] {
    filterText = filterText?filterText.toLocaleLowerCase():null;

    return filterText?value.filter((v:Comments) => v.createComment
    .toLocaleLowerCase().indexOf(filterText) !== -1):value
  }

}
