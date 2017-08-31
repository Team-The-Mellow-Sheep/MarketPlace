import { IEntity } from './../../shared/services/abstract-firebase.service';

export class Home implements IEntity {
  constructor(
    public title: string,
    public image: string,
    public $key: string
  ) { }
}
