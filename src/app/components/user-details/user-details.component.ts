import { ReqresApiService } from './../../services/reqres-api.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.sass']
})
export class UserDetailsComponent implements OnInit {

  user:any ={}

  constructor(
      private reqresApiService:ReqresApiService,
      private router:Router,
      private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')
    this.reqresApiService.getDetails(parseInt(id)).subscribe(result=>this.user=result.data)
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
