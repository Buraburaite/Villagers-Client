import { Component, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap';

import { Villager } from '../../models/villager.model';

class RelationGroup {

  title: string;
  vilList: Villager[];

  constructor(title: string, vilList: Villager[]) {
    this.title = title;
    this.vilList = vilList;
  }
}

@Component({
  selector: 'visit-modal',
  templateUrl: './visit-modal.component.html',
  styleUrls: ['./visit-modal.component.scss']
})
export class VisitModalComponent implements OnInit {

  /*====
  Must be a VisitationService
  (avoiding circular imports)
  ====*/
  public visitation: any;


  private _vilToVisit: Villager;
  get vilToVisit(): Villager { return this._vilToVisit; }
  set vilToVisit(vil: Villager) {
    const newGroups = [];

    // Give parent relations to students and teachers
    if (['student', 'teacher'].includes(vil.kind)) {
      newGroups.push(new RelationGroup('Parents', vil.parents));
    }

    // Give teacher relations to parents and students
    if (['parent', 'students'].includes(vil.kind)) {
      newGroups.push(new RelationGroup('Teachers', vil.teachers));
    }

    // All vils have student relations, what changes is the name
    newGroups.push(
      new RelationGroup(
        vil.kind === 'student' ? 'Classmates' : 'Students',
        vil.students
      )
    );
    // Sort groups alphabetically by title
    this.relationGroups = newGroups.sort(
      (a,b) => (a.title > b.title) ? 1 : -1
    );

    this._vilToVisit = vil;
  }

  private relationGroups: RelationGroup[];
  private picPath: string = 'assets/profile-pictures/';

  constructor(
    /*====
    BsModalRef is a singleton
    It references whichever BsModal is currently open
    ====*/
    private modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

  // NOTE: This needs to not be a circular import I think
  confirmVisit() {
    this.visitation.visit(this.vilToVisit);
    this.modalRef.hide();
  }

}
