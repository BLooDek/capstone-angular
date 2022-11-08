import { NotebookState } from './nootebook.state';
import { initialNotebookState } from '../reducers/notebook.reducers';

export interface IModuleState {
  notebook: NotebookState;
}
export const initialModuleState: IModuleState = {
  notebook: initialNotebookState,
};
