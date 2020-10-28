
import { ReqresApiService } from './../../services/reqres-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'email', 'first_name', 'last_name'];

  dataSource = new MatTableDataSource<any>([]);
  savedSource = [];
  isLoading = true;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  totalElements: any =0;

  
  constructor(private myApiService:ReqresApiService,
    private router:Router) { }

  ngOnInit() {
    this.myApiService.getList(1,500).subscribe(result=>{
      this.totalElements = result.total;
      this.dataSource.data = result.data;
      this.savedSource = result.data;
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    });
  }

  // For Server Side Pagination

  // pageChanged(newPage:any) {
  //   this.myApiService.getList(newPage.pageIndex+1,newPage.pageSize).subscribe(result=>{
  //     this.totalElements = result.total;
  //     this.dataSource.data = result.data;
  //   });
  // }

  goToDetails(passedId:number) {
    console.log(passedId)
    this.router.navigate(['/user-details/'+passedId]);
  }

  search(id) {
    if(id)
      this.dataSource.data = this.savedSource.filter(x=>x.id==id)
    else 
      this.dataSource.data = this.savedSource;
  }
}
