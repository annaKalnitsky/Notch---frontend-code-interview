import {UserInputs} from "./UserInputs";

export type StepInput = {
    userInput: UserInputs,
    setUserInput: (partialInput: Partial<UserInputs>) => void;
}