export interface EbsVolume {
  account: string;
  volumeid: string;
  region: string;
  volume_created_on: string;
  size: number;
  url: string;
  cost: string;
  properties: {
    coldef: string;
  };
}

export interface S3Bucket {
  account: string;
  name: string;
  cost: string;
  properties: {
    coldef: string;
  };
}

export interface Ec2Instance {
  account: string;
  name: string;
  region: string;
  avg_cpu_utlization: string;
  launch_time: string;
  url: string;
  cost: string;
  properties: {
    coldef: string;
  };
}
