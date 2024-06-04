import { BehaviorSubject } from "rxjs";

export abstract class Store<T>{
    private state$: BehaviorSubject<T> = new BehaviorSubject(undefined);

    getAll
}