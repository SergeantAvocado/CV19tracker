import {animate,trigger,transition,style,state} from '@angular/animations'

export let fade = trigger('fade',[
    state('void',style({opacity:0})),
    transition(':enter,:leave',[
        animate(700)
    ])
]);

export let slide= trigger('slide',
[
    state('void',style({transform:'TranslateX(-30px)'})),
    transition(':enter',[
        animate(1500)
    ])
]);