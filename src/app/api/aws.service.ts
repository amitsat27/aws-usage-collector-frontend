import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { S3Bucket, EbsVolume, Ec2Instance } from '../models/aws.model';

@Injectable({
  providedIn: 'root'
})
export class AwsApiService {
  private apiUrl = "http://localhost:8006/api";  // Define your API URL here

  constructor(private http: HttpClient) {}

  // Fetch S3 Buckets using Observable
  getS3Buckets(): Observable<S3Bucket[]> {
     return this.http.get<any>(`${this.apiUrl}/aws/s3_buckets`).pipe(
      map(response => {
        // Flatten the data inside the service itself
        return response.data ? response.data.flat() : [];
      })
    );
  }

  // Fetch EBS Volumes using Observable
  getEbsVolumes(): Observable<EbsVolume[]> {
    return this.http.get<any>(`${this.apiUrl}/aws/ebs_volumes`).pipe(
        map(response => {
          // Flatten the data inside the service itself
          return response.data ? response.data.flat() : [];
        })
      );
  }

  // Fetch EC2 Instances using Observable
  getEc2Instances(): Observable<Ec2Instance[]> {
    return this.http.get<any>(`${this.apiUrl}/aws/ec2_metrics`).pipe(
        map(response => {
          // Flatten the data inside the service itself
          return response.data ? response.data.flat() : [];
        })
      );
  }
}
