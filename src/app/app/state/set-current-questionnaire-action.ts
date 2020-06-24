import {QuestionnaireModel} from '@app/app/state/questionnaire-model';

export class SetCurrentQuestionnaireAction {

  static readonly type = '[Questionnaire] SetCurrent';

  constructor(public payload: QuestionnaireModel) {
  }

}
