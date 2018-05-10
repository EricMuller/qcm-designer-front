import {AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {FabToggleComponent} from './fab-toggle/fab-toggle.component';
import {FabButtonComponent} from './fab-button/fab-button.component';

@Component({
  selector: 'app-fab',
  templateUrl: './fab-menu.component.html',
  styleUrls: ['./fab-menu.component.scss']
})
export class FabMenuComponent implements AfterContentInit {
  /*implements AfterContentInit { */

  @Input()
  private dir = 'right';

  @Output()
  public toggleEvent = new EventEmitter<Boolean>();

  @ContentChild(FabToggleComponent)
  private fabToggleButton;

  @ContentChildren(FabButtonComponent)
  private fabMenuButtons;

  private element: any;

  private _opened: Boolean = false;

  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }

  public ngAfterContentInit() {
    if (this.fabToggleButton) {
      this.fabToggleButton.onClick.subscribe(() => {
        this.opened = !this.opened;
      });
    } else {
      this._opened = true;
    }
    this.updateButtons()
  }

  public updateButtons() {
    let idx = 1;
    if (this.fabMenuButtons) {
      for (const btn of this.fabMenuButtons.toArray()) {
        const style = btn.element.nativeElement.style;
        // style['transition-duration'] = active ? `${ 90 + (100 * idx) }ms` : '';
        // style['transform'] = active ? this.getTranslate(idx) : '';
        style['display'] = this.opened ? 'flex' : 'none';
        idx++;
      }
    }
  }

  public get opened() {
    return this._opened;
  }

  public set opened(edition: Boolean) {
    this._opened = edition;
    this.updateButtons();
    this.fabToggleButton.edition = edition;
    this.toggleEvent.emit(this.opened);
  }


//   private getTranslate(idx) {
//     if (this.dir === 'up') {
//       return `translate3d(${ 60 * idx }px,0,0)`;
//     } else if (this.dir === 'down') {
//       return `translate3d(0,${ 60 * idx }px,0)`;
//     } else {
//       console.error(`Unsupported direction for Fab; ${this.dir}`);
//     }
//   }

// @HostListener('document:click', ['$event.target'])
// public onDocumentClick(target) {
//   if (this.fabToggle && this.opened && !this.element.contains(target)) {
//     this.opened = false;
//   }
// }

}
