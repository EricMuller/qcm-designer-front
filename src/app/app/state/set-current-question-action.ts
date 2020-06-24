import {QuestionModel} from '@app/app/state/question-model';

export class SetCurrentQuestionAction {

  static readonly type = '[Question] SetCurrent';

  constructor(public payload: QuestionModel) {
  }

}
