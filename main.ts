import { Construct } from 'constructs';
import { App, Chart, ChartProps } from 'cdk8s';

// imported constructs
import { KubeDeployment, KubeService, IntOrString } from './imports/k8s';

// Sets bucket_name to undefined if environment variable not set
// var container = process.env.CONTAINER;
// console.log(container)

let appname = process.env.APPNAME as string;

export class MyChart extends Chart {
  constructor(scope: Construct, id: string, props: ChartProps = { }) 
  {
    super(scope, id, props);

    const label = { app: appname };

    new KubeService(this, 'service', {
      spec: {
        type: 'LoadBalancer',
        ports: [ { port: 80, targetPort: IntOrString.fromNumber(8080) } ],
        selector: label
      }
    });

    new KubeDeployment(this, 'deployment', {
      metadata: {name: appname},
      spec: {
        replicas: 2,
        selector: {
          matchLabels: label
        },
        template: {
          metadata: { labels: label },
          spec: {
            containers: [
              {
                name: appname,
                image: process.env.CONTAINER,
                ports: [ { containerPort: 8080 } ]
              }
            ]
          }
        }
      }
    });
  }
}

const app = new App();
new MyChart(app, appname);
app.synth();