import { Villager } from './villager-model';

export class User {

  username: string;
  villagers: Villager[];

  constructor(userInfo: any) {
    this.username = userInfo.username;

    userInfo.villagers.map((vil) => new Villager(vil));
  }


}
