import { Component, ChangeDetectorRef, Inject } from '@angular/core'
import event from '../event-bus'

@Component({
    selector: 'AngularApp',
    template: `
    <div style="display:flex;width: fit-content; margin-top:10px">
      <div style="padding: 30px;border: 5px solid #e23237; width:910px; box-sizing:border-box">
        <h2>Title : {{title}}</h2>
        <p>Synopsis : {{desc}}</p>
        <p style="border:1px solid; border-radius: 5px; width:fit-content; padding:5px;">Rating : {{rating}}</p>
      </div>
      <div style="display:flex; align-items:center;"><img style="width:300px" src="https://sigao.io/wp-content/uploads/2018/08/angular-card.png"/></div>
      </div>
    `,
  })
  export default class AngularApp {
    title: string = "";
    desc: string = "";
    rating: string = "";
  
    constructor(@Inject(ChangeDetectorRef) private changeDetector: ChangeDetectorRef) {}
  
    ngAfterContentInit() {
      event.on('message', message => {
        this.title = message.data.title
        this.desc = message.data.description
        this.rating = message.data.rating
        this.changeDetector.detectChanges()
        this.returnMessageToReactWhenReceived()
      })
    }
  
    returnMessageToReactWhenReceived() {
      event.emit('received', { text: 'Woohoo! Hello from Angular! 🎉' })
    }
  }