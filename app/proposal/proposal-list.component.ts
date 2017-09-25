import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	moduleId: module.id,
	selector: 'personal-list',
	templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
	ProposalOne: Proposal = new Proposal(15, 'Abc Company', 'https://portfolio.stevenjames.com', 'Ruby on Rails', 150, 120, 15, 'steven.james.dev@gmail.com')
	ProposalTwo: Proposal = new Proposal(25, 'Xyz Company', 'https://portfolio.stevenjames.com', 'Ruby on Rails', 150, 120, 15, 'steven.james.dev@gmail.com')
	ProposalThree: Proposal = new Proposal(400, 'Lmno Company', 'https://portfolio.stevenjames.com', 'Ruby on Rails', 150, 120, 15, 'steven.james.dev@gmail.com')

	proposals: Proposal[] = [
		this.ProposalOne,
		this.ProposalTwo,
		this.ProposalThree
	]
}