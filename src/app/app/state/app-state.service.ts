import {Injectable} from '@angular/core';
import {ClearCurrentQuestionnaireAction} from '@app/app/state/clear-current-questionnaire-action';
import {NavigationModel} from '@app/app/state/navigation-model';
import {QuestionModel} from '@app/app/state/question-model';
import {QuestionnaireModel} from '@app/app/state/questionnaire-model';
import {SetCurrentQuestionAction} from '@app/app/state/set-current-question-action';
import {SetCurrentQuestionnaireAction} from '@app/app/state/set-current-questionnaire-action';
import {Action, Selector, State, StateContext} from '@ngxs/store';

const navigation = [
  {link: '/home', label: 'menu.about'},
  {link: '/questionnaires/list', label: 'menu.questionnaires'},
  {link: '/questions/list', label: 'menu.questions'},
];

export class AppStateModel {
  currentQuestionnaire: QuestionnaireModel;
  currentQuestion: QuestionModel;
  navigation: NavigationModel[];
  breadcrumb: NavigationModel[];
}

@State<AppStateModel>({
  name: 'Application',
  defaults: {
    currentQuestionnaire: {uuid: '', title: ''},
    currentQuestion: {uuid: '', title: ''},
    navigation: [
      ...navigation,
      {link: '/upload/', label: 'menu.upload'},
    ],
    breadcrumb: []
  }
})

@Injectable()
export class AppState {

  @Selector()
  static currentQuestionnaire(state: AppStateModel) {
    return state.currentQuestionnaire;
  }

  @Selector()
  static navigation(state: AppStateModel) {
    return state.navigation;
  }

  @Selector()
  static breadcrumb(state: AppStateModel) {
    return state.breadcrumb;
  }

  @Action(ClearCurrentQuestionnaireAction)
  clearCurrentQuestionnaireAction({getState, patchState}: StateContext<AppStateModel>) {
    const state = getState();
    patchState({
      ...state,
      currentQuestionnaire: null,
      breadcrumb: []
    });
  }


  @Action(SetCurrentQuestionnaireAction)
  currentQuestionnaireAction({getState, patchState}: StateContext<AppStateModel>, {payload}: SetCurrentQuestionnaireAction) {
    const state = getState();
    patchState({
      ...state,
      currentQuestionnaire: payload,
      breadcrumb: [{link: '/questionnaires/' + payload.uuid, label: payload.title},
        {link: '/questionnaires/' + payload.uuid + '/questions', label: 'Questions'}
      ]
    });
  }

  @Action(SetCurrentQuestionAction)
  currentQuestion({getState, patchState}: StateContext<AppStateModel>, {payload}: SetCurrentQuestionAction) {
    const state = getState();

    patchState({
      ...state,
      currentQuestion: payload
    });

  }
}
