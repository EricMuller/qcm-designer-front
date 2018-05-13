import {Component, OnInit, ViewChild} from '@angular/core';
import {Questionnaire} from '../../../api/model/questionnaire.model';
import {QuestionnaireService} from '../../../api/services/questionnaire.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NotifierService} from '../../../core/simple-notifier.service';
import {FabMenuComponent} from '../../../shared/emu/components/fab/fab-menu.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {QuestionnaireStore} from '../stores/questionnaire-store.service';


@Component({
  selector: 'app-questionnaire-detail',
  templateUrl: './questionnaire-detail.component.html',
  styleUrls: ['./questionnaire-detail.component.css']
})
export class QuestionnaireDetailComponent implements OnInit {

  @ViewChild(FabMenuComponent) fabMenu: FabMenuComponent;

  public questionnaire: Questionnaire;

  public edition: Boolean;

  public questionnaireForm: FormGroup;

  constructor(private questionnaireService: QuestionnaireService,
              private route: ActivatedRoute,
              private notifierService: NotifierService,
              private router: Router,
              private questionnaireStore: QuestionnaireStore) {

    this.route.data.subscribe(data => {
      this.questionnaire = data.questionnaire;
    });

    this.questionnaireForm = new FormGroup({
      title: new FormControl({value: '', disabled: true}, Validators.required),
      description: new FormControl({value: '', disabled: true}, Validators.required),
      epic: new FormControl({value: '', disabled: true}),
      // tag: new FormControl({value: '', disabled: false}, Validators.required),
    });

  }

  ngOnInit(): void {
    if (!this.questionnaire.id) {
      this.fabMenu.opened = true;
    }
  }

  public toggleFabEvent(event: boolean) {
    if (event) {
      this.questionnaireForm.enable();
    } else {
      this.questionnaireForm.disable();
    }
    this.edition = event;
  }

  // public getQuestions(questionnaireId: Number) {
  //   this.results = this.questionService.getQuestionsByQuestionnaireId(questionnaireId);
  // }

  public deleteQuestionnaire(q: Questionnaire) {

    this.questionnaireStore.deleteElement(q).subscribe(
      (d) => {
        this.notifierService.notifySuccess(d.title + ' deleted', 2000);
        this.router.navigate(['/questionnaires/list']);
      });

  }

  public saveQuestionnaire(q: Questionnaire) {

    // const updatedTag: Tag[] = q.tags.map(function (v) {
    //   if (v.id) {
    //     return v;
    //   } else {
    //     const tag = new Tag();
    //     tag.id = 0;
    //     tag.libelle = v;
    //     return tag;
    //   }
    // });

    // q.tags.slice(0);
    // q.tags.push(updatedTag);

    for (const i in this.questionnaireForm.controls) {
      this.questionnaireForm.controls[i].markAsTouched();
    }

    if (this.questionnaireForm.valid) {
      this.questionnaireService.postQuestionnaire(q).subscribe((data) => {
        this.questionnaire = data;
        // const itemIndex = this._questionnaires.findIndex(item => item.id === data.id);
        // this._questionnaires[itemIndex] = data;
        // this.rightSideNav.toggle();
        this.fabMenu.opened = false;
        this.notifierService.notifySuccess(data.title, 2000);
      });
    }
  }


}
