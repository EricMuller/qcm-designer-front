import {SetCurrentQuestionnaireAction} from './set-current-questionnaire-action';

describe('SelectQuestionnaire', () => {
  it('should create an instance', () => {
    expect(new SetCurrentQuestionnaireAction({title: null, uuid: null})).toBeTruthy();
  });
});
