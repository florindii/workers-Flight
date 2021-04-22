import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDuration'
})
export class FormatDurationPipe implements PipeTransform {

  transform(value: number): string {
    let hours: number = Math.trunc(value/60);
    let minutes: number = value - (hours*60);


    let response: string = "";

    if (hours > 0) {
      response = response + hours + " h ";
    }

    if (minutes > 0) {
      response = response + minutes + " min";
    }

    return response;
}

}
