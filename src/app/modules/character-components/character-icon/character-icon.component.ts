import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharacterInfo } from '@shared/core/character-info';

@Component({
    selector: 'character-icon',
    templateUrl: './character-icon.component.html',
    styleUrls: ['./character-icon.component.less']
})
export class CharacterIconComponent {
    @Input() highlight: boolean = false;
    @Input() showName: boolean = false;
    @Input({ required: true }) character!: CharacterInfo;
    @Output() click = new EventEmitter<CharacterInfo>();

    clickEvent(event: MouseEvent, character: CharacterInfo) {
        event.stopPropagation();
        this.click.emit(character);
    }
}
