import { Component, OnInit, ViewChild } from '@angular/core';
import { AwsApiService } from '../../api/aws.service'; // Import the module
import { ClientSideRowModelModule, GridOptions } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-aws-component',

  templateUrl: './aws.component.html',
  styleUrls: ['./aws.component.css']
})
export class AwsResourcesComponent implements OnInit {
  selectedOption: string = 's3';
  s3Data: any[] = [];
  ebsData: any[] = [];
  ec2Data: any[] = [];
  modules: any[] = [ClientSideRowModelModule]
  defaultColDef = {
    width: 350,  // Set default width for all columns
    sortable: true,  // Enable sorting for all columns
    filter: true,    // Enable filtering for all columns
    resizable: true  // Enable resizing for all columns
  };
 
  columnDefsS3 = [
    { headerName: 'Account', field: 'account' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Cost', field: 'cost' },
    { headerName: 'Number of Objects', field: 'numerofobjects' }
  ];
  columnDefsEBS = [
    { headerName: 'Account', field: 'account' },
    { headerName: 'Volume ID', field: 'volumeid' },
    { headerName: 'Volume Read Operations', field: 'volumereadops',
      valueFormatter: function(params: any) {
        return params.value ? params.value.toFixed(4) : '0.0000';  // Round to 4 decimal places
      }
     },
    { headerName: 'Region', field: 'region' },
    { headerName: 'Created On', field: 'volume_created_on' },
    { headerName: 'Size (in GB)', field: 'size' },
    { headerName: 'URL', field: 'url' },
    { headerName: 'Cost', field: 'cost' }
  ];
  columnDefsEC2 = [
    { headerName: 'Account', field: 'account' },
    { headerName: 'Instance ID', field: 'name' },
    { headerName: 'Instance Type', field: 'instance_type' },

    { headerName: 'Region', field: 'region' },
    { headerName: 'Avg CPU Utilization', field: 'avg_cpu_utlization' },
    { headerName: 'Launch Time', field: 'launch_time' },
    { headerName: 'URL', field: 'url' },
    { headerName: 'Cost', field: 'cost' }
  ];

  rowData: any[] = [];
  gridApi: any;
  columnApi: any;

  constructor(private apiService: AwsApiService) {

  }

  ngOnInit(): void {
    this.loadData('ebs');
  }
  loading: boolean = false;





  loadData(option: string): void {
    this.selectedOption = option;
    if (option === 's3') {
      this.loading = true;
      this.apiService.getS3Buckets().subscribe(response => {
        this.s3Data = response
        this.rowData = this.s3Data;
        this.onResize()
      });
      this.loading = false
    } else if (option === 'ebs') {
      this.apiService.getEbsVolumes().subscribe(data => {
        this.ebsData = data;
        this.rowData = this.ebsData;
        this.onResize()
      });
    } else if (option === 'ec2') {
      this.apiService.getEc2Instances().subscribe(data => {
         console.log('EC2 Data:', data);
        this.ec2Data = data;
        this.rowData = this.ec2Data;
        this.onResize()
      });
    }
  }

  onGridReady(params: any): void {
    // Access gridApi and columnApi from params
    this.gridApi = params.api;
    this.columnApi = params.columnApi; // Auto-size columns when grid is ready
  }
  onResize(): void {
    if (this.gridApi) {
      this.gridApi.sizeColumnsToFit();

    }
  }
}
