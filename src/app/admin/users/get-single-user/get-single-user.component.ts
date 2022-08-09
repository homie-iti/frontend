import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-get-single-user',
  templateUrl: './get-single-user.component.html',
  styleUrls: ['./get-single-user.component.css'],
})
export class GetSingleUserComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private ac: ActivatedRoute,
    private router: Router
  ) {}

  id: string = this.ac.snapshot.params['id'];
  user: any = {};

  ngOnInit(): void {
    this.adminService.getUserById(this.id).subscribe((userData) => {
      this.user = userData;
      console.log(userData);
    });
  }
}
